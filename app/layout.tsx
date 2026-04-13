import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BundledCare | Complete Home Care. One Subscription.",
  description:
    "Companion care, medical necessity documentation, advance care planning, and HSA/FSA-eligible wellness — bundled for health systems and families.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Script src="https://solvinghealth.com/chat-widget.js" data-channel="bundledcare" data-color="#0D7377" strategy="lazyOnload" />
        <Script src="https://solvinghealth.com/voice-embed.js" data-site="bundledcare" strategy="lazyOnload" />
        <Script src="https://solvinghealth.com/footer.js" data-brand="co-op.care" data-theme="light" strategy="lazyOnload" />
      </body>
    </html>
  );
}
