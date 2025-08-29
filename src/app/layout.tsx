import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Audiophile",
  description: "Es un ecommerce que vende auriculares",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!), // esto seria el https://example...(la base de la url)
  openGraph: {
    images: "/assets/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>{children}</body>
    </html>
  );
}
