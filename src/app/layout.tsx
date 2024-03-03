import { Inter } from "next/font/google";
import "swiper/css";
import "swiper/css/navigation";

import { CookiesConsent } from "@/components/cookies-consent";
import GoogleAnalytics from "@/components/google-analytics";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "SmartWhales",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={inter.variable} lang="en">
      <body className="bg-black text-white">
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
        {children}
        <CookiesConsent />
      </body>
    </html>
  );
}
