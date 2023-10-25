"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "react-feather";
import Link from "next/link";
import PropertyCard from "@/components/PropertyCard";
import Navigation from "@/components/Navigation";
import { db } from "@/firebase/config";
import { useRouter } from "next/navigation";

export default function Home() {
  const [properties, setProperties] = useState([]);
  const propertiesRef = db.collection("properties");
  const router = useRouter();

  const getProperties = () => {
    propertiesRef.limit(3).onSnapshot((snapshot) => {
      let properties = snapshot.docs.map((doc) => {
        let data = doc.data();
        let id = doc.id;
        return { id, ...data };
      });

      setProperties(properties);
    });
  };

  useEffect(() => {
    getProperties();
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
    <main className="flex min-h-screen flex-col items-center bg-black text-white md:px-20">
      <div className="max-w-[1366px] w-full">
        <Navigation role={"user"} />
        <div className=" w-full h-[70vh] md:h-[100vh] mb-10 md:mb-0">
          <div className=" md:w-3/4 md:h-full flex flex-col justify-center">
            <div className="text-[75px] md:text-[100px] md:w-[80%] font-bold mb-8 md:leading-[1] ">
              Invest in real estate with PMI.
            </div>
            <p className="text-[28px] md:text-[20px] w-full md:w-3/4">
              We are your trusted partner for real estate investment, wealth
              growth, passive income, and financial freedom.
            </p>
            {/* <button className="border rounded-3xl mt-16 md:w-[30%] md:h-12 md:mt-10 hover:text-black hover:bg-white  text-[18px] flex justify-center items-center">
              <div className="mr-2">Contact</div>
              <ArrowRight size={24} />
            </button> */}
          </div>
        </div>
        <div className=" md:w-full md:flex md:h-[300px] mb-10">
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
        <div className="md:h-[550px] w-full bg-white text-black flex flex-col justify-center items-center ">
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
        <div className="md:h-[250px] w-full bg-white text-black flex  flex-col ">
          <div className="font-semibold text-[45px] md:mb-8">Your Future</div>
          <div className="flex  flex-col justify-between md:justify-around  items-center  ">
            {info.map((tab) => {
              return (
                <div
                  key={tab.title}
                  className="text-black bg-[#FF754C] rounded-md mb-4 md:w-1/3 h-full flex flex-col p-5
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
          <div className="md:h-[250px] w-full bg-black text-white flex  flex-col">
            <div className="font-semibold text-[45px]  md:mb-8">Properties</div>
            <div className=" flex flex-col md:flex-wrap items-center justify-between  gap-5 md:gap-10 my-5 border border-red-500">
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
      </div>
    </main>
  );
}
