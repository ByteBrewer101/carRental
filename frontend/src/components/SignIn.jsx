import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { MorphingText } from "./ui/morphing-text";
import { useSigninHooks } from "@/Pages/Hooks/AuthHooks";

export function SignIn(){
    
    const {loading, error, handleSignIn}= useSigninHooks() 
    const nav = useNavigate()
    function handleSignUp(){
        nav("/signup")
    }
    const tempUser = {
      email: "atharva@example.com",
      password: "StrongPass123!"
    };

    function handleSubmit(){
    //  localStorage.setItem("access_token", "gfddsdesed")
    //  nav("/dashboard")
    handleSignIn(tempUser)

    }

    return (
      <>
        <div className="rounded-sm  z-10 w-[80%] flex justify-center p-4">
          <div className="md:flex hidden w-full  items-center text-white ">
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
            <div className="shadow shadow-xl shadow-white/10 backdrop-blur-xs bg-white/5 border-1 border-white/5 p-8 rounded-lg space-y-4 w-[70%] flex flex-col items-center ">
              <h1 className="text-3xl font-bold text-white">SignIn</h1>
              <Input className="dark text-white" placeholder="Email" />
              <Input className="dark text-white" placeholder="Password" />
              <Button  onClick={handleSubmit} className="w-[40%]" size="sm" variant={"outline"}>
                Submit
              </Button>
              <p className="text-white">Don't have an account?
                <span className="ml-2">
                <button onClick={handleSignUp} className="text-blue-500 underline cursor-pointer">Sign Up</button>
                </span>
                </p>
            </div>
          </div>
        </div>
      </>
    );
}