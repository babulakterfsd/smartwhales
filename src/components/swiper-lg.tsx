"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import TweetEmbed from "react-tweet-embed";

export const SwiperLg = () => {
  const tweetEmbedOptions = { theme: "dark" };
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="!hidden lg:!block"
    >
      <SwiperSlide>
        <div className="grid grid-cols-3 gap-[30px] px-[60px]">
          <div>
            <TweetEmbed
              tweetId="1681922904458674177"
              options={tweetEmbedOptions}
            />
          </div>
          <div className="gap-[30px] pt-[68px]">
            <TweetEmbed
              tweetId="1679312411344633856"
              options={tweetEmbedOptions}
            />
          </div>
          <div>
            <TweetEmbed
              tweetId="1680636103999496194"
              options={tweetEmbedOptions}
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="grid grid-cols-3 gap-[30px] px-[60px]">
          <div>
            <TweetEmbed
              tweetId="1681964143799336960"
              options={{ ...tweetEmbedOptions, cards: "hidden" }}
            />
          </div>
          <div className="gap-[30px] pt-[68px]">
            <TweetEmbed
              tweetId="1681843994186387457"
              options={tweetEmbedOptions}
            />
          </div>
          <div>
            <TweetEmbed
              tweetId="1677828720290086913"
              options={tweetEmbedOptions}
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
