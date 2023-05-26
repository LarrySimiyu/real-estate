import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-black text-white">
      <div className="border z-10 w-full  items-center justify-between font-mono text-sm lg:flex ">
        <div>TITLE</div>
      </div>
      <div className="border w-full h-[50vh]">
        <h1 className="text-[40px] font-semibold">LOREUM-IPSUM,</h1>
        <div className="text-[30px]">a smart way to buy propery</div>
      </div>
    </main>
  );
}
