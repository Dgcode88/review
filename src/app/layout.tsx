import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReviewCatLitter.com - Data-Driven Cat Litter Reviews",
  description: "Independent, data-driven cat litter reviews for discerning cat parents. 500+ products tested with scientific methodology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
