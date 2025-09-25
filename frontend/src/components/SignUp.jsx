import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SelectDemo } from "./CustomSelect";
import { MorphingText } from "./ui/morphing-text";
import { useNavigate } from "react-router-dom";

export function SignUp() {
  const nav = useNavigate();
  function handleSignIn() {
    nav("/signin");
  }
  return (
    <>
      <div className=" rounded-sm  z-10 w-[80%] flex justify-center p-4">
        <div className=" md:flex hidden w-full  items-center text-white  ">
          <MorphingText
            texts={[
              "Drive your dream car today",
              "Affordable rentals, anytime",
              "Luxury & economy cars available",
              "Easy booking in minutes",
              "No hidden charges, ever",
              "24/7 roadside assistance",
              "Explore new destinations hassle-free",
              "Weekend deals you can’t miss",
              "Comfort, style, and safety guaranteed",
              "Rent it today, ride it your way",
            ]}
            className="text-5xl"
          />
        </div>
        <div className=" w-full p-4 min-h-[500px] flex flex-col justify-center items-center">
          <div className=" shadow shadow-xl shadow-white/10 backdrop-blur-xs bg-white/5 border-1 border-white/5 p-8 rounded-lg space-y-4 w-[70%] flex flex-col items-center ">
            <h1 className="text-white font-bold text-3xl">SignUp</h1>
            <Input className="dark text-white" placeholder="Username" />
            <Input className="dark text-white" placeholder="Email" />
            <Input className="dark text-white" placeholder="Password" />
            <SelectDemo />
            <Button className="w-[40%]" size="sm" variant={"outline"}>
              Submit
            </Button>
            <p className="text-white">
              Have an account?
              <span className="ml-2">
                <button
                  onClick={handleSignIn}
                  className="text-blue-500 underline cursor-pointer"
                >
                  Sign In
                </button>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
