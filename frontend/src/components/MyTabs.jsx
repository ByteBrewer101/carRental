import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Global_Context } from "@/ContextAPI/GlobalContext";
import { useContext } from "react";

export function MyTabs() {
  const {tabState, setTabState} = useContext(Global_Context)
  return (
    <>
      <Tabs defaultValue={tabState} className="w-[400px]">
        <TabsList>
          <TabsTrigger
            onClick={() => {
              setTabState("PendingApproval");
            }}
            value="PendingApproval"
          >
            Pending Approval
          </TabsTrigger>
          <TabsTrigger
            onClick={() => {
              setTabState("ActiveOrders");
            }}
            value="ActiveOrders"
          >
            Active Orders
          </TabsTrigger>
          <TabsTrigger
            onClick={() => {
              setTabState("Completed");
            }}
            value="Completed"
          >
            Completed
          </TabsTrigger>
          <TabsTrigger
            onClick={() => {
              setTabState("Cancelled");
            }}
            value="Cancelled"
          >
            Cancelled
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </>
  );
}
