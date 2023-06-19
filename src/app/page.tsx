import Image from "next/image";
import { ArrowRight } from "react-feather";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-black text-white md:px-20 border border-white ">
      <div className=" z-10 w-full  items-center justify-between text-sm lg:flex md:h-[70px] ">
        <div className="font-bold text-[60px]">PRI.</div>
        <button className="border rounded-3xl  md:w-[10%] md:h-12 hover:text-black hover:bg-white  text-[18px] flex justify-center items-center">
          <div className="mr-2">Contact</div>
          <ArrowRight size={24} />
        </button>
      </div>
      <div className=" w-full h-[100vh]  ">
        <div className=" md:w-1/2 md:h-full flex flex-col justify-center">
          <div className="md:text-[100px] md:w-[75%] font-bold mb-8 leading-[1] ">
            Invest in real estate
          </div>
          <p className="text-[20px] w-1/2 ">
            We are your trusted partner for real estate investment, wealth
            growth, passive income, and financial freedom.
          </p>
          <button className="border rounded-3xl  md:w-[30%] md:h-12 md:mt-10 hover:text-black hover:bg-white  text-[18px] flex justify-center items-center">
            <div className="mr-2">Contact</div>
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
      <div className=" md:w-full md:flex md:h-[300px] ">
        <div className=" md:w-[100%]">
          <h1 className="font-semibold text-[24px]">About</h1>
        </div>
        <div className="  text-[30px] pr-20">
          Platinum Realty Investments is a premier real estate acquisition group
          dedicated to maximizing the potential of every investment opportunity.
          With a proven track record of success, we specialize in identifying
          lucrative properties and implementing strategic investment strategies
          to generate substantial returns for our clients.
        </div>
      </div>
      <div className="md:h-[600px] w-full bg-white text-black flex flex-col justify-center items-center">
        <div className="flex flex-col  w-[80%]">
          <div className="font-semibold text-[24px] mb-8">Our Mission</div>
          <div className="md:text-[80px] md:w-[50%] font-bold mb-8 leading-[1] ">
            Creation of investment opportunities
          </div>
          <p className="text-[20px] w-1/3  ">
            We are your trusted partner for real estate investment, wealth
            growth, passive income, and financial freedom.
          </p>
        </div>
      </div>
    </main>
  );
}
