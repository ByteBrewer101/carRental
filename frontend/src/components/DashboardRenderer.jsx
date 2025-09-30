import { MyCard } from "./MyCard";

export function DashboardRenderer(){
    return (
      
        <div className="dark w-[70%]  mt-[10%] grid lg:grid-cols-4 md:grid-cols-3 gap-4">
          <MyCard />
          <MyCard />
          <MyCard />
          <MyCard />
          <MyCard />
          <MyCard />
          <MyCard />
          <MyCard />
          <MyCard />
          <MyCard/>
        </div>
    );
}