import Image from "next/image";
import house from "../../assets/house.jpeg";
import EditPropertyModal from "./EditPropertyModal";
import EditTeamModal from "./EditTeamModal";

const TeamCard = ({ member, setEditModalOpen, editModalOpen }) => {
  const { name, role, image } = member;
  return (
    <div className="flex flex-col cursor-pointer w-[300px] h-[300px] justify-center items-center bg-[#222222] rounded-md hover:border-2 hover:border-white">
      {editModalOpen && (
        <EditTeamModal setEditModalOpen={setEditModalOpen} member={member} />
      )}
      <Image
        src={image}
        alt="Header"
        className="h-[160px] w-[260px] rounded-md mb-2 "
      />
      {/* data container */}
      <div className=" w-[260px] ">
        <div className="font-bold text-[25px] flex items-center justify-between ">
          {name}
        </div>
        <div>
          <div className="font-bold">{role}</div>
        </div>

        <div
          className=" flex justify-end text-gray-500"
          onClick={() => setEditModalOpen(true)}
        >
          {" "}
          Edit{" "}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
