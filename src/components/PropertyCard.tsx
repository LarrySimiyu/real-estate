import Image from "next/image";
import house from "../../assets/house.jpeg";

const PropertyCard = () => {
  return (
    <div className="flex flex-col cursor-pointer w-[300px] h-[300px] justify-center items-center bg-[#222222] rounded-md">
      <Image
        src={house}
        alt="Header"
        className="h-[160px] w-[260px] rounded-md mb-2 hover:border-2 hover:border-white"
      />
      {/* data container */}
      <div className="border w-[260px]">
        <div className="font-bold text-[25px] flex items-center justify-between ">
          $40,000,001{" "}
          <span className="text-gray-500 text-[12px]">+ Buyer Fee</span>
        </div>
        <div className="font-bold">216 Units</div>
        <div className="font-bold">Fort Worth, TX</div>
      </div>
    </div>
  );
};

export default PropertyCard;
