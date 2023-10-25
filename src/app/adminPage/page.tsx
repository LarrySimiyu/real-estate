"use client";
import React, { useState, useEffect } from "react";
import { auth } from "../../firebase/config";
import { useRouter } from "next/navigation";

import PropertyCard from "@/components/PropertyCard";
import Link from "next/link";
import house from "../../../assets/house.jpeg";
import EditPropertyModal from "@/components/EditPropertyModal";
import TeamCard from "@/components/TeamCard";

const AdminPage = () => {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  {
    /* TODO: Create Add Property Page
            TODO: Create Add Team Member Page
            TODO: Import property item
            TODO: ADD Edit property modal -> delete button, update options */
  }
  const router = useRouter();

  const handleSignOut = () => {
    // firebase sign out here
    auth.signOut().then(() => router.push("/"));
  };

  const navLinks = [
    {
      name: "Properties",
      route: "/propertiesAdmin",
    },
    {
      name: "Team",
      route: "/team",
    },
    {
      name: "Sign Out",
      signOut: () => handleSignOut(),
    },
  ];

  const properties = [
    {
      price: "$5,000,000",
      description: "10 Units + 3 Bathrooms",
      location: "17 Carvel Pl Sacramento Ca",
      image: house,
    },
    {
      price: "$5,000,000",
      description: "10 Units + 3 Bathrooms",
      location: "17 Carvel Pl Sacramento Ca",
      image: house,
    },
    {
      price: "$5,000,000",
      description: "10 Units + 3 Bathrooms",
      location: "17 Carvel Pl Sacramento Ca",
      image: house,
    },
    {
      price: "$5,000,000",
      description: "10 Units + 3 Bathrooms",
      location: "17 Carvel Pl Sacramento Ca",
      image: house,
    },
    {
      price: "$5,000,000",
      description: "10 Units + 3 Bathrooms",
      location: "17 Carvel Pl Sacramento Ca",
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
              return link.name === "Sign Out" ? (
                <button key={link.name} onClick={link.signOut}>
                  Sign Out
                </button>
              ) : (
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
          {properties.map((p) => {
            return (
              <>
                <PropertyCard
                  key={p.location}
                  property={p}
                  admin={true}
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

export default AdminPage;
