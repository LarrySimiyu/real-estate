import Image from "next/image";
import house from "../../assets/house.jpeg";

const PropertyCard = ({ property }) => {
  const { price, description, location, image } = property;
  return (
    <div className="flex flex-col cursor-pointer w-[300px] h-[300px] justify-center items-center bg-[#222222] rounded-md">
      <Image
        src={house}
        alt="Header"
        className="h-[160px] w-[260px] rounded-md mb-2 hover:border-2 hover:border-white"
      />
      {/* data container */}
      <div className=" w-[260px] ">
        <div className="font-bold text-[25px] flex items-center justify-between ">
          {price}
          <span className="text-gray-500 text-[12px]">+ Buyer Fee</span>
        </div>
        <div className="font-bold">{description}</div>
        <div className="font-bold">{location}</div>
      </div>
    </div>
  );
};

export default PropertyCard;
