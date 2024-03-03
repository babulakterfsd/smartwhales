export const TweetsEllipses = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 427 470"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_f_18_254)">
        <circle
          cx="213.5"
          cy="213.5"
          r="53.5"
          fill="#5200FF"
          fillOpacity="0.6"
        />
      </g>
      <circle
        cx="214"
        cy="310"
        r="139.5"
        stroke="#5200FF"
        strokeOpacity="0.28"
      />
      <circle
        cx="214"
        cy="310"
        r="119.5"
        stroke="#5200FF"
        strokeOpacity="0.4"
      />
      <circle
        cx="214"
        cy="310"
        r="159.5"
        stroke="#5200FF"
        strokeOpacity="0.16"
      />
      <defs>
        <filter
          id="filter0_f_18_254"
          x="0"
          y="0"
          width="427"
          height="427"
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
            stdDeviation="80"
            result="effect1_foregroundBlur_18_254"
          />
        </filter>
      </defs>
    </svg>
  );
};
