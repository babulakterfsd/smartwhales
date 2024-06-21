"use client";

import Image from "next/image";
import Link from "next/link";

import arbitrum from "public/arbitrum.png";
import avalanche from "public/avalanche.png";
import binance from "public/binance.png";
import chainEdge from "public/chain-edge.png";
import dexGuru from "public/dex-guru.png";
import fantom from "public/fantom.png";
import lookOnChain from "public/look-on-chain.png";
import optimism from "public/optimism.png";
import polygon from "public/polygon.png";
import spotOnChain from "public/spot-on-chain.png";
import zkSync from "public/zk-sync.png";
import playstore from "../../public/playstore.png";
import solana from "../../public/sol.png";
import tg from "../../public/tg.png";
import webapp from "../../public/webapp.png";

import CountDown from "@/components/CountDown";
import { ChartAnimation } from "@/components/chart-animation";
import {
  ArrowRight,
  ArrowRight2,
  Astro,
  Bitcoin,
  CaretDown,
  Cat,
  Coinbase,
  Ellipse,
  HorizontalLine,
  Logo,
  LogoLg,
  MoneyDeposit,
  MoneyWithDraw,
  Plus,
  Rings,
  RingsSphere,
  Share,
  TrustWallet,
  USDT,
} from "@/components/icons";
import { ChevronRight } from "@/components/icons/chevron-right";
import { Partner } from "@/components/partner";
import { ShadowBehindHeroDash } from "@/components/shapes";
import { TweetsEllipses } from "@/components/shapes/tweets-ellipses";
import { Supporter } from "@/components/supporter";
import { SwiperBase } from "@/components/swiper-base";
import { SwiperLg } from "@/components/swiper-lg";
import { WhaleBannerAnimation } from "@/components/whale-banner-animation";
import { socialLinks } from "@/lib/constants";

