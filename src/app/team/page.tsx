"use client";
import React, { useState, useEffect } from "react";

import TeamCard from "@/components/TeamCard";
import Link from "next/link";
import house from "../../../assets/house.jpeg";
import AddTeamModal from "@/components/AddTeamModal";

import { db } from "@/firebase/config";

const TeamPage = () => {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [teamMembers, setTeamMembers] = useState([]);

  const teamRef = db.collection("team");

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
  ];

  const getTeamMembers = () => {
    teamRef.onSnapshot((snapshot) => {
      let teamData = snapshot.docs.map((doc) => {
        const data = doc.data();
        const id = doc.id;
        return { id, ...data };
      });
      setTeamMembers(teamData);
    });
  };

  useEffect(() => {
    getTeamMembers();
  }, []);
  return (
    <div className="flex min-h-screen flex-col items-center bg-black text-white md:px-20">
      {addModalOpen && <AddTeamModal setAddModalOpen={setAddModalOpen} />}
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
        <div
          className=" flex justify-end"
          onClick={() => setAddModalOpen(true)}
        >
          Add Team Member
        </div>
        {teamMembers.length === 0 ? (
          <div>No Team Members Added</div>
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default TeamPage;
