import { cn } from "@/lib/utils";
import * as React from "react";

export const Logo = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="19"
      height="22"
      viewBox="0 0 19 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.6132 0.5C14.1219 0.500025 13.1002 0.5 9.48385 0.5C4.77492 0.886466 0.516113 4.57159 0.516113 10.3316C0.516113 13.7544 2.76537 20.3041 13.742 20.3041C15.2408 21.355 15.8859 21.4804 16.8111 21.1689C16.8949 20.2293 16.2866 19.6304 14.9492 18.5348C14.9935 17.2159 14.9692 16.5023 14.3942 15.5095C13.5574 15.6301 12.8934 16.4805 12.6038 17.8684C10.9899 17.9931 9.25894 16.4285 9.25894 14.8066V13.7544C9.45882 13.0835 9.70497 12.8267 10.4444 12.6356H15.0071C15.7817 12.4678 16.0067 12.1654 16.1465 11.3659H10.5143C10.0619 11.2961 9.8305 11.1367 9.45216 10.6421L9.59586 10.4922H17.9937C18.2941 10.3878 18.4019 10.2805 18.4953 10.0073C18.4953 10.0073 18.7434 5.41887 18.4953 3.51119C18.2472 1.6035 17.3339 0.861481 15.6132 0.5ZM8.55863 7.13604C9.0688 7.13604 9.48238 6.72247 9.48238 6.2123C9.48238 5.70212 9.0688 5.28854 8.55863 5.28854C8.04845 5.28854 7.63488 5.70212 7.63488 6.2123C7.63488 6.72247 8.04845 7.13604 8.55863 7.13604Z"
        fill="currentcolor"
      />
    </svg>
  );
};