const Home = () => {
  const targetDate = new Date("2027-12-31T23:59:59");

  return (
    <>
      {/* lg */}
      <header className="relative hidden border-b border-b-white/10 lg:block">
        <div className="flex h-[99px] items-center justify-between px-20">
          <Link href="/">
            <LogoLg />
          </Link>

          <div className="inline-flex items-center gap-x-10">
            <div className="inline-flex items-center gap-x-4">
              {socialLinks.map(({ link, icon: Icon }, key) => (
                <a key={key} href={link} target="_blank">
                  <Icon />
                </a>
              ))}
            </div>
            <Link
              className="h-[38px] shrink-0 rounded-full bg-[#5200FF] px-6 py-2 text-[15px] font-medium leading-[22px] text-white"
              href="https://smartwhales.craft.me/smartwhales"
            >
              Documentation
            </Link>
            <Link
              className="h-[38px] shrink-0 rounded-full bg-[#5200FF] px-6 py-2 text-[15px] font-medium leading-[22px] text-white"
              href="https://forms.gle/fuYGBJQF5W4amLdt6"
            >
              Whitelist
            </Link>
          </div>
        </div>
      </header>

      {/* base */}
      <header className="relative px-4 lg:hidden">
        <div className="border-b border-b-white/10">
          <div className="flex justify-evenly py-[14.5px]">
            {socialLinks.map(({ link, icon: Icon }, key) => (
              <a key={key} href={link}>
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-[17.5px] flex items-center justify-between">
          <Logo />
          <Link
            href="https://forms.gle/fuYGBJQF5W4amLdt6"
            className="h-8 shrink-0 rounded-full bg-[#5200FF] px-5 py-1.5 text-xs font-medium leading-5 text-white"
          >
            Whitelist
          </Link>
        </div>
      </header>

      <div className="bg-grid relative">
        <section className="mx-auto max-w-[1400px] px-4 pt-7 lg:px-5 lg:pt-[67.5px]">
          <div className="relative">
            <div className="shooter shooter--1"></div>
            <div className="shooter shooter--2"></div>
            <div className="shooter shooter--3"></div>
            <div className="shooter shooter--4"></div>
            <div className="shooter shooter--5"></div>
            <div className="shooter shooter--6"></div>
          </div>
          <div className="relative z-[1] mx-auto max-w-[828px] text-center">
            <h1 className="bg-gradient-to-b from-white to-white/50 bg-clip-text text-[36px] font-semibold leading-[44px] text-transparent lg:text-[60px] lg:leading-[72px]">
              Copy-trade most successful crypto whales.
            </h1>
            <p className="mt-3 text-[14px] leading-[22px] text-white lg:mt-4 lg:text-[18px] lg:leading-[30px]">
              Invest together with Binance Labs, Pantera Capital,  and a16z.
            </p>

            <div className="mt-[38px] inline-flex flex-col items-center gap-x-6 gap-y-[18px] lg:mt-12">
              <div className="flex flex-col items-center justify-between space-x-4 lg:flex-row">
                <Link
                  href="https://forms.gle/fuYGBJQF5W4amLdt6"
                  className="inline-flex h-[48px] items-center gap-x-[13px] rounded-full bg-[#5200FF] px-5 text-sm font-medium leading-[22px] text-white lg:gap-x-[12.75px] lg:px-6 lg:text-[15px]"
                >
                  <span>Whitelist for Early Access</span>
                  <ArrowRight />
                </Link>
                <Link
                  href="https://forms.gle/fuYGBJQF5W4amLdt6"
                  className="inline-flex h-[48px] items-center gap-x-[13px] rounded-full px-5 text-sm font-medium leading-[22px] text-white lg:gap-x-[12.75px] lg:px-6 lg:text-[15px]"
                >
                  <span>Subscribe with Email</span>
                  <ArrowRight />
                </Link>
              </div>

              {/* 3 logos */}
              <div className="mt-7 flex items-center justify-center space-x-7 md:space-x-12">
                <div>
                  <Image src={tg} alt="telegram" width={100} height={100} />
                </div>
                <div>
                  <Image src={webapp} alt="webapp" width={100} height={100} />
                </div>
                <div>
                  <Image
                    src={playstore}
                    alt="play store"
                    width={100}
                    height={100}
                  />
                </div>
              </div>

              {/* countdown */}
              <CountDown targetDate={targetDate} />

              {/* <Link
                href="/"
                className="inline-flex items-center gap-x-[13.5px] text-sm font-medium leading-[22px] text-white lg:gap-x-[12.75px] lg:text-[15px]"
              >
                <span>Subscribe with Email</span>
                <ArrowRight />
              </Link> */}
            </div>
          </div>

          <div className="relative mt-[46px] h-[330px] sm:h-[495px] md:h-[660px] lg:h-[990px] xl:mt-[82px]">
            <ShadowBehindHeroDash className="absolute -top-[150px] md:-top-[200px] lg:-top-[300px]" />
            <div className="absolute inset-0">
              <Image
                className="object-contain"
                src="/dashboard.svg"
                alt="Dashboard"
                fill
              />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,2,2,0)_0%,rgba(2,2,2,0.48)_42.93%,rgba(2,2,2,0.98)_56.6%,rgba(2,2,2,0.98)_69.38%,rgba(2,2,2,0.98)_80.63%,rgba(2,2,2,0.98)_80.63%)]"></div>
          </div>
        </section>

        <div className="relative">
          <div className="absolute inset-x-0 -top-[59.5px] bottom-0 sm:-top-[119px] md:-top-[178.5px] lg:-top-[238px]">
            <section className="relative z-[1] mx-auto max-w-[1400px] px-4 pb-4 md:pb-5 lg:px-5">
              <div className="mx-auto max-w-[930px] text-center">
                <h2 className="bg-gradient-to-b from-white to-white/50 bg-clip-text text-[26px] font-medium leading-[34px] text-transparent lg:text-5xl lg:leading-[60px]">
                  SmartWhales support all DEXs across 12 blockchain network
                </h2>
              </div>
              <div className="mt-7 grid grid-cols-3 justify-items-center gap-x-[26px] gap-y-8 md:mt-[68px] md:gap-y-[41px] lg:grid-cols-4">
                <Supporter src={optimism} alt="Optimism" />
                <Supporter src={binance} alt="Binance" />
                <Supporter src={arbitrum} alt="Arbitrum" />
                <Supporter src={solana} alt="Solana" comingSoon />
                <Supporter src={zkSync} alt="zkSync" comingSoon />
                <Supporter src={fantom} alt="Fantom" comingSoon />
                <Supporter src={polygon} alt="Polygon" comingSoon />
                <Supporter src={avalanche} alt="Avalanche" comingSoon />
              </div>
            </section>

            <section className="relative mx-auto max-w-[1400px] px-4 lg:px-5">
              <Ellipse className="absolute inset-0 -top-[132px] mx-auto max-w-[704px] md:top-[-176px]" />
              <RingsSphere className="absolute inset-x-0 top-[28px] md:top-[83px]" />

              <div className="relative pt-[98px] md:pt-[160px] lg:pt-[260px]">
                <div className="flex flex-col gap-x-11 gap-y-[18px] bg-black lg:grid lg:grid-cols-3 lg:bg-transparent">
                  <div className="col-span-1 lg:pb-[52px] lg:pt-[34px]">
                    <div className="text-center lg:max-w-[386px] lg:text-left">
                      <h2 className="bg-gradient-to-b from-white to-white/50 bg-clip-text text-[26px] font-medium leading-9 text-transparent lg:text-5xl lg:font-semibold lg:leading-[60px]">
                        Matic - Polygon
                      </h2>
                      <p className="mt-2 text-xs leading-5 lg:mt-4 lg:text-[15px] lg:leading-[22px]">
                        We find and copy-trade the most profitable wallets and
                        enter market earlier than anyone else.
                      </p>
                    </div>

                    {/* lg */}
                    <div className="relative mt-12 hidden lg:block">
                      <div className="absolute left-3.5 top-[15px]">
                        <HorizontalLine />
                      </div>

                      <div className="space-y-8">
                        <div className="relative flex gap-x-[9px]">
                          <Rings className="shrink-0" />
                          <div className="flex divide-x divide-white/10 text-[15px] leading-[22px]">
                            <span className="pr-2">3/11/2018</span>
                            <span className="pl-2">
                              Whale bought Matic for 0.05{" "}
                            </span>
                          </div>
                        </div>
                        <div className="relative flex gap-x-[9px]">
                          <Rings className="shrink-0" />
                          <div className="space-x-2.5 text-[15px] leading-[22px]">
                            After making 34x, the Whale started selling the
                            token.
                          </div>
                        </div>
                        <div className="relative flex gap-x-[9px]">
                          <Rings className="shrink-0" />
                          <div className="space-x-2.5 text-[15px] leading-[22px]">
                            2 months after, the Whale sold another 450M Matic
                            for 2.12 USD
                          </div>
                        </div>
                        <div className="relative flex gap-x-[9px]">
                          <Rings className="shrink-0" />
                          <div className="space-x-2.5 text-[15px] leading-[22px]">
                            After making 14x, the Whale started selling the
                            token.
                          </div>
                        </div>
                        <div className="relative flex gap-x-[9px]">
                          <Rings className="shrink-0" />
                          <div className="flex gap-x-2.5 space-x-2.5 divide-x divide-black/10 text-[15px] leading-[22px]">
                            <span>Total Profit</span>
                            <span>$236922.003</span>
                          </div>
                        </div>
                      </div>

                      <div className="absolute inset-0 animate-slide-down bg-gradient-to-b from-transparent to-black/80"></div>
                    </div>
                  </div>

                  <div className="relative col-span-2 mt-[18px] h-[400px] sm:h-[600px] lg:mt-0 lg:h-auto">
                    <ChartAnimation />
                  </div>

                  {/* base */}
                  <div className="relative mt-7 lg:hidden">
                    <div className="absolute left-3.5 top-[15px]">
                      <HorizontalLine />
                    </div>

                    <div className="space-y-8">
                      <div className="relative flex gap-x-[9px]">
                        <Rings className="shrink-0" />
                        <div className="flex divide-x divide-white/10 text-xs leading-5 lg:text-[15px] lg:leading-[22px]">
                          <span className="pr-2">3/11/2018</span>
                          <span className="pl-2">
                            Whale bought Matic for 0.05{" "}
                          </span>
                        </div>
                      </div>
                      <div className="relative flex gap-x-[9px]">
                        <Rings className="shrink-0" />
                        <div className="space-x-2.5 text-xs leading-5 lg:text-[15px] lg:leading-[22px]">
                          After making 34x, the Whale started selling the token.
                        </div>
                      </div>
                      <div className="relative flex gap-x-[9px]">
                        <Rings className="shrink-0" />
                        <div className="space-x-2.5 text-xs leading-5 lg:text-[15px] lg:leading-[22px]">
                          2 months after, the Whale sold another 450M Matic for
                          2.12 USD
                        </div>
                      </div>
                      <div className="relative flex gap-x-[9px]">
                        <Rings className="shrink-0" />
                        <div className="space-x-2.5 text-xs leading-5 lg:text-[15px] lg:leading-[22px]">
                          After making 14x, the Whale started selling the token.
                        </div>
                      </div>
                      <div className="relative flex gap-x-[9px]">
                        <Rings className="shrink-0" />
                        <div className="flex gap-x-2.5 space-x-2.5 divide-x divide-black/10 text-xs leading-5 lg:text-[15px] lg:leading-[22px]">
                          <span>Total Profit</span>
                          <span>$236922.003</span>
                        </div>
                      </div>
                    </div>

                    <div className="absolute inset-0 animate-slide-down bg-gradient-to-b from-transparent from-10% to-black/80 to-90%"></div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mx-auto mt-[58px] flex max-w-[1400px] flex-col-reverse gap-x-[73px] gap-y-7 px-5 lg:mt-[150px] lg:grid lg:h-[534px] lg:grid-cols-3">
              <div className="relative col-span-2 h-[420px] sm:h-[540px] md:h-[600px] lg:h-auto">
                <Image
                  className="object-contain"
                  src="/whale-collections.png"
                  alt="Whale collections"
                  fill
                  quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/75"></div>
              </div>
              <div className="col-span-1 text-center lg:pt-[76px] lg:text-left">
                <h2 className="bg-gradient-to-b from-white to-white/50 bg-clip-text text-[26px] font-medium leading-9 text-transparent lg:text-5xl lg:font-semibold lg:leading-[60px]">
                  Start Early. Create Your Vault & Earn 25% daily.
                </h2>
                <p className="mt-2 text-xs leading-5 lg:mt-4 lg:text-[15px] lg:leading-[22px]">
                  Start your position early and follow the biggest wallets
                </p>

                <Link
                  href="/"
                  className="mt-7 inline-flex h-11 items-center gap-x-[12.75px] rounded-full bg-[#5200FF] px-5 text-sm font-medium leading-[22px] text-white lg:mt-12 lg:h-12 lg:px-6 lg:text-[15px]"
                >
                  <span>Whitelist for Early Access</span>
                  <ArrowRight />
                </Link>
              </div>
            </section>

            <section className="mt-[58px] px-5 lg:mt-[150px]">
              <div className="mx-auto max-w-[729px] text-center">
                <h2 className="bg-gradient-to-b from-white to-white/50 bg-clip-text text-[26px] font-medium leading-9 text-transparent lg:text-5xl lg:font-semibold lg:leading-[60px]">
                  We follow only 0.01% of the best DEX traders
                </h2>
              </div>

              <div className="pointer-events-none mt-12 select-none">
                <div className="relative mx-auto max-w-[886px] rounded-[10px] px-6 py-3">
                  <div className="absolute inset-0 rounded-[10px] border border-white/10" />
                  <div className="absolute inset-0 rounded-[10px] bg-gradient-to-b from-[#0D0D0D] to-[#0D0D0D]/30" />

                  <div className="relative flex flex-col lg:flex-row">
                    <div className="flex items-start">
                      <div className="relative mt-3 inline-block rounded-[10px] border border-white/10 bg-white/10 pb-2.5 pl-5 pr-[13px] pt-2 text-right">
                        <span className="block text-xs leading-5 text-white">
                          10/06/2023
                        </span>
                        <span className="block text-xs leading-5 text-white">
                          03:59 PM
                        </span>
                        <span className="absolute inset-y-0 -right-[7.5px] my-auto inline-block h-3.5 w-3.5 rotate-45 rounded-tr-[2px] border-r border-t border-white/10 bg-[#272727]" />
                      </div>

                      <div className="ml-[17px]">
                        <svg
                          className="h-[322px] w-5"
                          viewBox="0 0 20 322"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="10" cy="42" r="9.5" stroke="#5200FF" />
                          <path
                            d="M10 52V322"
                            stroke="url(#paint0_linear_460_35067)"
                            strokeOpacity="0.5"
                          />
                          <path
                            d="M10 0L10 32"
                            stroke="url(#paint1_linear_460_35067)"
                            strokeOpacity="0.5"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_460_35067"
                              x1="10.5"
                              y1="52"
                              x2="10.5"
                              y2="322"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#5200FF" />
                              <stop
                                offset="0.742422"
                                stopColor="#6D27FF"
                                stopOpacity="0.6"
                              />
                              <stop offset="0.974901" stopColor="#020202" />
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear_460_35067"
                              x1="10.5"
                              y1="-2.18557e-08"
                              x2="10.5"
                              y2="32"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#0D0D0D" />
                              <stop offset="1" stopColor="#5200FF" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>

                      <div className="ml-[22px] w-full pt-[34px] lg:max-w-[341px]">
                        <div className="flex items-center justify-between">
                          <div className="relative h-9 w-9 overflow-hidden rounded-full">
                            <Image
                              className="object-contain"
                              src="/ape.png"
                              alt="Ape"
                              fill
                              quality={100}
                            />
                          </div>

                          <div className="rounded-full border border-white/10 bg-[#CE26264D] px-3.5 py-[5px] text-sm leading-[22px]">
                            Selling
                          </div>
                        </div>
                        <h3 className="mt-3.5 text-xl font-medium leading-8 text-white">
                          Whales are selling $APE after the recent pump
                        </h3>

                        <div className="mt-3 flex items-center gap-x-2">
                          <span className="inline-block w-[11px] shrink-0 border border-white/20"></span>
                          <span className="text-sm leading-[22px] text-white/70">
                            Wallet 0x5a8 moved 11,910 $APE to Houbi
                          </span>
                        </div>

                        <div className="mt-2 flex items-center gap-x-2">
                          <span className="inline-block w-[11px] shrink-0 border border-white/20"></span>
                          <span className="text-sm leading-[22px] text-white/70">
                            Whale 0x5a8 cleared 38K $APE to CEXs
                          </span>
                        </div>

                        <Link
                          href="/"
                          className="gap-x-0.4 mt-[30px] inline-flex items-center rounded-full border border-white/10 bg-white/10 py-2 pl-[18px] pr-2 text-sm font-medium leading-[22px] text-white"
                        >
                          Read more
                          <ChevronRight />
                        </Link>
                      </div>
                    </div>
                    <div className="flex-auto pt-[43px] lg:ml-[43px]">
                      <div className="rounded-md border border-white/10 bg-white/5 p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold leading-5">
                            Highlight
                          </span>
                          <span className="text-xs font-medium leading-[14.52px] text-[#00A478]">
                            Over the past 4 hours
                          </span>
                        </div>
                        <div className="mt-1 flex items-center gap-x-5">
                          <span className="text-base font-medium leading-6 text-[#5200FF]">
                            MOVED OUT
                          </span>
                          <span className="text-base font-medium leading-6">
                            $3.27M in $APE
                          </span>
                        </div>

                        <span className="mt-1 block text-xs leading-5">
                          Total token trasferred
                        </span>

                        <div className="mt-2 inline-flex items-center gap-x-[7px] rounded-full border border-white/20 bg-[#1B1B1B] py-1 pl-[5px] pr-[17px]">
                          <div className="relative h-5 w-5 overflow-hidden rounded-full">
                            <Image
                              className="object-cover"
                              src="/ape.png"
                              alt="Ape"
                              fill
                            />
                          </div>
                          <span className="text-xs font-semibold">
                            49.91K{" "}
                            <span className="font-medium text-white/70">
                              APE
                            </span>
                          </span>
                        </div>

                        <div className="mt-3 border border-white/10" />

                        <div className="mt-3">
                          <span className="block text-xs leading-5">
                            Related transactions
                          </span>

                          <div className="mt-2 space-y-2">
                            <div className="flex items-center">
                              <div className="inline-flex flex-auto items-center gap-x-[7px] rounded-full border border-white/20 bg-[#1B1B1B] py-1 pl-[5px] pr-[17px]">
                                <div className="relative h-5 w-5 overflow-hidden rounded-full">
                                  <Image
                                    className="object-cover"
                                    src="/ape.png"
                                    alt="Ape"
                                    fill
                                  />
                                </div>
                                <span className="text-xs leading-[14.52px] text-white/70">
                                  0X5a801
                                </span>
                              </div>
                              <CaretDown className="shrink-0" />
                              <div className="inline-flex flex-auto items-center gap-x-[7px] rounded-full border border-white/20 bg-[#1B1B1B] py-1 pl-[5px] pr-[17px]">
                                <div className="relative h-5 w-5 overflow-hidden rounded-full">
                                  <Image
                                    className="object-cover"
                                    src="/ape.png"
                                    alt="Ape"
                                    fill
                                  />
                                </div>
                                <span className="text-xs leading-[14.52px] text-white/70">
                                  0X5a801
                                </span>
                              </div>
                            </div>

                            <div className="flex items-center">
                              <div className="inline-flex flex-auto items-center gap-x-[7px] rounded-full border border-white/20 bg-[#1B1B1B] py-1 pl-[5px] pr-[17px]">
                                <div className="relative h-5 w-5 overflow-hidden rounded-full">
                                  <Image
                                    className="object-cover"
                                    src="/ape.png"
                                    alt="Ape"
                                    fill
                                  />
                                </div>
                                <span className="text-xs leading-[14.52px] text-white/70">
                                  0X5a801
                                </span>
                              </div>
                              <CaretDown className="shrink-0" />
                              <div className="inline-flex flex-auto items-center gap-x-[7px] rounded-full border border-white/20 bg-[#1B1B1B] py-1 pl-[5px] pr-[17px]">
                                <div className="relative h-5 w-5 overflow-hidden rounded-full">
                                  <Image
                                    className="object-cover"
                                    src="/ape.png"
                                    alt="Ape"
                                    fill
                                  />
                                </div>
                                <span className="text-xs leading-[14.52px] text-white/70">
                                  Multiple CEXs
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mx-auto mt-[68px] max-w-[1400px] px-5 lg:mt-[150px]">
              <div className="space-y-4 text-center">
                <h2 className="bg-gradient-to-b from-white to-white/50 bg-clip-text text-[26px] font-medium leading-9 text-transparent lg:text-5xl lg:font-semibold lg:leading-[60px]">
                  How to Start Copy Trading?
                </h2>
                <p className="mt-2 text-xs leading-5 lg:mt-4 lg:text-[15px] lg:leading-[22px]">
                  It’s never been easier to trade like a real professional
                  trader - get started in just a few steps.
                </p>
              </div>

              <div className="pointer-events-none mt-[18px] flex select-none flex-wrap justify-center gap-4 lg:mt-12">
                <div className="relative rounded-[10px] bg-gradient-to-b from-white/10 to-white/5 px-[30px] pb-[33px] pt-6">
                  <div className="absolute inset-0 rounded-[10px] border border-white/10" />
                  <div className="absolute inset-0 rounded-[10px] bg-gradient-to-b from-transparent to-black/95" />
                  <div className="relative">
                    <span className="text-left text-sm leading-[22px] lg:text-lg lg:leading-[30px]">
                      1. Connect your wallet
                    </span>
                    <div className="relative mt-[55px] rounded-[10px] bg-gradient-to-b from-white/5 to-white/0 px-[39px] py-5">
                      <div className="absolute inset-0 rounded-[10px] border border-white/10" />
                      <div className="absolute inset-0 rounded-[10px] bg-gradient-to-b from-transparent to-black/80 to-100%" />
                      <div>
                        <span className="font-medium leading-6 lg:text-xl">
                          Connect wallet to trading
                        </span>
                        <div className="mt-5 space-y-2">
                          <button className="flex w-full items-center gap-x-2 rounded-full border border-white/10 bg-white/10 py-1 pl-1 pr-6 focus-visible:outline-none">
                            <Cat />
                            <span className="text-xs font-medium leading-5 lg:text-sm lg:leading-[22px]">
                              MetaMask
                            </span>
                          </button>
                          <button className="flex w-full items-center gap-x-2 rounded-full border border-white/10 bg-white/10 py-1 pl-1 pr-6 focus-visible:outline-none">
                            <Coinbase />
                            <span className="text-xs font-medium leading-5 lg:text-sm lg:leading-[22px]">
                              Coibase
                            </span>
                          </button>
                          <button className="flex w-full items-center gap-x-2 rounded-full border border-white/10 bg-white/10 py-1 pl-1 pr-6 focus-visible:outline-none">
                            <TrustWallet />
                            <span className="text-xs font-medium leading-5 lg:text-sm lg:leading-[22px]">
                              Trust Wallet
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative rounded-[10px] bg-gradient-to-b from-white/10 to-white/5 px-[30px] pb-[33px] pt-6">
                  <div className="absolute inset-0 rounded-[10px] border border-white/10" />
                  <div className="absolute inset-0 rounded-[10px] bg-gradient-to-b from-transparent to-black/95" />
                  <div className="relative">
                    <span className="text-left text-sm leading-[22px] lg:text-lg lg:leading-[30px]">
                      2. Choose a vault you want to follow and trade
                    </span>
                    <div className="relative mt-6 rounded-[10px] bg-gradient-to-b from-white/5 to-white/0 py-3">
                      <div className="absolute inset-0 rounded-[10px] border border-white/10" />
                      <div className="absolute inset-0 rounded-[10px] bg-gradient-to-b from-transparent to-black/80" />
                      <div>
                        <div className="flex items-center justify-between px-5 pb-2.5">
                          <div className="inline-flex items-center gap-x-[15px]">
                            <div className="relative h-[37px] w-[37px]">
                              <Image
                                src="/usdt.png"
                                alt="USDT"
                                fill
                                quality={100}
                              />
                            </div>
                            <div className="space-y-[5px]">
                              <span className="font-medium leading-6 lg:text-xl">
                                Pantera Capital
                              </span>
                              <div className="flex gap-x-[5px]">
                                <span className="inline-block flex-none rounded-full bg-[#5200FF] px-[5px] py-0.5 text-[8px] font-medium leading-[10px]">
                                  Pre-buy
                                </span>
                                <span className="inline-block flex-none rounded-full bg-[#00A478] px-[5px] py-0.5 text-[8px] font-medium leading-[10px]">
                                  Redistribution
                                </span>
                              </div>
                            </div>
                          </div>
                          <Share className="flex-none text-white/50" />
                        </div>

                        <div className="flex justify-between border-t border-white/10 px-5 pt-2.5">
                          <div className="space-y-[5px]">
                            <span className="block text-[10px] font-medium leading-[12px] text-white/50">
                              Last Trade
                            </span>
                            <span className="block text-xs font-medium leading-5 lg:text-sm lg:leading-[22px]">
                              2 days ago
                            </span>
                          </div>

                          <div className="space-y-[5px]">
                            <span className="block text-[10px] font-medium leading-[12px] text-white/50">
                              Whales
                            </span>
                            <span className="block text-xs font-medium leading-5 lg:text-sm lg:leading-[22px]">
                              5
                            </span>
                          </div>
                          <div className="space-y-[5px]">
                            <span className="block text-[10px] font-medium leading-[12px] text-white/50">
                              Whales
                            </span>
                            <span className="isolate flex items-center -space-x-1">
                              <Bitcoin className="relative z-[4] flex-none" />
                              <USDT className="relative z-[3] flex-none" />
                              <Astro className="relative z-[2] flex-none" />
                              <span className="relative z-[1] inline-flex h-[18px] w-[18px] flex-none items-center justify-center rounded-full bg-white/10 p-0">
                                <Plus className="text-white" />
                              </span>
                            </span>
                          </div>
                        </div>

                        <div className="mt-[12.5px] flex justify-between px-5">
                          <div className="space-y-[5px]">
                            <span className="block text-[10px] font-medium leading-[12px] text-white/50">
                              Funds
                            </span>
                            <span className="block text-xs font-medium leading-5 lg:text-sm lg:leading-[22px]">
                              Pantera Capital
                            </span>
                          </div>
                          <div className="space-y-[5px] text-right">
                            <span className="block text-[10px] font-medium leading-[12px] text-white/50">
                              Focus
                            </span>
                            <span className="block text-xs font-medium leading-5 lg:text-sm lg:leading-[22px]">
                              Small Liquidity
                            </span>
                          </div>
                        </div>

                        <div className="mt-[27px] grid gap-2.5 px-5 lg:grid-cols-2">
                          <button className="inline-flex items-center justify-center gap-x-2.5 rounded-full bg-white/20 px-5 py-2 text-xs font-bold leading-5 lg:text-sm lg:leading-[22px]">
                            <MoneyWithDraw /> Withdraw
                          </button>
                          <button className="inline-flex items-center justify-center gap-x-2.5 rounded-full bg-[#5200FF] px-5 py-2 text-xs font-bold leading-5 lg:text-sm lg:leading-[22px]">
                            <MoneyDeposit /> Deposit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative rounded-[10px] bg-gradient-to-b from-white/10 to-white/5 px-[30px] pb-[33px] pt-6">
                  <div className="absolute inset-0 rounded-[10px] border border-white/10" />
                  <div className="absolute inset-0 rounded-[10px] bg-gradient-to-b from-transparent to-black/95" />
                  <div>
                    <span className="text-left text-sm leading-[22px] lg:text-lg lg:leading-[30px]">
                      3. Track your gains and cash out at any time!
                    </span>
                    <div className="relative mt-6 rounded-[10px] bg-gradient-to-b from-white/5 to-white/0 p-5">
                      <div className="absolute inset-0 rounded-[10px] border border-white/10" />
                      <div className="absolute inset-0 rounded-[10px] bg-gradient-to-b from-transparent to-black/80" />
                      <div>
                        <div className="flex items-center gap-x-[15px]">
                          <MoneyWithDraw />
                          <span className="font-semibold leading-6 lg:text-xl">
                            Withdraw
                          </span>
                        </div>
                        <div className="mt-[5px]">
                          <span className="text-xs leading-5 text-white/50 lg:text-sm lg:leading-[26px]">
                            Some text description
                          </span>
                        </div>

                        <div className="mt-[20px]">
                          <div className="flex justify-between">
                            <span className="text-xs font-medium leading-5 text-white/50">
                              Amount
                            </span>
                            <span className="text-xs font-medium leading-5 text-white/50">
                              Balance:{" "}
                              <span className="text-white">1000 USDT</span>
                            </span>
                          </div>
                          <div className="mt-[5px] grid grid-cols-2 justify-items-stretch divide-x divide-white/20 rounded-[5px] bg-[#1B1B1B] px-5 py-[10px]">
                            <div className="pr-5">
                              <span className="text-xs leading-5 lg:text-sm lg:leading-[22px]">
                                1000
                              </span>
                            </div>
                            <div className="flex items-center justify-center pl-5">
                              <button className="inline-flex items-center gap-x-2 lg:gap-x-2.5">
                                <USDT />
                                <span className="text-xs leading-5 lg:text-sm lg:leading-[22px]">
                                  USDT
                                </span>
                                <CaretDown />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="my-5">
                          <Link
                            className="inline-flex items-center gap-x-2.5 text-sm leading-[22px] text-[#5C6DFF] lg:text-base lg:leading-6"
                            href="/"
                          >
                            Advance Settings{" "}
                            <ArrowRight2 className="text-[#5200FF]" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mx-auto mt-[58px] max-w-[1400px] px-5 lg:mt-[180px]">
              <h2 className="bg-gradient-to-b from-white to-white/50 bg-clip-text text-center text-[26px] font-medium leading-9 text-transparent lg:text-5xl lg:font-semibold lg:leading-[60px]">
                Our Partners
              </h2>

              <div className="mt-[18px] grid grid-cols-2 gap-[23px] lg:mt-[61px] lg:grid-cols-4">
                <Partner>
                  <div className="h-7 lg:h-10">
                    <Image
                      className="h-full w-auto object-contain"
                      src={lookOnChain}
                      alt="Look on Chain"
                      quality={100}
                    />
                  </div>
                </Partner>
                <Partner>
                  <div className="h-[60px] lg:h-[100px]">
                    <Image
                      className="h-full w-auto object-contain"
                      src={spotOnChain}
                      alt="Spot on Chain"
                      quality={100}
                    />
                  </div>
                </Partner>
                <Partner>
                  <div className="h-7 lg:h-10">
                    <Image
                      className="h-full w-auto object-contain"
                      src={chainEdge}
                      alt="Chain Edge"
                      quality={100}
                    />
                  </div>
                </Partner>
                <Partner>
                  <div className="h-7 lg:h-10">
                    <Image
                      className="h-full w-auto object-contain"
                      src={dexGuru}
                      alt="Dex Guru"
                      quality={100}
                    />
                  </div>
                </Partner>
              </div>
            </section>

            <section className="relative mx-auto mt-[78px] max-w-[1400px] lg:mt-[180px] lg:px-0">
              <div className="px-5">
                <h2 className="relative z-10 mx-auto max-w-[730px] bg-gradient-to-b from-white to-white/50 bg-clip-text text-center text-[26px] font-medium leading-9 text-transparent lg:text-5xl lg:font-semibold lg:leading-[60px]">
                  What smartwhales users are saying
                </h2>

                <TweetsEllipses className="absolute inset-x-0 mx-auto -mt-32 max-w-[400px] lg:max-w-[528px]" />
              </div>

              <div className="relative mt-[62px]">
                <SwiperLg />
                <SwiperBase />
              </div>
            </section>

            <section className="relative mx-auto mt-[24px] max-w-[1400px] px-5 text-center lg:mt-[172px]">
              <h2 className="bg-gradient-to-b from-white to-white/50 bg-clip-text text-center text-[26px] font-medium leading-9 text-transparent lg:text-5xl lg:font-semibold lg:leading-[60px]">
                We are SmartWhales.{" "}
                <span className="block">
                  We are the{" "}
                  <span className="bg-gradient-to-b from-[#5200FF] from-50% to-[#5200FF]/50 to-100% bg-clip-text text-transparent">
                    Robin Hood
                  </span>{" "}
                  of Crypto.
                </span>
              </h2>

              <Link
                href="https://forms.gle/fuYGBJQF5W4amLdt6"
                className="mt-7 inline-flex h-11 items-center gap-x-[12.75px] rounded-full bg-[#5200FF] px-6 text-sm font-medium leading-[22px] text-white lg:mt-9 lg:h-12 lg:px-12 lg:text-[15px]"
              >
                <span>Whitelist</span>
                <ArrowRight />
              </Link>

              <div className="relative mt-8 h-[139px] sm:h-[208.5px] lg:mt-14 lg:h-[278px]">
                <WhaleBannerAnimation />
              </div>
            </section>

            <footer className="mt-[60px] border-t border-white/20 px-5 lg:mt-20">
              {/* <div className="mx-auto grid max-w-[1400px] gap-y-7 px-5 pt-3 sm:grid-cols-2 lg:grid-cols-4 lg:pt-20">
                <div>
                  <LogoLg />
                </div>
                <div className="flex flex-col gap-y-4">
                  <Link className="text-sm leading-[22px]" href="/overview">
                    Overview
                  </Link>
                  <Link
                    className="text-sm leading-[22px] text-white/70"
                    href="/features"
                  >
                    Features
                  </Link>
                  <Link
                    className="text-sm leading-[22px] text-white/70"
                    href="/discover"
                  >
                    Discover
                  </Link>
                  <Link
                    className="text-sm leading-[22px] text-white/70"
                    href="/grow"
                  >
                    Grow
                  </Link>
                  <Link
                    className="text-sm leading-[22px] text-white/70"
                    href="/overview"
                  >
                    Build
                  </Link>
                  <Link
                    className="text-sm leading-[22px] text-white/70"
                    href="/overview"
                  >
                    Learn
                  </Link>
                </div>
                <div className="flex flex-col gap-y-4">
                  <Link className="text-sm leading-[22px]" href="/overview">
                    Company
                  </Link>
                  <Link
                    className="text-sm leading-[22px] text-white/70"
                    href="/features"
                  >
                    About us
                  </Link>
                  <Link
                    className="text-sm leading-[22px] text-white/70"
                    href="/discover"
                  >
                    Careers
                  </Link>
                  <Link
                    className="text-sm leading-[22px] text-white/70"
                    href="/grow"
                  >
                    Contact us
                  </Link>
                  <Link
                    className="text-sm leading-[22px] text-white/70"
                    href="/overview"
                  >
                    Company News
                  </Link>
                </div>
                <div className="flex flex-col gap-y-4">
                  <Link className="text-sm leading-[22px]" href="/overview">
                    Support
                  </Link>
                  <Link
                    className="text-sm leading-[22px] text-white/70"
                    href="/features"
                  >
                    Support center
                  </Link>
                  <Link
                    className="text-sm leading-[22px] text-white/70"
                    href="/discover"
                  >
                    Channel Verification
                  </Link>
                  <Link
                    className="text-sm leading-[22px] text-white/70"
                    href="/grow"
                  >
                    Announcements
                  </Link>
                  <Link
                    className="text-sm leading-[22px] text-white/70"
                    href="/overview"
                  >
                    Connect with Smartwhale
                  </Link>
                </div>
              </div> */}

              <div className="mt-[18px] flex items-center justify-center border-t border-white/10 py-[18px] lg:mt-[78px] lg:justify-between lg:py-[24.5px]">
                <span className="lg hidden text-xs leading-[22px] text-white/40 lg:inline-block">
                  @2023 smartwhales.ai All right reserved.
                </span>
                <div className="inline-flex gap-x-4 text-[#8A8F98]">
                  {socialLinks.map(({ icon: Icon, link }, key) => (
                    <Link key={key} href={link} target="_blank">
                      <Icon />
                    </Link>
                  ))}
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
