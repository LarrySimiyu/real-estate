import Image from "next/image";
import house from "../../../assets/house.jpeg";

const Properties = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white md:px-20 pb-5">
      <div className="mt-5">
        <div className="font-bold text-[30px]">Properties</div>
      </div>
      <div className="mt-5 flex flex-wrap justify-between ">
        <div className="flex flex-col cursor-pointer">
          <Image
            src={house}
            alt="Header"
            className="h-[160px] w-[260px] rounded-md mb-2 hover:border-2 hover:border-white"
          />
          <div className="font-bold text-[25px] flex items-center justify-between w-full">
            $40,000,000{" "}
            <span className="text-gray-500 text-[12px]">+ Buyer Fee</span>
          </div>
          <div className="font-bold">216 Units</div>
          <div className="font-bold">Fort Worth, TX</div>
        </div>

        {/* <Image
          src={house}
          alt="Header"
          className="h-[160px] w-[260px] rounded-md mb-10"
        />
        <Image
          src={house}
          alt="Header"
          className="h-[160px] w-[260px] rounded-md mb-10"
        />
        <Image
          src={house}
          alt="Header"
          className="h-[160px] w-[260px] rounded-md mb-10"
        />
        <Image
          src={house}
          alt="Header"
          className="h-[160px] w-[260px] rounded-md mb-10"
        />
        <Image
          src={house}
          alt="Header"
          className="h-[160px] w-[260px] rounded-md mb-10"
        /> */}

        <div className="h-[160px] w-[260px] mb-10"></div>
        <div className="h-[160px] w-[260px] mb-10"></div>
      </div>
      {/* <footer className="text-white mt-5 flex justify-end">
    <div className=" w-1/5">Download App</div>
  </footer> */}
    </div>
  );
};

export default Properties;
