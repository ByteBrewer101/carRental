import { DashboardRenderer } from "@/components/DashboardRenderer";
import { NavBar } from "@/components/NavBar";

export function HomePage() {
  return (
    <div className="bg-black min-h-screen">
      <div
        id="home"
        className="flex flex-col w-full justify-center items-center"
      >
        <NavBar />
        <DashboardRenderer/>
        <div
          id="about"
          className="h-[500px] w-[70%] text-justify mt-6 text-l font-medium text-white "
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
          velit voluptatum. Molestiae consectetur recusandae necessitatibus.
          Iusto consequuntur veritatis id maxime officiis a quia assumenda
          minima reprehenderit quo ullam ad, eligendi doloremque obcaecati velit
          molestiae sunt voluptates qui excepturi quidem facere incidunt
          laboriosam tempore. Magni possimus ipsam omnis quasi quod at eum sequi
          modi minima ipsum saepe sed dolores perspiciatis suscipit, animi
          adipisci sit aspernatur eius eveniet unde iusto voluptatum tempore
          expedita reiciendis. Quasi, magni! Corporis quaerat architecto totam
          quae a ipsum ullam laudantium perspiciatis ducimus eos eum, iste non
          voluptas voluptatem! Corrupti deserunt natus sint error facere
          cupiditate autem magnam.
        </div>
      </div>
    </div>
  );
}
