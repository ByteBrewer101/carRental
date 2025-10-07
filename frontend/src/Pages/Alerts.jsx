import { ItemCard } from "@/components/ItemCard";
import { MyCard } from "@/components/MyCard";
import { MyTabs } from "@/components/MyTabs";
import { Global_Context } from "@/ContextAPI/GlobalContext";
import { sampleData } from "@/utils/alertPageSample";
import { useContext, useEffect, useState } from "react";

export function Alerts() {
  
  const [currData, setCurrData] = useState([])

  const {tabState} = useContext(Global_Context)
  useEffect(()=>{
    function CardFilter(selectedTab) {
      const sampleDatas = sampleData;
      // eslint-disable-next-line no-unused-vars
      const myData = sampleDatas.filter((i, k) => {
        return i.status == selectedTab;
      });
      setCurrData(myData);
    } 
    CardFilter(tabState)
  },[tabState])
  return (
    <div className="dark flex-col text-white flex justify-center items-center p-10">
      <div className="w-[70%] flex flex-col">
        This is alert Page
        <div className="p-3 flex justify-between items-center rounded-lg">
          <MyTabs />
        </div>
        <div className="flex flex-col w-full space-y-4 mt-4">
          {currData.map((data, index) => (
            <ItemCard
              key={index}
              car_id={data.car_id}
              user_id={data.user_id}
              seller_id={data.seller_id}
              date_range={data.date_range}
              total_amount={data.total_amount}
              otp={data.otp}
              status={data.status}
            />
          ))}

          <h1>{tabState}</h1>
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
