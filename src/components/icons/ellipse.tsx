import React from "react";

export const Ellipse = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 704 704"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Ellipse 633" filter="url(#filter0_f_11_4)">
        <circle cx="352" cy="352" r="152" fill="#5200FF" fillOpacity="0.4" />
      </g>
      <defs>
        <filter
          id="filter0_f_11_4"
          x="0"
          y="0"
          width="704"
          height="704"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="100"
            result="effect1_foregroundBlur_11_4"
          />
        </filter>
      </defs>
    </svg>
  );
};
