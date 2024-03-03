"use client";

import * as React from "react";
import Link from "next/link";

import { Cookies } from "./icons";

export const CookiesConsent = () => {
  const [show, setShow] = React.useState(false);
  const mounted = React.useRef(false);

  React.useEffect(() => {
    mounted.current = true;

    return () => {
      mounted.current === false;
    };
  }, []);

  React.useEffect(() => {
    if (!mounted.current) return;

    try {
      const cookiesConcent = localStorage.getItem("cookies-concent");
      const hasConcent =
        cookiesConcent !== null ? JSON.parse(cookiesConcent) : null;
      if (hasConcent === true || hasConcent === false) {
        setShow(false);
      } else {
        setShow(true);
      }
    } catch {}
  }, []);

  const declineCookies = () => {
    try {
      localStorage.setItem("cookies-concent", "false");
      setShow(false);
    } catch {}
  };

  const acceptCookies = () => {
    try {
      localStorage.setItem("cookies-concent", "true");
      setShow(false);
    } catch {}
  };

  return (
    <>
      {show && (
        <div className="fixed inset-x-0 bottom-2 z-50 px-4">
          <div className="relative mx-auto flex max-w-[753px] flex-col items-center gap-x-4 rounded-[20px] bg-gradient-to-b from-[#0e0e0e] to-[#020202] p-[14px] pl-[18px] lg:flex-row lg:rounded-full lg:p-4">
            <div className="absolute inset-0 rounded-[20px] border border-white/5 lg:rounded-full" />
            <div className="absolute inset-0 rounded-[20px] from-transparent to-black lg:rounded-full" />
            <div className="relative flex items-center justify-center gap-x-3 lg:gap-x-4">
              <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-black">
                <Cookies className="flex-none" />
              </div>

              <span className="text-base font-medium leading-6">
                we use{" "}
                <Link href="/" className="text-[#5200FF] underline">
                  cookies
                </Link>{" "}
                to personalize your site experience and analyze site traffic
              </span>
            </div>

            <div className="relative mt-[22px] inline-flex items-center gap-x-2 lg:mt-0">
              <button
                onClick={acceptCookies}
                className="cursor-pointer rounded-full bg-[#5200FF] px-6 py-2 text-[15px] text-xs leading-5 text-white focus-visible:outline-none lg:leading-[22px]"
              >
                Accept
              </button>
              <button
                onClick={declineCookies}
                className="cursor-pointer rounded-full bg-white/20 px-6 py-2 text-[15px] text-xs leading-5 text-white focus-visible:outline-none lg:leading-[22px]"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
