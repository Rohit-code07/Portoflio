import type { SVGProps } from "react";

const DSA = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 64 64">
    <circle cx="32" cy="32" r="28" fill="#6C63FF" />
    <path
      d="M20 30c4-8 20-8 24 0M20 34c4 8 20 8 24 0"
      stroke="#fff"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

export { DSA };