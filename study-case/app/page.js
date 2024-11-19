import Image from "next/image";
import Products from "./data.js";

export default function Home() {
  return (
    <div className="w-[100%] h-auto bg-[#FAFAFA] px-11 font-montserrat text-[#252B42]">
      <div className="container w-[100%] h-auto py-14">
        <div className="row">
          <div className="swipper">
            <Image
              src={Products[0].img}
              width={400}
              height={200}
              alt="Product-1"
            />
          </div>
          <div className="listProduct py-14 flex gap-7">
            <Image
              src="/pict-product/list-pict-1.jpg"
              width={120}
              height={200}
              alt="List-1"
            />
            <Image
              src="/pict-product/list-pict-2.jpg"
              width={120}
              height={200}
              alt="List-1"
            />
          </div>
        </div>
        <div className="">
          {Products.map((product) => {
            return (
              <div className="flex flex-col px-9">
                <div className="font-[600] text-[23px]">{product.name}</div>
                <div className="text-[#737373] font-montserratBold py-3">
                  {product.review + " Review"}
                </div>
                <div className="text-[27px] font-montserratBold pt-2">
                  {product.price}
                </div>
                <div className="text-[18px] font-montserratBold flex text-[#737373]">
                  <div>Availability : </div>
                  <div
                    className={`${
                      product.status === "In Stock"
                        ? "text-[#23A6F0]"
                        : "text-[#FF0000]"
                    } pb-9 pl-1`}
                  >
                    {product.status}
                  </div>
                </div>
                <div className="text-[15px] font-[400] text-[#858585] text-justify">
                  {product.deskription}
                </div>
              </div>
            );
          })}
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}
