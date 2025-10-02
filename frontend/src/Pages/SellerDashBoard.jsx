import { DashboardRenderer } from "@/components/DashboardRenderer";
import { MyCard } from "@/components/MyCard";
import { NavBar } from "@/components/NavBar";
import { SellerCard } from "@/components/SellerCard";
import { FloatingDockDemo } from "@/components/SellerDock";
import { Card } from "@/components/ui/card";

export function SellerDashBoard() {
  return (
    <>
      <div className="bg-black min-h-screen">
        <NavBar />
        <div className="flex flex-col w-full justify-center items-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-28">
          <div className="dark w-full max-w-[70%]  grid grid-cols-1  lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 pt-10  ">
            <SellerCard />
            <SellerCard />
            <SellerCard />
          </div>
        </div>
        <FloatingDockDemo />
      </div>
    </>
  );
}
