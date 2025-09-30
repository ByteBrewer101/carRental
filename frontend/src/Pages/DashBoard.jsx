import { DashboardRenderer } from "@/components/DashboardRenderer";
import { NavBar } from "@/components/NavBar";
import { AuthWrapper } from "@/wrappers/AuthWrappers";

export function DashBoard(){
    return (
      <AuthWrapper>

      <div className="bg-black min-h-screen">
        <div className="flex flex-col w-full justify-center items-center">
          <NavBar />
          <DashboardRenderer/>
        </div>
      </div>
      </AuthWrapper>
    );
}