"use client"; // Mark as client component

import { usePathname } from "next/navigation";
import Header from "./header";
import Footer from "./footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Define paths where Header & Footer should be hidden
  const hiddenRoutes = ["/login", "/signup", "/dashboard", "/404"];

  return (
    <>
      {!hiddenRoutes.includes(pathname) && <Header />}
      <main>{children}</main>
      {!hiddenRoutes.includes(pathname) && <Footer />}
    </>
  );
}
