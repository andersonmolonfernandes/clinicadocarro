# How to generate optimized favicons and OG images

This repository contains scripts to generate all favicon/icon sizes and an OG image from a single master logo file.

IMPORTANT: you must place the original high-resolution logo (PNG or JPG) at:

  public/source/logo-original.png

Then run the script below on a machine that has ImageMagick (convert) and oxipng installed.

Recommended tools:
- ImageMagick (convert)
- oxipng (for lossless PNG optimization)
- svgo (optional, for SVG optimization)

Usage:

  chmod +x tools/generate-favicons.sh
  ./tools/generate-favicons.sh public/source/logo-original.png

What the script does:
- Creates PNG icons at 16x16, 32x32, 48x48, 96x96, 192x192, 512x512
- Creates apple-touch-icon 180x180
- Creates a favicon.ico containing multiple sizes (16/32/48)
- Generates an OG image 1200x630 (centered, with safe padding and darker background if needed)
- Runs oxipng on produced PNGs to optimize size

After running the script, commit the generated files under public/icons and public/og so the site will serve them.

If you want me to generate and push the actual image files, upload the original logo PNG to the path above in the repository (or provide a direct link to the master PNG) and I will add the generated assets to the branch and open a PR.
