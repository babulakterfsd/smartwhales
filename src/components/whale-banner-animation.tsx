"use client";

import Lottie from "lottie-react";
import whaleBannerAnimation from "../../public/whale-banner-animation.json";

export const WhaleBannerAnimation = () => {
  return (
    <Lottie className="absolute inset-0" animationData={whaleBannerAnimation} />
  );
};
