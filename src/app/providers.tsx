"use client";

import * as React from "react";
import { useEffect } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactLenis } from "@studio-freight/react-lenis";
import { type FC, useRef } from "react";

/** PostHog */
import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import PostHogPageView from "@/app/posthog-page-view";

function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

type LenisScrollProviderProps = {
  children: React.ReactNode;
};

const LenisScrollProvider: FC<LenisScrollProviderProps> = ({ children }) => {
  const lenisRef = useRef(null);
  return (
    <ReactLenis
      ref={lenisRef}
      root
      options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}
    >
      {children}
    </ReactLenis>
  );
};

function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        capture_pageview: false,
        capture_pageleave: true,
      });
    }
  }, []);

  return (
    <PHProvider client={posthog}>
      <PostHogPageView />
      {children}
    </PHProvider>
  );
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LenisScrollProvider>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <PostHogProvider>{children}</PostHogProvider>
      </ThemeProvider>
    </LenisScrollProvider>
  );
}
