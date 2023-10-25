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
        <div className=" w-full h-[100vh] ">
          <div className=" md:w-3/4 md:h-full flex flex-col justify-center">
            <div className="md:text-[100px] md:w-[80%] font-bold mb-8 leading-[1] ">
              Invest in real estate
            </div>
            <p className="text-[20px] md:w-3/4 ">
              We are your trusted partner for real estate investment, wealth
              growth, passive income, and financial freedom.
            </p>
            <button className="border rounded-3xl  md:w-[30%] md:h-12 md:mt-10 hover:text-black hover:bg-white  text-[18px] flex justify-center items-center">
              <div className="mr-2">Contact</div>
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
        <div className=" md:w-full md:flex md:h-[300px] ">
          <div className=" md:w-[100%]">
            <h1 className="font-semibold text-[24px]">About</h1>
          </div>
          <div className="  text-[30px] pr-20">
            Platinum Realty Investments is a premier real estate acquisition
            group dedicated to maximizing the potential of every investment
            opportunity. With a proven track record of success, we specialize in
            identifying lucrative properties and implementing strategic
            investment strategies to generate substantial returns for our
            clients.
          </div>
        </div>
        <div className="md:h-[550px] w-full bg-white text-black flex flex-col justify-center items-center ">
          <div className="flex flex-col  w-[80%]">
            <div className="font-semibold text-[24px] mb-8">Our Mission</div>
            <div className="md:text-[80px] md:w-[50%] font-bold mb-8 leading-[1] ">
              Creation of investment opportunities
            </div>
            <p className="text-[20px] w-1/2  ">
              Empowering wealth creation through diverse investment
              opportunities for long-term financial success.
            </p>
          </div>
        </div>
        <div className="md:h-[250px] w-full bg-white text-black flex  flex-col  md:px-10">
          {/* <div className="md:text-[30px]  font-bold mb-8 leading-[1] ">
          Creation of investment opportunities
        </div> */}
          <div className="flex md:justify-around  items-center">
            {info.map((tab) => {
              return (
                <div
                  key={tab.title}
                  className="text-black bg-gray-100 rounded-md md:w-1/3 h-full flex flex-col p-5
              "
                >
                  <div className="font-bold text-[30px]">{tab.title}</div>
                  <p className="text-[14px] text-gray-400 leading-5">
                    {tab.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className=" flex flex-wrap justify-between gap-10 my-5">
          {properties.map((p) => {
            return (
              <div onClick={() => router.push("/properties")} key={p.location}>
                <PropertyCard property={p} admin={false} />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
