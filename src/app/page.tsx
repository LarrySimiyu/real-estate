import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-black text-white">
      <div className="border z-10 w-full  items-center justify-between font-mono text-sm lg:flex md:h-[70px] px-3">
        <div className="font-bold text-[60px]">PRI.</div>
        <button className="border rounded-2xl  md:w-[15%] md:h-10 text-black bg-white text-[18px]">
          Contact
        </button>
      </div>
      <div className="border w-full h-[100vh]">
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
