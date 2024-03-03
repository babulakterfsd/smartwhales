"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import TweetEmbed from "react-tweet-embed";

export const SwiperBase = () => {
  const tweetEmbedOptions = { theme: "dark" };

  return (
    <Swiper
      style={{ minHeight: "68px" }}
      navigation={true}
      modules={[Navigation]}
      className="lg:!hidden"
    >
      <SwiperSlide>
        <div className="flex justify-center px-[60px]">
          <div className="w-full max-w-[550px]">
            <TweetEmbed
              options={tweetEmbedOptions}
              tweetId="1681922904458674177"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center px-[60px]">
          <div className="w-full max-w-[550px]">
            <TweetEmbed
              options={tweetEmbedOptions}
              tweetId="1679312411344633856"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center px-[60px]">
          <div className="w-full max-w-[550px]">
            <TweetEmbed
              options={tweetEmbedOptions}
              tweetId="1680636103999496194"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center px-[60px]">
          <div className="w-full max-w-[550px]">
            <TweetEmbed
              options={tweetEmbedOptions}
              tweetId="1681843994186387457"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center px-[60px]">
          <div className="w-full max-w-[550px]">
            <TweetEmbed
              options={tweetEmbedOptions}
              tweetId="1677828720290086913"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center px-[60px]">
          <div className="w-full max-w-[550px]">
            <TweetEmbed
              options={{ ...tweetEmbedOptions, cards: "hidden" }}
              tweetId="1681964143799336960"
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
