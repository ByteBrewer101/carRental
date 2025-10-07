import { useState } from "react";
import { Global_Context } from "./GlobalContext";

export function GlobalProvider({children}){
    const [tabState, setTabState] = useState("PendingApproval")
    const [status, setStatus] = useState({
      PendingApproval: 0,
      ActiveOrders: 0,
      Completed: 0,
      Cancelled: 0,
    });
    return <Global_Context.Provider value={{tabState, setTabState, status, setStatus}}>
        {children}
    </Global_Context.Provider>
}