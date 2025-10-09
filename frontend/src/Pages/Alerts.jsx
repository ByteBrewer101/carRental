import { AlertsCountCard } from "@/components/AlertsCountCard";
import { ItemCard } from "@/components/ItemCard";
import { MyTabs } from "@/components/MyTabs";
import { FloatingDockDemo } from "@/components/SellerDock";
import { Global_Context } from "@/ContextAPI/GlobalContext";
import { sampleData } from "@/utils/alertPageSample";
import { useContext, useEffect, useState } from "react";

export function Alerts() {
  
  const [currData, setCurrData] = useState([])


  const {tabState} = useContext(Global_Context)
  const {status, setStatus} = useContext(Global_Context)
  const sampleDatas = sampleData;
  useEffect(()=>{
    function CardFilter(selectedTab) {
     
      // eslint-disable-next-line no-unused-vars
      const myData = sampleDatas.filter((i, k) => {
        return i.status == selectedTab;
      });
      setCurrData(myData);
    } 
    CardFilter(tabState)
  },[tabState, sampleDatas])

  useEffect(() => {
    const newStatus = { ...status }; // or initialize fresh if needed

    sampleDatas.forEach((item) => {
      const key = item.status;
      newStatus[key] = (newStatus[key] || 0) + 1;
    });

    setStatus(newStatus);
  }, [sampleDatas]);

  return (
    <div className="dark flex-col text-white flex justify-center items-center p-10">
      <div className="w-[70%] flex flex-col">
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
        </div>
        <div className="gap-4 mt-4 grid grid-cols-4">
          <AlertsCountCard
            title="Pending Approval"
            keyName={"PendingApproval"}
            colors="yellow"
          />
          <AlertsCountCard
            title="Active Orders"
            keyName={"ActiveOrders"}
            colors="green"
          />
          <AlertsCountCard
            title="Completed"
            keyName={"Completed"}
            colors="blue"
          />
          <AlertsCountCard
            title="Cancelled"
            keyName={"Cancelled"}
            colors="red"
          />
        </div>
      </div>
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
          <FloatingDockDemo />
        </div>
    </div>
  );
}
