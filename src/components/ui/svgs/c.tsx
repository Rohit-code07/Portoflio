import type { SVGProps } from "react";

const C = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 128 128">
    <circle cx="64" cy="64" r="50" fill="#00599C" />
    <text
      x="64"
      y="75"
      textAnchor="middle"
      fontSize="50"
      fill="#fff"
      fontFamily="Arial"
    >
      C
    </text>
  </svg>
);

export { C };