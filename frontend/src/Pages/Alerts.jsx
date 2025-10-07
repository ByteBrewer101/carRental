import { ItemCard } from "@/components/ItemCard";
import { MyCard } from "@/components/MyCard";
import { MyTabs } from "@/components/MyTabs";

export function Alerts(){
    return (
      <div className="dark flex-col text-white flex justify-center items-center p-10">
        <div className="w-[70%] flex flex-col">
          This is alert Page
          <div className="p-3 flex justify-between items-center rounded-lg">
            <MyTabs />
          </div>
          <div className="flex flex-col w-full space-y-4 mt-4">
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </div>
          <div className="gap-4 mt-4 grid grid-cols-4">
            <MyCard />
            <MyCard />
            <MyCard />
            <MyCard />
          </div>
        </div>
      </div>
    );
}