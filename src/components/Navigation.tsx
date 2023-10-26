"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { auth } from "@/firebase/config";
import Image from "next/image";
import logo from "../../assets/logo.png";

const Navigation = ({ role }) => {
  const router = useRouter();
  const handleSignOut = () => {
    // firebase sign out here
    auth.signOut().then(() => router.push("/"));
  };

  const handleContact = () => {
    // TODO: Handle contact
  };

  const adminNavLinks = [
    {
      name: "Home",
      route: "/adminPage",
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

  const navLinks = [
    {
      name: "Properties",
      route: "/properties",
    },
    {
      name: "Team",
      route: "/teamMembers",
    },
    {
      name: "Contact",
      contact: handleContact(),
    },
  ];
  if (!role) {
    return (
      <div className=" z-10 w-full items-center justify-between text-sm lg:flex md:h-[70px] border leading-[70px] ">
        <div
          className="font-bold text-[60px] border"
          onClick={() => router.push("/")}
        >
          PRI.
        </div>
        <Image src={logo} alt="Platinum Realty Company Logo" />
        <div className="w-1/3 flex justify-between">
          {adminNavLinks.map((link) => {
            return link.name === "Sign Out" ? (
              <button
                key={link.name}
                onClick={link.signOut}
                className="font-bold hover:text-red-400 hover:underline"
              >
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
    );
  }
  {
    return (
      <div className="z-10 w-full items-center justify-between text-sm flex md:h-[100px] leading-[70px] mb-5 md:mb-0 pr-5   md:mt-8">
        {/* <div className="font-bold text-[60px]" onClick={() => router.push("/")}>
          PRI.
        </div> */}
        <div className="w-[140px]  h-full">
          <Image
            src={logo}
            alt="Platinum Realty Company Logo"
            onClick={() => router.push("/")}
            style={{
              objectFit: "contain",
            }}
          />
        </div>

        <div className="w-1/3 flex justify-end mr-4 md:mr-0">
          {navLinks.map((link) => {
            return link.name === "Contact" ? (
              <button
                key={link.name}
                onClick={link.signOut}
                className="font-bold hover:underline"
              >
                Contact
              </button>
            ) : (
              <Link href={link.route} key={link.name} className="mr-5">
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
};

export default Navigation;
