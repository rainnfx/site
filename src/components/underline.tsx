import * as React from "react";

const Underline: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="144"
    height="14"
    fill="none"
    viewBox="0 0 144 14"
    {...props}
  >
    <title>hero underline</title>
    <path
      fill="#42CCA0"
      stroke="#42CCA0"
      d="M143.643 6.444c-35.5 16.5-155.588-4.833-141.5-5.398 27.502-1.102 99 17.898 141.5 5.398Z"
    />
  </svg>
);

export default Underline;
