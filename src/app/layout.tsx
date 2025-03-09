import "@/app/globals.css";
import { type Viewport, type Metadata } from "next";
import { env } from "@/env";

/** Fonts
 *    Google or Local Fonts load
 *      https://nextjs.org/docs/app/building-your-application/optimizing/fonts
 *
 *    FONT SOURCES:
 *      https://www.fontshare.com/
 *      https://fonts.google.com/
 **/
import { GeistSans } from "geist/font/sans";

/** Providers */
import { Providers } from "./providers";

/** Metadata */
export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: env.NEXT_PUBLIC_APP_NAME,
  description: env.NEXT_PUBLIC_APP_DESCRIPTION,
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: env.NEXT_PUBLIC_APP_NAME,
    title: env.NEXT_PUBLIC_APP_NAME,
    description: env.NEXT_PUBLIC_APP_DESCRIPTION,
    url: env.NEXT_PUBLIC_APP_URL,
    images: {
      url: `${env.NEXT_PUBLIC_APP_URL}/og-image`,
      width: 1200,
      height: 630,
      alt: env.NEXT_PUBLIC_APP_NAME,
    },
  },
  manifest: `${env.NEXT_PUBLIC_APP_URL}/manifest`,
  robots: {
    index: true,
    follow: true,
  },
};

/** Viewport */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
