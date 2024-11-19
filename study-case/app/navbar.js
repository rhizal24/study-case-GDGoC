import Link from "next/link"

export default function Navbar(){
   const itemNavbar = [
      "Home", "Shop", "About", "Blog", "Contact", "Pages"
   ]
   return (
      <nav className="w-[100%] h-[879px] bg-white p-14">
         <div className="mb-5 px-2 flex justify-between items-center">
            <h3 className="font-montserratBold text-[#252B42] text-[24px]">Bandage</h3>
            <div href="#" className="w-[24px] h-[15px] flex flex-col items-end cursor-pointer">
               <div className="bg-[#737373] w-full h-[5px] rounded-md"></div>
               <div className="bg-[#737373] w-2/3 h-[5px] mt-1 rounded-md"></div>
               <div className="bg-[#737373] w-1/3 h-[5px] mt-1 rounded-md"></div>
            </div>
         </div>
         <div className="w-[100%] flex flex-col items-center">           
         {itemNavbar.map((item) => {
            return (
               <div className="py-5">
                  <Link href="#" className="text-[#737373] font-montserrat font-[400] text-[30px] hover:font-[700] hover:text-[35px] transition-all duration-500 hover:duration-500 ease-in-out">{item}</Link>
               </div>
            )})
         }
         </div>
      </nav>
   )
}