import { MyCard } from "@/components/MyCard";
import { NavBar } from "@/components/NavBar";

export function DashBoard(){
    return (
      <div className="bg-black min-h-screen">
        <div className="flex flex-col w-full justify-center items-center">
          <NavBar />
          <div className="dark w-[80%] grid lg:grid-cols-4 md:grid-cols-3 gap-4">
            <MyCard />
            <MyCard />
            <MyCard />
            <MyCard />
            <MyCard />
            <MyCard />
            <MyCard />
            <MyCard />
            <MyCard />
          </div>
        </div>
      </div>
    );
}