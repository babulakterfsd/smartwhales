import { cn } from "@/lib/utils";

export const CaretDown = ({
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
        d="M9.46967 6.96967C9.76256 6.67678 10.2374 6.67678 10.5303 6.96967L14.5303 10.9697C14.8232 11.2626 14.8232 11.7374 14.5303 12.0303L10.5303 16.0303C10.2374 16.3232 9.76256 16.3232 9.46967 16.0303C9.17678 15.7374 9.17678 15.2626 9.46967 14.9697L12.9393 11.5L9.46967 8.03033C9.17678 7.73744 9.17678 7.26256 9.46967 6.96967Z"
        fill="currentColor"
        fillOpacity="0.5"
      />
    </svg>
  );
};
