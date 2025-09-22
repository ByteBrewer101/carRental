import { SignIn } from "@/components/SignIn";
import { Particles } from "@/components/ui/particles";

export function SignInPage(){
    return (
      <div className=" bg-black min-h-screen flex justify-center items-center">
              <div className="fixed w-full">
                <Particles />
              </div>
              <SignIn />
            </div>
    )}