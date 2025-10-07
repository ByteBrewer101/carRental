import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Global_Context } from "@/ContextAPI/GlobalContext";
import { useContext } from "react";

export function MyTabs() {
  const { tabState, setTabState } = useContext(Global_Context);
  const { status} = useContext(Global_Context)
  return (
    <>
      <Tabs defaultValue={tabState} className="w-[400px]">
        <TabsList className="space-x-3">
          <TabsTrigger
            className="relative"
            onClick={() => {
              setTabState("PendingApproval");
            }}
            value="PendingApproval"
          >
            Pending Approval
            <div className="bg-yellow-500 text-white w-4 h-4 rounded-full flex items-center justify-center text-xs absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
              {status.PendingApproval}
            </div>
          </TabsTrigger>
          <TabsTrigger
            className="relative"
            onClick={() => {
              setTabState("ActiveOrders");
            }}
            value="ActiveOrders"
          >
            Active Orders
            <div className="bg-green-500 text-white w-4 h-4 rounded-full flex items-center justify-center text-xs absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
              {status.ActiveOrders}
            </div>
          </TabsTrigger>
          <TabsTrigger
            className="relative"
            onClick={() => {
              setTabState("Completed");
            }}
            value="Completed"
          >
            Completed
            <div className="bg-blue-500 text-white w-4 h-4 rounded-full flex items-center justify-center text-xs absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
              {status.Completed}
            </div>
          </TabsTrigger>
          <TabsTrigger
            className="relative"
            onClick={() => {
              setTabState("Cancelled");
            }}
            value="Cancelled"
          >
            Cancelled
            <div className="bg-red-500 text-white w-4 h-4 rounded-full flex items-center justify-center text-xs absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
              {status.Cancelled}
            </div>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </>
  );
}
