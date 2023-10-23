import Image from "next/image";
import house from "../../../assets/house.jpeg";
import PropertyCard from "@/components/PropertyCard";

const Properties = () => {
  return (
    <div className="flex flex-col bg-black text-white md:px-20 pb-5">
      <div className="max-w-[1366px] h-screen">
        <div className="mt-5">
          <div className="font-bold text-[30px]">Properties</div>
        </div>
        <div className="mt-5 flex flex-wrap justify-between ">
          <PropertyCard />

          <div className="h-[160px] w-[260px] mb-10"></div>
          <div className="h-[160px] w-[260px] mb-10"></div>
        </div>
      </div>

      {/* <footer className="text-white mt-5 flex justify-end">
    <div className=" w-1/5">Download App</div>
  </footer> */}
    </div>
  );
};

export default Properties;
