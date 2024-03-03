import { cn } from "@/lib/utils";
import React from "react";

export const Astro = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-[19px] w-[18px]", className)}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_562_35604)">
        <circle
          cx="9"
          cy="9.88965"
          r="9"
          fill="url(#paint0_linear_562_35604)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.53456 5.28955C7.68404 5.036 7.85251 4.88037 8.14685 4.88037H9.937C10.2313 4.88037 10.4206 5.036 10.5701 5.28955L14.3306 12.5852C14.9241 13.6621 14.819 13.8388 14.1756 13.8388H11.8507C11.5312 13.2573 10.3894 11.1339 10.4316 10.8228C10.5073 10.2637 11.3907 8.81092 11.3907 8.81092C11.6257 8.37035 11.3128 7.83187 10.8241 7.83187H7.25952C6.77078 7.83187 6.46073 8.37035 6.69579 8.81092C6.69579 8.81092 7.6211 10.2534 7.6211 10.8228C7.48967 11.6426 6.5026 13.3338 6.19948 13.8388H3.8667C3.22332 13.8388 3.27403 13.4751 3.75326 12.5852L7.53456 5.28955ZM9.02114 11.9473C9.02114 11.3342 9.60313 10.7626 10.2059 10.7626C9.59273 10.7626 9.02114 10.2118 9.02114 9.57783C9.02114 10.2118 8.49112 10.7626 7.83638 10.7626C8.48072 10.7626 9.02114 11.3342 9.02114 11.9473Z"
          fill="white"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_562_35604"
          x1="2.9515"
          y1="3.2072"
          x2="15.3187"
          y2="17.1541"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#08B3EE" />
          <stop offset="0.619792" stopColor="#5745FA" />
          <stop offset="1" stopColor="#1714F4" />
        </linearGradient>
        <clipPath id="clip0_562_35604">
          <rect
            width="18"
            height="18"
            fill="white"
            transform="translate(0 0.889648)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
