import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-black text-white">
      <div className="border z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex ">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
      </div>
      <div className="border w-full h-[50vh]">
        <h1 className="text-[40px] font-semibold">LOREUM-IPSUM,</h1>
        <div className="text-[30px]">a smart way to buy propery</div>
      </div>
    </main>
  );
}
