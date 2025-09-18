import { SignUp } from "@/components/SignUp";
import { Particles } from "@/Components/ui/particles";


export function SignUpPage(){
    return (
      <div className=" bg-black min-h-screen flex justify-center items-center">
        <div className="fixed w-full ">
          <Particles />
        </div>
        <SignUp />
      </div>
    );
}