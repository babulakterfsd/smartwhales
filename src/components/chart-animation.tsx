"use client";

import Lottie from "lottie-react";
import chartAnimation from "../../public/chart-animation.json";

export const ChartAnimation = () => {
  return (
    <Lottie
      className="absolute inset-0"
      animationData={chartAnimation}
      loop={true}
    />
  );
};
