import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SelectDemo } from "./CustomSelect";

export function SignUp() {
  return (
    <>
      <div className="bg-white/10 rounded-sm border-2 border-white/20 w-[80%] flex justify-center p-4">
        <div className=" w-full"></div>
        <div className=" w-full p-4 min-h-[500px] flex flex-col justify-center items-center">
          <div className="space-y-4 w-[70%] flex flex-col items-center ">
            <h1 className="text-white font-bold text-3xl">SignUp</h1>
            <Input placeholder="Username" />
            <Input placeholder="Email" />
            <Input placeholder="Password" />
            <SelectDemo/>
            <Button className="w-[40%]" size="sm" variant={"outline"}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
