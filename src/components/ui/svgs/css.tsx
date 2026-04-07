import type { SVGProps } from "react";

const CSS = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 128 128">
    <path fill="#1572B6" d="M19 3l9 100 36 10 36-10 9-100z" />
    <path fill="#33A9DC" d="M64 117l29-8 8-90H64z" />
  </svg>
);

export { CSS };