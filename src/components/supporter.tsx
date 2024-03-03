import Image, { StaticImageData } from "next/image";

export const Supporter = ({
  src,
  alt,
  comingSoon,
  quality = 100,
}: {
  src: StaticImageData;
  alt: string;
  comingSoon?: boolean;
  quality?: number;
}) => {
  return (
    <div className="relative">
      <div className="relative inline-block h-[33px] rounded-[10px] bg-[#0F0F0F] px-[10px] py-[6px] lg:h-16 lg:px-5 lg:py-3">
        <div className="absolute inset-0 rounded-[10px] border border-[#5200ff]" />
        <div className="absolute inset-0 rounded-[10px] bg-gradient-to-b from-transparent to-[#0F0F0F]" />
        <Image
          className="relative h-full w-auto object-contain"
          src={src}
          alt={alt}
          quality={quality}
        />
      </div>
      {comingSoon && (
        <div className="relative -top-3 flex justify-center lg:-top-4">
          <div className="relative inline-flex rounded-md  bg-gradient-to-b from-[#5200FF]/50 to-[#5200FF]/10 px-2 py-0.5 text-center lg:px-3">
            <div className="absolute inset-0 rounded-md border border-white/20" />
            <div className="absolute inset-0 rounded-md bg-gradient-to-b from-transparent to-[#0f032b]"></div>
            <span className="relative shrink-0 text-[9px] font-medium leading-[16px] lg:text-xs lg:leading-5">
              Coming soon
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
