import "~/styles/globals.css";

import { Inter } from "next/font/google";
import Script from "next/script";
import { NextUiProvider } from "./_components/ui/NextUiProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "fw.soles",
  description: "fw.soles",
  icons: [{ rel: "icon", url: "/profile.webp" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="scroll-smooth bg-gradient-to-b from-[#b3884b] to-[#997034] px-4 dark"
    >
      <body className={`font-sans ${inter.variable}`}>
        <NextUiProvider>
          <Script async src="https://www.tiktok.com/embed.js" />
          {children}
        </NextUiProvider>
      </body>
    </html>
  );
}
