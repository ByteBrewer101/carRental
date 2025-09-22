import { Input } from "./ui/input";

import { Dropdown } from "./Dropdown";

export function NavBar(){
    return (
      <div className="flex justify-center items-center p-7">
      <div className="bg-white/5 shadow shadow-lg shadow-white/10 p-2 py-3 w-[80%] border-1 border-white/10 rounded-sm px-7 flex justify-between items-center">
          
        <div className="text-white font-bold text-2xl">SiteName</div>
        <div className="flex space-x-3">
          <div>
            <Input className="text-white" placeholder="Search listing" />
          </div>
          <Dropdown/>
        </div>
      </div>
      </div>
    );
} 