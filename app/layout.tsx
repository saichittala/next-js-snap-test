import type { Metadata } from "next";
import Head from "next/head"; // Ensure correct metadata handling
import LayoutWrapper from "./components/LayoutWrapper";
import "./globals.css";

export const metadata: Metadata = {
  title: "SnapIMG - Free Online Image Compression & Conversion",
  description: "Compress images and convert JPG, PNG, WebP files easily. No downloads, no quality loss!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>{String(metadata.title) ?? "Default Title"}</title>
        <meta name="description" content={metadata.description ?? "Default description"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className="global-container">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
