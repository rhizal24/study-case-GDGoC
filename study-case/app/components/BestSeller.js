import Image from "next/image";

export default function BestSeller({
  image,
  name,
  company,
  price,
  priceDiscount,
}) {
  return (
    <div className="flex flex-col text-[18px]">
      <div>
        <Image
          src={image}
          width={600}
          height={600}
          alt="Product"
          className="rounded-lg hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer"
        />
      </div>
      <div className="flex flex-col gap-2 py-8 mb-12">
        <div className="font-montserratBold text-[24px] w-fit cursor-pointer">
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
  );
}
