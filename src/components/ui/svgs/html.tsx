import type { SVGProps } from "react";

const HTML = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 128 128">
    <path fill="#E34F26" d="M19 3l9 100 36 10 36-10 9-100z" />
    <path fill="#EF652A" d="M64 117l29-8 8-90H64z" />
  </svg>
);

export { HTML };