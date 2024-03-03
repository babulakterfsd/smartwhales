import { cn } from "@/lib/utils";
import * as React from "react";

export const Messenger = ({
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
        d="M11 0C4.92525 0 0 4.5595 0 10.1846C0 13.3898 1.59912 16.2484 4.09887 18.1156V22L7.84437 19.9444C8.844 20.2208 9.90275 20.3706 11 20.3706C17.0748 20.3706 22 15.8111 22 10.186C22 4.5595 17.0748 0 11 0Z"
        fill="currentColor"
      />
      <path
        d="M12.0936 13.7161L9.29277 10.7282L3.82715 13.7161L9.83865 7.33337L12.7083 10.3212L18.1065 7.33337L12.0936 13.7161Z"
        fill="#020202"
      />
    </svg>
  );
};
