import type { SVGProps } from "react";

const CPP = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 128 128">
    <circle cx="64" cy="64" r="50" fill="#00599C" />
    
    {/* C++ Text */}
    <text
      x="50"
      y="75"
      textAnchor="middle"
      fontSize="40"
      fill="#fff"
      fontFamily="Arial"
    >
      C
    </text>

    {/* ++ symbols */}
    <text
      x="80"
      y="70"
      textAnchor="middle"
      fontSize="25"
      fill="#fff"
      fontFamily="Arial"
    >
      ++
    </text>
  </svg>
);

export { CPP };