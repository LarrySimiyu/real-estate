"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "react-feather";
import Link from "next/link";
import PropertyCard from "@/components/PropertyCard";
import Navigation from "@/components/Navigation";
import { db } from "@/firebase/config";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";
import TeamCard from "@/components/TeamCard";

export default function Home() {
  const [properties, setProperties] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  const propertiesRef = db.collection("properties");
  const teamRef = db.collection("team");
  const router = useRouter();

  const getProperties = () => {
    propertiesRef.limit(4).onSnapshot((snapshot) => {
      let properties = snapshot.docs.map((doc) => {
        let data = doc.data();
        let id = doc.id;
        return { id, ...data };
      });

      setProperties(properties);
    });
  };

  const getTeamMembers = () => {
    teamRef.limit(4).onSnapshot((snapshot) => {
      let teamData = snapshot.docs.map((doc) => {
        const data = doc.data();
        const id = doc.id;
        return { id, ...data };
      });
      setTeamMembers(teamData);
    });
  };

  useEffect(() => {
    getProperties();
    getTeamMembers();
  }, []);
  const info = [
    {
      title: "Property Acquisition",
      description:
        "Our experienced team finds properties that align with your goals. With thorough market research and evaluations, we offer access to promising residential, commercial, and mixed-use investment options.",
    },
    {
      title: "Life Insurance Policies",
      description:
        "We understand the significance of securing your financial future. We offer tailored life insurance policies exclusively for real estate investors, providing comprehensive coverage and peace of mind. Safeguard your assets and ensure stability for your loved ones with our personalized solutions.",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center bg-black text-white  md:px-20">
      <div className="max-w-[1366px] w-full">
        <Navigation role={"user"} />
        <div className=" w-full  md:h-[100vh] mb-10 md:mb-0 ">
          <div className=" md:w-3/4 md:h-full flex flex-col md:justify-center">
            <div className="text-[55px] md:text-[100px] md:w-[80%] font-bold mb-8 md:leading-[1] px-5">
              Platinum Realty Investments
            </div>
            <p className="text-[28px] md:text-[20px] w-full md:w-3/4 px-5">
              We are your trusted partner for real estate investment, wealth
              growth, passive income, and financial freedom.
            </p>
            {/* <button className="border rounded-3xl mt-16 md:w-[30%] md:h-12 md:mt-10 hover:text-black hover:bg-white  text-[18px] flex justify-center items-center">
              <div className="mr-2">Contact</div>
              <ArrowRight size={24} />
            </button> */}
          </div>
        </div>
        <div className=" md:w-full md:flex md:h-[300px] mb-10 px-5">
          <div className=" md:w-[100%]">
            <h1 className="font-semibold text-[45px]">About Us</h1>
          </div>
          <div className="text-[24px] md:text-[30px]">
            Platinum Realty Investments is a premier real estate acquisition
            group dedicated to maximizing the potential of every investment
            opportunity. With a proven track record of success, we specialize in
            identifying lucrative properties and implementing strategic
            investment strategies to generate substantial returns for our
            clients.
          </div>
        </div>
        <div className=" w-full bg-white text-black flex flex-col justify-center items-center px-5 rounded-md mb-8 md:pb-5 ">
          <div className="flex flex-col  md:w-[80%]">
            <div className="font-semibold text-[45px]  md:mb-8">
              Our Mission
            </div>
            <div className="md:text-[80px] md:w-[50%] font-bold md:mb-8 mb-4 leading-[1] ">
              Creation of investment opportunities
            </div>
            <p className="text-[24px] md:w-1/2 ">
              Empowering wealth creation through diverse investment
              opportunities for long-term financial success.
            </p>
          </div>
        </div>
        <div className="w-full bg-white text-black flex  flex-col p-5 rounded-md ">
          <div className="font-semibold text-[45px] md:mb-8  md:ml-28">
            Your Future
          </div>
          <div className="flex  flex-col md:flex-row justify-between md:justify-around  items-center  ">
            {info.map((tab) => {
              return (
                <div
                  key={tab.title}
                  className="text-black bg-black rounded-md mb-4 md:w-[400px] md:h-[200px] h-full flex flex-col p-5
              "
                >
                  <div className="font-bold text-[30px] text-white">
                    {tab.title}
                  </div>
                  <p className="text-[14px] text-white leading-5">
                    {tab.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        {properties.length > 0 && (
          <div className="w-full bg-black text-white flex  flex-col px-5 md:mt-10">
            <div className="font-semibold text-[45px]">Properties</div>
            <div className=" flex flex-col md:flex-row items-center justify-start  gap-5 md:gap-10 my-5">
              {properties.map((p) => {
                return (
                  <div
                    onClick={() => router.push("/properties")}
                    key={p.location}
                  >
                    <PropertyCard property={p} admin={false} />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {teamMembers.length > 0 && (
          <div className="w-full bg-black text-white flex  flex-col px-5 md:mt-10">
            <div className="font-semibold text-[45px]">Team Members</div>
            <div className=" flex flex-col md:flex-row items-center justify-start  gap-5 md:gap-10 my-5">
              {teamMembers.map((member) => {
                return (
                  <div
                    onClick={() => router.push("/teamMembers")}
                    key={member.name}
                  >
                    <TeamCard member={member} admin={false} />
                  </div>
                );
              })}
            </div>
          </div>
        )}
        <Footer />
      </div>
    </main>
  );
}
