import Image from "next/image";
import { ArrowRight } from "react-feather";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-black text-white md:px-10">
      <div className=" z-10 w-full  items-center justify-between text-sm lg:flex md:h-[70px]">
        <div className="font-bold text-[60px]">PRI.</div>
        <button className="border rounded-3xl  md:w-[10%] md:h-12 hover:text-black hover:bg-white  text-[18px] flex justify-center items-center">
          <div className="mr-2">Contact</div>
          <ArrowRight size={24} />
        </button>
      </div>
      <div className=" w-full h-[100vh] md:px-10 border">
        <div className=" md:w-1/2 md:h-full flex flex-col justify-center">
          <div className="md:text-[100px] md:w-2/3 font-bold mb-8 leading-[1]">
            Invest in real estate
          </div>
          <p className="text-[20px] w-1/2 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            tellus dui.
          </p>
          <button className="border rounded-3xl  md:w-[30%] md:h-12 md:mt-10 hover:text-black hover:bg-white  text-[18px] flex justify-center items-center">
            <div className="mr-2">Contact</div>
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
      <div className=" md:w-full md:flex md:h-[300px] border">
        <div className=" md:w-[100%]">
          <h1 className="font-bold">About</h1>
        </div>
        <div className="  text-[30px] pr-20">
          Vivamus non massa purus. Proin vestibulum lobortis libero. Sed enim
          velit, iaculis vel viverra ut, laoreet in tortor. Vestibulum ultricies
          turpis non erat faucibus interdum. Fusce venenatis erat orci, in
          sodales justo facilisis eu. Suspendisse id augue libero. Aliquam
          aliquam ligula sem, quis condimentum mi vestibulum eget. Ut sit amet
          vestibulum lacus.
        </div>
      </div>
    </main>
  );
}
