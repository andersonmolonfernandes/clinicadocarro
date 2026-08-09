#!/usr/bin/env bash
# generate-favicons.sh
# Usage: ./generate-favicons.sh path/to/logo.png
# Requirements: ImageMagick (convert), oxipng

set -euo pipefail

if [ "$#" -lt 1 ]; then
  echo "Usage: $0 path/to/logo.png"
  exit 1
fi

SRC="$1"
OUT_DIR="public/icons"
OG_DIR="public/og"

mkdir -p "$OUT_DIR"
mkdir -p "$OG_DIR"

echo "Source: $SRC"

# Ensure source exists
if [ ! -f "$SRC" ]; then
  echo "Source file not found: $SRC"
  exit 2
fi

# Create square working image (center crop) to avoid distortion
TMP_SQ="/tmp/logo_sq.png"
convert "$SRC" -resize 1400x1400^ -gravity center -extent 1400x1400 "$TMP_SQ"

# Generate PNG icons
sizes=(16 32 48 96 180 192 512)
for s in "${sizes[@]}"; do
  out="$OUT_DIR/favicon-${s}x${s}.png"
  echo "Generating $out"
  convert "$TMP_SQ" -resize ${s}x${s} -background none -flatten "$out"
done

# apple touch icon (180x180)
convert "$TMP_SQ" -resize 180x180 -background none -flatten "$OUT_DIR/apple-touch-icon.png"

# OG image 1200x630: center logo with padding and optional dark background
OG_OUT="$OG_DIR/og-home-1200x630.png"
convert -size 1200x630 canvas:'#000000' "$TMP_SQ" -resize 900x900 -gravity center -geometry +0+0 -composite -background none -flatten "$OG_OUT"

# Create favicon.ico (include 16,32,48)
convert "$OUT_DIR/favicon-16x16.png" "$OUT_DIR/favicon-32x32.png" "$OUT_DIR/favicon-48x48.png" "$OUT_DIR/favicon-96x96.png" "$OUT_DIR/favicon-192x192.png" "$OUT_DIR/favicon-512x512.png" "$OUT_DIR/apple-touch-icon.png" -colors 256 public/favicon.ico

# Optimize PNGs with oxipng if available
if command -v oxipng >/dev/null 2>&1; then
  echo "Optimizing PNGs with oxipng"
  oxipng -o 4 -strip all "$OUT_DIR"/*.png || true
  oxipng -o 4 -strip all "$OG_OUT" || true
fi

echo "Generated icons in $OUT_DIR and OG image in $OG_DIR"

echo "Remember to commit the generated files (public/icons/*, public/favicon.ico, public/og/*) to the repo."
