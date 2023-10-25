"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { auth } from "@/firebase/config";
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
      name: "Contact",
      contact: handleContact(),
    },
  ];
  if (!role) {
    return (
      <div className=" z-10 w-full items-center justify-between text-sm lg:flex md:h-[70px] border leading-[70px]">
        <div
          className="font-bold text-[60px] border"
          onClick={() => router.push("/")}
        >
          PRI.
        </div>
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
      <div className=" z-10 w-full items-center justify-between text-sm lg:flex md:h-[70px] leading-[70px]">
        <div className="font-bold text-[60px]" onClick={() => router.push("/")}>
          PRI.
        </div>
        <div className="w-1/3 flex justify-end">
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