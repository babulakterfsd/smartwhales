import { cn } from "@/lib/utils";
import * as React from "react";

export const ArrowRight2 = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-[14px] w-[14px]", className)}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.17053 3.08736C7.39833 2.85955 7.76768 2.85955 7.99549 3.08736L11.4955 6.58736C11.7233 6.81516 11.7233 7.18451 11.4955 7.41232L7.99549 10.9123C7.76768 11.1401 7.39833 11.1401 7.17053 10.9123C6.94272 10.6845 6.94272 10.3152 7.17053 10.0874L9.67472 7.58317H2.91634C2.59418 7.58317 2.33301 7.322 2.33301 6.99984C2.33301 6.67767 2.59418 6.4165 2.91634 6.4165H9.67472L7.17053 3.91232C6.94272 3.68451 6.94272 3.31516 7.17053 3.08736Z"
        fill="currentColor"
      />
    </svg>
  );
};
