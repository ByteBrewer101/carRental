import { Particles } from "@/Components/ui/particles";

export function GlobalWrapper({children}){
    return <div  >
          <div className="fixed w-full  ">
                  <Particles/>
                </div>
                

                {children}
               
    </div>
}