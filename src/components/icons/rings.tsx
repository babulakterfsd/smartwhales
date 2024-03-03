import { cn } from "@/lib/utils";

export const Rings = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-[30px] w-[30px]", className)}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="15" cy="15" r="15" fill="#020202" />
      <circle cx="15" cy="15" r="14.5" stroke="#5200FF" strokeOpacity="0.16" />
      <circle cx="15" cy="15" r="11" fill="#020202" />
      <circle cx="15" cy="15" r="10.5" stroke="#5200FF" strokeOpacity="0.28" />
      <circle cx="15" cy="15.0002" r="7" fill="#020202" />
      <circle
        cx="15"
        cy="15.0002"
        r="6.5"
        stroke="#5200FF"
        strokeOpacity="0.4"
      />
      <circle cx="15" cy="14.9998" r="3" fill="#5200FF" fillOpacity="0.8" />
    </svg>
  );
};
