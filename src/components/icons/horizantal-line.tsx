import { cn } from "@/lib/utils";

export const HorizontalLine = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-[259px] w-0.5")}
      viewBox="0 0 2 259"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 0V259" stroke="#4100CC" strokeOpacity="0.3" />
    </svg>
  );
};
