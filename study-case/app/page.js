"use client";

import Image from "next/image";
import { Products, products, bestSeller } from "./data.js";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import RatingBintang from "./components/RatingBintang.js";
import BestSeller from "./components/BestSeller.js";

export default function Home() {
  const [rating, setRating] = useState(0);

  return (
    <div className="w-[100%] h-auto bg-[#FAFAFA] px-11 font-montserrat text-[#252B42] flex flex-col">
      {/* Container */}
      <div className="w-[100%] h-auto py-14 md:flex md:flex-row md:items-center md:px-28">
        {/* Picture */}
        <div className="relative w-full md:w-[50%]">
          <div className="relative">
            <div className="absolute w-full z-10 flex h-full justify-between items-center px-5">
              <button type="button">
                <Image
                  src="/leftArrowSwiper.svg"
                  width={200}
                  height={200}
                  alt="button kiri"
                  className="button-prev-hero w-[25px]"
                />
              </button>
              <button type="button">
                <Image
                  src="/rightArrowSwiper.svg"
                  width={200}
                  height={200}
                  alt="button kiri"
                  className="button-next-hero w-[25px] "
                />
              </button>
            </div>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={15}
              slidesPerView={1}
              initialSlide={0}
              navigation={{
                prevEl: ".button-prev-hero",
                nextEl: ".button-next-hero",
              }}
              className="w-full rounded-lg relative bg-blue-600"
            >
              <SwiperSlide className="outline-0">
                <Image
                  src="/pict-product/product-1.jpg"
                  width={400}
                  height={400}
                  alt="Product1"
                  className="rounded-lg w-full"
                />
              </SwiperSlide>
              <SwiperSlide className="outline-0">
                <Image
                  src="/pict-product/product-1.jpg"
                  width={400}
                  height={400}
                  alt="Product1"


                  
                  className="rounded-lg md:w-full lg:w-full"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="listProduct py-14">
            <Swiper
              slidesPerView={3}
              spaceBetween={5}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper rounded-md gap-2"
            >
              <SwiperSlide>
                <Image
                  src="/pict-product/list-pict-2.jpg"
                  width={120}
                  height={200}
                  alt="List-1"
                  className="rounded-md"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/pict-product/list-pict-1.jpg"
                  width={120}
                  height={200}
                  alt="List-1"
                  className="rounded-md"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/pict-product/list-pict-2.jpg"
                  width={120}
                  height={200}
                  alt="List-1"
                  className="rounded-md"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/pict-product/list-pict-1.jpg"
                  width={120}
                  height={200}
                  alt="List-1"
                  className="rounded-md"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/pict-product/list-pict-2.jpg"
                  width={120}
                  height={200}
                  alt="List-1"
                  className="rounded-md"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/pict-product/list-pict-1.jpg"
                  width={120}
                  height={200}
                  alt="List-1"
                  className="rounded-md"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        {/* Information Product */}
        <div className="px-9 md:w-[50%]">
          {products.map((product) => {
            return (
              <div key={product} className="flex flex-col">
                <div className="font-[600] text-[23px]">{product.name}</div>
                <div className="flex items-center gap-3">
                  <div>
                    <RatingBintang rating={rating} setRating={setRating} />
                  </div>
                  <div className="text-[#737373] font-montserratBold py-3">
                    {product.review + " Review"}
                  </div>
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

          <div className="flex justify-center py-2">
            <div className="w-[99%] border-t-[1px] my-3 border-[#BDBDBD]"></div>
          </div>
          <div className="flex gap-3 pb-4">
            <div className="w-[40px] h-[40px] rounded-full bg-[#23A6F0] hover:scale-110 hover:contrast-105 transition-all duration-300 ease-in-out"></div>
            <div className="w-[40px] h-[40px] rounded-full bg-[#2DC071] hover:scale-110 hover:contrast-105 transition-all duration-300 ease-in-out"></div>
            <div className="w-[40px] h-[40px] rounded-full bg-[#E77C40] hover:scale-110 hover:contrast-105 transition-all duration-300 ease-in-out"></div>
            <div className="w-[40px] h-[40px] rounded-full bg-[#252B42] hover:scale-110 hover:contrast-105 transition-all duration-300 ease-in-out"></div>
          </div>
          <div className="py-10 flex items-center gap-1 justify-between">
            <button className="py-3 px-5 rounded-md bg-[#23A6F0] font-montserratBold text-[#FAFAFA] hover:bg-[#FAFAFA] hover:text-[#23A6F0] hover:border-[1px] hover:border-[#23A6F0] transition-all duration-400 text-[14px] ease-in-out">
              Select Options
            </button>
            <div className="flex items-end gap-2">
              <button className="border-[#E8E8E8] border-2 bg-[#FFFFFF] p-3 rounded-full flex items-center hover:scale-105 transition-all duration-300">
                <Image
                  src="/icon/love.svg"
                  width={20}
                  height={20}
                  alt="loveButton"
                />
              </button>
              <button className="border-[#E8E8E8] border-2 bg-[#FFFFFF] p-3 rounded-full flex items-center hover:scale-105 transition-all duration-300">
                <Image
                  src="/icon/shop.svg"
                  width={20}
                  height={20}
                  alt="shopButton"
                />
              </button>
              <button className="border-[#E8E8E8] border-2 bg-[#FFFFFF] py-[14px] px-3 rounded-full flex items-center  hover:scale-105 transition-all duration-300">
                <Image
                  src="/icon/eye.svg"
                  width={20}
                  height={20}
                  alt="eyeButton"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bestSeller px-1 flex flex-col items-center">
        <div className="font-montserratBold text-[#252B42] text-[28px] mt-14">
          BESTSELLER PRODUCTS
        </div>
        <div className="w-[99%] border-t-[1px] my-7 border-[#BDBDBD]"></div>
        <div>
          {bestSeller.map((best) => {
            return (
              <BestSeller
                key={best.image}
                image={best.image}
                name={best.title}
                company={best.company}
                price={best.price}
                priceDiscount={best.priceDiscount}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
