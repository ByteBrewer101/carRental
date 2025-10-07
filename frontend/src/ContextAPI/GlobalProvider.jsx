import { useState } from "react";
import { Global_Context } from "./GlobalContext";

export function GlobalProvider({children}){
    const [tabState, setTabState] = useState("PendingApproval")
    return <Global_Context.Provider value={{tabState, setTabState}}>
        {children}
    </Global_Context.Provider>
}