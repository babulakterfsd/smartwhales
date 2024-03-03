import { cn } from "@/lib/utils";
import * as React from "react";

export const TwitterX = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-[24px] w-[24px]", className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="12" cy="12" r="12" fill="currentColor" />
      <path
        d="M9.54205 5.02637H5.13184L15.3255 20H19.8149L9.54205 5.02637Z"
        fill="#0A021B"
      />
      <path d="M19.2606 5H18.0194L5 20H6.37324L19.2606 5Z" fill="#0A021B" />
      <path
        d="M8.96118 6.18835H6.92773L16.0915 19.2341H18.0457L8.96118 6.18835Z"
        fill="#0A021B"
      />
    </svg>
  );
};
