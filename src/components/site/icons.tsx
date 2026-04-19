import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { className?: string };

const baseProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Engine block with shine sparkle */
export function EngineShineIcon({ className, ...rest }: IconProps) {
  return (
    <svg {...baseProps} className={className} {...rest}>
      {/* Engine body */}
      <path d="M5 11h2V9h4l1.5-1.5h3V11h2.5a1.5 1.5 0 0 1 1.5 1.5V15a2 2 0 0 1-2 2h-1v1h-2v-1H9v1H7v-1H6a2 2 0 0 1-2-2v-2.5A1.5 1.5 0 0 1 5.5 11H5z" />
      <path d="M9 11V9" />
      {/* Sparkles */}
      <path d="M18 4l.6 1.4L20 6l-1.4.6L18 8l-.6-1.4L16 6l1.4-.6z" />
      <path d="M4 5l.4.9.9.4-.9.4L4 7.6l-.4-.9L2.7 6.3l.9-.4z" />
    </svg>
  );
}

/** Headlight with light beams */
export function HeadlightShineIcon({ className, ...rest }: IconProps) {
  return (
    <svg {...baseProps} className={className} {...rest}>
      {/* Headlight housing (D shape) */}
      <path d="M4 7h7a5 5 0 0 1 5 5 5 5 0 0 1-5 5H4z" />
      {/* Inner reflector */}
      <circle cx="10" cy="12" r="2" />
      {/* Light beams */}
      <path d="M18 9l3-1.5" />
      <path d="M19 12h3" />
      <path d="M18 15l3 1.5" />
    </svg>
  );
}

/** Car seat profile with sparkle */
export function SeatShineIcon({ className, ...rest }: IconProps) {
  return (
    <svg {...baseProps} className={className} {...rest}>
      {/* Seat back */}
      <path d="M7 14V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v8" />
      {/* Seat base */}
      <path d="M5 14h11a2 2 0 0 1 2 2v2H7a2 2 0 0 1-2-2z" />
      {/* Sparkle */}
      <path d="M18 5l.5 1.2L20 7l-1.5.5L18 9l-.5-1.5L16 7l1.5-.8z" />
    </svg>
  );
}
