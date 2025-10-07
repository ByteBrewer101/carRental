import { useContext } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Global_Context } from "@/ContextAPI/GlobalContext";

export function AlertsCountCard({title, keyName, colors}) {
    const {status} = useContext(Global_Context)

  return (
    <div>
      <Card className="hover:bg-white/20 cursor-pointer transition-all ease-in-out duration-500">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription style={{color:colors}} className={`font-bold `}>{status[keyName]}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
