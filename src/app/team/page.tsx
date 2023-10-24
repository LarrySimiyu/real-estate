"use client";
import React, { useState, useEffect } from "react";

import TeamCard from "@/components/TeamCard";
import Link from "next/link";
import house from "../../../assets/house.jpeg";
import EditPropertyModal from "@/components/EditPropertyModal";

const TeamPage = () => {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  {
    /* TODO: Create Add Property Page
            TODO: Create Add Team Member Page
            TODO: Import property item
            TODO: ADD Edit property modal -> delete button, update options */
  }

  const handleSignOut = () => {
    // firebase sign out here
  };

  const navLinks = [
    {
      name: "Properties",
      route: "/adminPage",
    },
    {
      name: "Team",
      route: "/team",
    },
    // {
    //   name: "Sign Out",
    //   route: () => handleSignOut(),
    // },
  ];

  const teamMembers = [
    {
      name: "Larry Simiyu",
      role: "CEO",
      image: house,
    },
    {
      name: "Larry Simiyu",
      role: "CEO",
      image: house,
    },
    {
      name: "Larry Simiyu",
      role: "CEO",
      image: house,
    },
    {
      name: "Larry Simiyu",
      role: "CEO",
      image: house,
    },
    {
      name: "Larry Simiyu",
      role: "CEO",
      image: house,
    },
  ];
  return (
    <div className="flex min-h-screen flex-col items-center bg-black text-white md:px-20">
      <div className="max-w-[1366px] w-full">
        <div className=" z-10 w-full items-center justify-between text-sm lg:flex md:h-[70px]">
          <div className="font-bold text-[60px]">PRI.</div>
          <div className="border w-1/3 flex justify-between">
            {navLinks.map((link) => {
              return (
                <Link href={link.route} key={link.name}>
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
        <div className=" flex justify-end ">Add Property</div>

        <div className=" flex flex-wrap justify-between gap-10">
          {/* - upload property modal - show all properties - when property is
          clicked open edit modal */}
          {teamMembers.map((member) => {
            return (
              <>
                <TeamCard
                  key={member.name}
                  member={member}
                  setEditModalOpen={setEditModalOpen}
                  editModalOpen={editModalOpen}
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
