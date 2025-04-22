"use client";
import { BackgroundColorProvider, useBackgroundColor } from "@/context/BackgroundColorContext";
import { ReactNode } from "react";

function ClientLayoutInner({ children }: { children: ReactNode }) {
  const { currentColor } = useBackgroundColor();

  return (
    <div
      style={{
        backgroundColor: currentColor,
        transition: "background-color 0.8s ease-in-out",
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
  );
}

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <BackgroundColorProvider>
      <ClientLayoutInner>{children}</ClientLayoutInner>
    </BackgroundColorProvider>
  );
}
