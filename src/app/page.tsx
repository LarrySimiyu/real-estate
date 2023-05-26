import Image from "next/image";
import { ArrowRight } from "react-feather";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-black text-white">
      <div className="border z-10 w-full  items-center justify-between font-mono text-sm lg:flex md:h-[70px] px-5">
        <div className="font-bold text-[60px]">PRI.</div>
        <button className="border rounded-3xl  md:w-[10%] md:h-12 hover:text-black hover:bg-white  text-[18px] flex justify-center items-center">
          <div className="mr-2">Contact</div>
          <ArrowRight size={24} />
        </button>
      </div>
      <div className="border w-full h-[100vh] px-5">
        <div className="border md:w-1/2">
          <div className="md:text-[30px] font-medium border">
            Invest in real estate
          </div>
          <p>Find properties that align with your needs</p>
        </div>
      </div>
    </main>
  );
}
