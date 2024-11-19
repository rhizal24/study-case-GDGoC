"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const itemNavbar = ["Home", "Shop", "About", "Blog", "Contact", "Pages"];
  const pathAlt = {
    "/": "Home",
    "/shop": "Shop",
    "/login": "Login",
    "/search": "Search",
    "/love": "Love",
  };

  const bottomNav = [
    {
      name: "Login",
      icon: "/login.svg",
      path: "/login",
      right: "Login / Register",
    },
    {
      name: "Search",
      path: "/search",
      icon: "/search.svg",
    },
    {
      name: "Shop",
      path: "/shop",
      icon: "/shop.svg",
      right: 1,
    },
    {
      name: "Love",
      path: "/love",
      icon: "/love.svg",
      right: 1,
    },
  ];

  const path = usePathname();

  return (
    <>
      <nav className="w-[100%] h-auto bg-[#FFFFFF] pt-12 px-12 pb-6">
        <div className="mb-5 px-2 flex justify-between items-center">
          <h3 className="font-montserratBold text-[#252B42] text-[24px]">
            Bandage
          </h3>
          <button className="w-[24px] h-[15px] flex flex-col items-end cursor-pointer">
            <div className="bg-[#737373] w-full h-[5px] rounded-md" />
            <div className="bg-[#737373] w-2/3 h-[5px] mt-1 rounded-md" />
            <div className="bg-[#737373] w-1/3 h-[5px] mt-1 rounded-md" />
          </button>
        </div>
        <div className="w-[100%] flex flex-col items-center">
          {itemNavbar.map((item) => {
            return (
              <div key={item} className="py-5">
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="text-[#737373] font-montserrat font-[400] text-[30px] hover:font-[700] hover:text-[35px] transition-all duration-500 hover:duration-500 ease-in-out"
                >
                  {item}
                </Link>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col items-center">
          {bottomNav.map((bottom) => {
            return (
              <Link
                key={bottom.icon}
                href={bottom.path}
                className={`py-6 flex font-montserrat font-[400] ${
                  bottom.icon === "/login.svg" ? "text-[30px]" : "text-[16px]"
                } gap-2 text-[#23A6F0] hover:scale-110 transition-all duration-500 ease-in-out hover:font-[700]`}
              >
                <Image
                  src={bottom.icon}
                  width={30}
                  height={24}
                  alt={bottom.name}
                  className="cursor-pointer"
                />
                <p>{bottom.right}</p>
              </Link>
            );
          })}
        </div>
      </nav>
      <div className="w-[100%] h-[92px] bg-[#FAFAFA] flex items-center justify-center font-montserrat gap-4 text-[#737373] text-[16px] font-[700]">
        <Link
          href="#"
          className="hover:text-[#252B42] hover:font-montserratBold transition-all duration-500 ease-in-out hover:scale-105"
        >
          Home
        </Link>
        <Image src="/arrow.svg" width={10} height={20} alt="arrow" />
        <Link
          href="#"
          className=" hover:text-[#252B42] hover:font-montserratBold transition-all duration-500 ease-in-out hover:scale-105"
        >
          {pathAlt[path]}
        </Link>
      </div>
    </>
  );
}
