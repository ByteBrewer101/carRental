import { Input } from "./ui/input";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "./Dropdown";
import { useLocation } from "react-router-dom";
import { Button } from "./ui/button";

export function NavBar(){

  const location = useLocation()
  const nav = useNavigate();

  function handleSignIn() {
    nav("/signin");
  }
  function handleSignUp() {
    nav("/signup");
  }
  function handleDash() {
    nav("/dashboard");
  }

    return (
      <div className="flex justify-center items-center fixed top-0 py-7 w-full">
        <div className="bg-white/5 shadow shadow-lg shadow-white/10 p-2 py-3 w-[80%] backdrop-blur-xl border-1 border-white/10 rounded-sm px-7 flex justify-between items-center">
          <div className="text-white font-bold text-2xl">
            <a href="#home">SiteName</a>
          </div>

          {location.pathname === "/" && (
            <div className="dark space-x-2 flex flex-row text-white px-2 transition-all ease-in-out duration-500">
              <Button variant="ghost">
                <a href="#home">Home</a>
              </Button>
              <Button variant="ghost">
                <a href="#about">About</a>
              </Button>
              <Button onClick={handleDash} variant="ghost">
                Dashboard
              </Button>
              <div className="hover:bg-white/10 rounded-sm flex items-center text-sm font-medium px-3">
                <button onClick={handleSignIn}>SignIn/</button>
                <button onClick={handleSignUp}>SignUp</button>
              </div>
            </div>
          )}
          {location.pathname != "/" && (
            <div className="flex space-x-3">
              <div>
                <Input className="text-white" placeholder="Search listing" />
              </div>
              <h1 className="text-white">Welcome, {JSON.parse(localStorage.getItem("userData")).username}</h1>
              <Dropdown />
            </div>
          )}
        </div>
      </div>
    );
} 