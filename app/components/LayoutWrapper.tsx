"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";


export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [currentPath, setCurrentPath] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  const hiddenRoutes = ["/login", "/signup", "/dashboard", "/404"];

  return (
    <>
      {currentPath && !hiddenRoutes.includes(currentPath) && <Header />}
      <main>{children}</main>
      {currentPath && !hiddenRoutes.includes(currentPath) && <Footer />}
    </>
  );
}
