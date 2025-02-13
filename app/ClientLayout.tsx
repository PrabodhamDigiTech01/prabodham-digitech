"use client";

import { Toaster } from "@/components/ui/toaster";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Footer = dynamic(() => import("./_components/Footer"), {
  loading: () => <div className="h-[300px]">Loading...</div>, // Prevent layout shift
});

const Navbar = dynamic(() => import("./_components/Navbar"), {
  loading: () => <div>Loading...</div>,
});

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
      </Suspense>
      {children}
      <Toaster />
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </>
  );
}
