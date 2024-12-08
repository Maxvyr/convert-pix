import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import NextUiProvider from "@/providers/NextUiProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ConvertPix - Free Online File Converter for Images, Audio & Videos",
  description: `ConvertPix is your go-to free online multimedia converter. Easily convert images (PNG, JPG, WebP), audio (MP3, WAV), and videos without limits or subscriptions. Fast, secure, and perfect for creators. Start converting your files today!`,
  creator: "akshaynstack",
  keywords:
    "free file converter, online file converter, image to webp, png to webp, jpg to png, video to mp3 converter, free video converter, unlimited media conversion, multimedia converter, fast file converter, secure online converter",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        <NextUiProvider>
          <Toaster />
          <div className="pt-10 min-h-screen lg:pt-10 2xl:pt-10 container max-w-4xl lg:max-w-6xl 2xl:max-w-7xl">
            {children}
          </div>
        </NextUiProvider>
      </body>
    </html>
  );
}
