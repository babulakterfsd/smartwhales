import { cn } from "@/lib/utils";
import * as React from "react";

export const Facebook = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-[22px] w-[22px]", className)}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.062 0H4.938C2.21082 0 0 2.21082 0 4.938V17.062C0 19.7892 2.21082 22 4.938 22H17.062C19.7892 22 22 19.7892 22 17.062V4.938C22 2.21082 19.7892 0 17.062 0Z"
        fill="currentColor"
      />
      <path
        d="M15.4082 14.932L15.8767 12.0583H12.9589V10.1942C12.9589 9.40971 13.3658 8.64078 14.6726 8.64078H16V6.19417C16 6.19417 14.7959 6 13.6452 6C11.2411 6 9.67123 7.37476 9.67123 9.86796V12.0583H7V14.932H9.67123V22H12.9589V14.932H15.4082Z"
        fill="#020202"
      />
    </svg>
  );
};
