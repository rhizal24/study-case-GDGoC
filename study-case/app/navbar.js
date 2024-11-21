"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const itemNavbar = ["Home", "Shop", "About", "Blog", "Contact", "Pages"];
  const pathAlt = {
    "/": "Shop",
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
      <div className="hidden bg-[#23856D] md:flex md:px-28 py-5 lg:px-36 xl:px-40 2xl:px-52 justify-between font-montserrat text-[1.3vw] items-center lg:text-[1.2vw] xl:text-[1.2vw] 2xl:text-[0.9vw]">
        <div className="flex gap-2">
          <Image src="/phone.svg" width={20} height={20} alt="phone" className="md:w-[15px]"/>
          (225) 555-0118
        </div>
        <div className="flex gap-2">
          <Image src="/mail.svg" width={20} height={20} alt="phone" className="md:w-[15px]"/>
          michelle.rivera@example,com
        </div>
        <div className="font-montserratBold">
          Follow Us and get a chance to win 80% off
        </div>
        <div className="hidden xl:flex gap-2">
          <div className="font-montserratBold">Follow Us  :</div>
          {["/instagram.svg", "/youTube.svg", "/facebook.svg", "/twwiter.svg"].map((item) => {
            return (
              <Image key={item} src={item} width={20} height={20} alt="phone" className="md:w-[15px] cursor-pointer mr-2"/>
            )
          })}
        </div>
      </div>
      <nav className="w-[100%] h-auto bg-[#FFFFFF] pt-12 px-12 pb-6 md:flex md:px-28 md:py-2 lg:px-36 xl:px-40 2xl:px-52">
        <div className="mb-5 md:mb-0 px-2 md:px-0 flex justify-between items-center">
          <h3 className="font-montserratBold text-[#252B42] text-[5vw] md:text-[2vw] lg:text-[1.8vw] xl:text-[1.6vw] 2xl:text-[1.3vw]">
            Bandage
          </h3>
          <button className="w-[24px] h-[15px] flex flex-col items-end cursor-pointer md:hidden">
            <div className="bg-[#737373] w-full h-[5px] rounded-md" />
            <div className="bg-[#737373] w-2/3 h-[5px] mt-1 rounded-md" />
            <div className="bg-[#737373] w-1/3 h-[5px] mt-1 rounded-md" />
          </button>
        </div>
        <div className="w-[100%] flex flex-col items-center md:flex-row md:gap-4 justify-around md:px-8">
          <div className="flex flex-col items-center justify-around md:flex-row md:gap-4">
            {itemNavbar.map((item) => {
              return (
                <div key={item} className="py-5">
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-[#737373] font-montserrat font-[400] text-[6vw] hover:font-[600] transition-all duration-300 ease-in-out hover:text-[6.1vw] md:hover:text-[2.1vw] lg:hover:text-[1.6vw] xl:hover:text-[1.5vw] 2xl:hover:text-[1.3vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.4vw] 2xl:text-[1.2vw]"
                  >
                    {item}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row gap-4">
          {bottomNav.map((bottom) => {
            const isMdHidden =
              bottom.icon !== "/login.svg" && bottom.icon !== "/search.svg";
            return (
              <Link
                key={bottom.icon}
                href={bottom.path}
                className={`py-6 flex font-montserrat font-[400] ${bottom.icon === "/login.svg" ? "text-[6vw]" : "text-[6vw]"
                  } gap-2 text-[#23A6F0] hover:scale-110 transition-all duration-500 ease-in-out hover:font-[700] md:text-[2vw] ${isMdHidden ? "md:hidden" : ""
                  } `}
              >
                <Image
                  src={bottom.icon}
                  width={30}
                  height={24}
                  alt={bottom.name}
                  className="cursor-pointer md:w-[30px]"
                />
                <p className="md:hidden">{bottom.right}</p>
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
