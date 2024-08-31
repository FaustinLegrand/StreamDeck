import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./../styles/globals.css";

const inter = Barlow({ weight: "400", subsets: ["latin"]});

export const metadata: Metadata = {
  title: "StreamDeckosss",
  description: "Next app to control streamdeck",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
