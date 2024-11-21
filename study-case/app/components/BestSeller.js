import Image from "next/image";

export default function BestSeller({
  image,
  name,
  company,
  price,
  priceDiscount,
}) {
  return (
    <div className="flex flex-col text-[3.5vw] md:text-[2vw] md:w-[50%] md:p-4 xl:w-[30%] xl:text-[1.5vw] 2xl:w-[25%] 2xl:text-[1vw]">
      <div className="bg-white rounded-lg p-5 mb-8 hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer md:mb-2">
        <div>
          <Image
            src={image}
            width={600}
            height={600}
            alt="Product"
            className="rounded-lg w-[600px] aspect-auto"
          />
        </div>
        <div className="flex flex-col gap-2 py-8 mb-6 px-2">
          <div className="font-montserratBold text-[5vw] md:text-[2.5vw] w-fit cursor-pointer xl:text-[2vw] 2xl:text-[1.5vw]">
            {name}
          </div>
          <div className="font-montserratBold text-[#737373] w-fit cursor-pointer">
            {company}
          </div>
          <div className="flex flex-row gap-2 p-1 font-montserratBold">
            <div className="text-[#BDBDBD] hover:underline hover:underline-offset-[6px] transition-all duration-300 ease-in-out cursor-pointer">
              {price}
            </div>
            <div className="text-[#23856D] hover:underline hover:underline-offset-[6px] transition-all duration-300 ease-in-out cursor-pointer">
              {priceDiscount}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
