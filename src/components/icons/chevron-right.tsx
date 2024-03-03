import { cn } from "@/lib/utils";
import * as React from "react";

export const ChevronRight = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-6 w-6", className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.96967 7.46967C9.26256 7.17678 9.73744 7.17678 10.0303 7.46967L14.0303 11.4697C14.3232 11.7626 14.3232 12.2374 14.0303 12.5303L10.0303 16.5303C9.73744 16.8232 9.26256 16.8232 8.96967 16.5303C8.67678 16.2374 8.67678 15.7626 8.96967 15.4697L12.4393 12L8.96967 8.53033C8.67678 8.23744 8.67678 7.76256 8.96967 7.46967Z"
        fill="currentColor"
      />
    </svg>
  );
};
