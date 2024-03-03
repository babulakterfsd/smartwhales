import { cn } from "@/lib/utils";

export const MoneyDeposit = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-[19px] w-[19px]", className)}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_875_311)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.25 15.125L9.5 18.5L11.75 15.125H10.625V12.875H8.375V15.125H7.25ZM1.625 10.625H17.375V1.625H1.625V10.625ZM0.5 0.5H18.5V11.75H0.5V0.5ZM11.8865 3.73851C11.2536 3.10558 10.3951 2.75 9.5 2.75H15.125V3.875H16.25V8.375H15.125V9.5H9.5C10.3951 9.5 11.2536 9.14442 11.8865 8.51149C12.5194 7.87855 12.875 7.02011 12.875 6.125C12.875 5.22989 12.5194 4.37145 11.8865 3.73851ZM9.5 9.5C8.60489 9.5 7.74645 9.14442 7.11351 8.51149C6.48058 7.87855 6.125 7.02011 6.125 6.125C6.125 5.22989 6.48058 4.37145 7.11351 3.73851C7.74645 3.10558 8.60489 2.75 9.5 2.75H3.875V3.875H2.75V8.375H3.875V9.5H9.5Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_875_311">
          <rect
            width="18"
            height="18"
            fill="white"
            transform="translate(0.5 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
