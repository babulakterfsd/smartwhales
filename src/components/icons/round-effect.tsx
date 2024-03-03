import { cn } from "@/lib/utils";

export const RoundEffect = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-[704px] w-full max-w-[1400px]", className)}
      viewBox="0 0 1400 704"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_f_460_34780)">
        <circle cx="700" cy="352" r="152" fill="#5200FF" fill-opacity="0.4" />
      </g>
      <path
        d="M700.372 266C428.081 266 183.403 334.329 14.8723 442.939C-68.1815 496.462 -132.742 559.769 -173 629.5H1573.74C1538.47 568.406 1484.55 512.244 1415.87 463.271C1247.11 342.926 989.285 266 700.372 266Z"
        fill="#020202"
      />
      <path
        d="M15.1431 443.359C183.577 334.812 428.156 266.5 700.372 266.5C989.207 266.5 1246.92 343.407 1415.58 463.679C1483.93 512.419 1537.64 568.271 1572.88 629H-172.133C-131.895 559.65 -67.5638 496.659 15.1431 443.359Z"
        stroke="url(#paint0_linear_460_34780)"
        strokeOpacity="0.54"
      />
      <path
        d="M700.372 272C428.081 272 183.403 340.329 14.8723 448.939C-68.1815 502.462 -132.742 565.769 -173 635.5H1573.74C1538.47 574.406 1484.55 518.244 1415.87 469.271C1247.11 348.926 989.285 272 700.372 272Z"
        fill="#020202"
      />
      <path
        d="M15.1431 449.359C183.577 340.812 428.156 272.5 700.372 272.5C989.207 272.5 1246.92 349.407 1415.58 469.679C1483.93 518.419 1537.64 574.271 1572.88 635H-172.133C-131.895 565.65 -67.5638 502.659 15.1431 449.359Z"
        stroke="url(#paint1_linear_460_34780)"
        strokeOpacity="0.44"
      />
      <path
        d="M700.372 278C428.081 278 183.403 346.329 14.8723 454.939C-68.1815 508.462 -132.742 571.769 -173 641.5H1573.74C1538.47 580.406 1484.55 524.244 1415.87 475.271C1247.11 354.926 989.285 278 700.372 278Z"
        fill="#020202"
      />
      <path
        d="M15.1431 455.359C183.577 346.812 428.156 278.5 700.372 278.5C989.207 278.5 1246.92 355.407 1415.58 475.679C1483.93 524.419 1537.64 580.271 1572.88 641H-172.133C-131.895 571.65 -67.5638 508.659 15.1431 455.359Z"
        stroke="url(#paint2_linear_460_34780)"
        strokeOpacity="0.32"
      />
      <path
        d="M700.372 284C428.081 284 183.403 352.329 14.8723 460.939C-68.1815 514.462 -132.742 577.769 -173 647.5H1573.74C1538.47 586.406 1484.55 530.244 1415.87 481.271C1247.11 360.926 989.285 284 700.372 284Z"
        fill="#020202"
      />
      <path
        d="M15.1431 461.359C183.577 352.812 428.156 284.5 700.372 284.5C989.207 284.5 1246.92 361.407 1415.58 481.679C1483.93 530.419 1537.64 586.271 1572.88 647H-172.133C-131.895 577.65 -67.5638 514.659 15.1431 461.359Z"
        stroke="url(#paint3_linear_460_34780)"
        strokeOpacity="0.2"
      />
      <defs>
        <filter
          id="filter0_f_460_34780"
          x="348"
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
            result="effect1_foregroundBlur_460_34780"
          />
        </filter>
        <linearGradient
          id="paint0_linear_460_34780"
          x1="700.372"
          y1="266"
          x2="700.372"
          y2="629.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5200FF" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_460_34780"
          x1="700.372"
          y1="272"
          x2="700.372"
          y2="635.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5200FF" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_460_34780"
          x1="700.372"
          y1="278"
          x2="700.372"
          y2="641.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5200FF" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_460_34780"
          x1="700.372"
          y1="284"
          x2="700.372"
          y2="647.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5200FF" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
