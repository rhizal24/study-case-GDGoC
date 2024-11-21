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
      <div className="w-[100%] h-auto py-14 md:flex md:flex-row md:items-center md:px-20 lg:px-35 md:py-4">
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
              className="w-full rounded-lg relative"
            >
              {[
                "/pict-product/product-1.jpg",
                "/pict-product/product-1.jpg",
              ].map((item) => {
                return (
                  <SwiperSlide className="outline-0">
                    <Image
                      src="/pict-product/product-1.jpg"
                      width={400}
                      height={400}
                      alt="Product1"
                      className="rounded-lg w-full"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="listProduct py-4">
            <Swiper
              slidesPerView={3}
              spaceBetween={15}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper rounded-md gap-2"
            >
              {[
                "/pict-product/list-pict-1.jpg",
                "/pict-product/list-pict-2.jpg",
              ].map((item) => {
                return (
                  <SwiperSlide>
                    <div className="w-full aspect-[4/3] relative">
                      <Image
                        src={item}
                        alt="List-1"
                        className="rounded-md "
                        fill
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        {/* Information Product */}
        <div className="px-4 md:w-[60%] md:pl-12 ">
          {products.map((product) => {
            return (
              <div key={product} className="flex flex-col">
                <div className="font-[600] text-[5vw] md:text-[2vw]">
                  {product.name}
                </div>
                <div className="flex items-center gap-1">
                  <div className="pr-3">
                    <RatingBintang rating={rating} setRating={setRating} />
                  </div>
                  <div className="text-[#737373] font-montserratBold py-3 text-[4vw] md:text-[1.8vw]">
                    {product.review + " Review"}
                  </div>
                </div>
                <div className="text-[6vw] font-montserratBold pt-2 md:text-[2.5vw]">
                  {product.price}
                </div>
                <div className="text-[3.5vw] font-montserratBold flex text-[#737373] md:text-[1.5vw]">
                  <div>Availability : </div>
                  <div
                    className={`${
                      product.status === "In Stock"
                        ? "text-[#23A6F0]"
                        : "text-[#FF0000]"
                    } pb-9 pl-1 md:pb-5`}
                  >
                    {product.status}
                  </div>
                </div>
                <div className="text-[3vw] font-[400] text-[#858585] text-justify md:text-[1.2vw]">
                  {product.deskription}
                </div>
              </div>
            );
          })}

          <div className="flex justify-center py-2">
            <div className="w-[99%] border-t-[1px] my-3 border-[#BDBDBD]"></div>
          </div>
          <div className="flex gap-3 md:gap-2 pb-4 w-[50%] md:w-[50%]">
            {[
              "bg-[#23A6F0]",
              "bg-[#2DC071]",
              "bg-[#E77C40]",
              "bg-[#252B42]",
            ].map((item) => {
              return (
                <div
                  key={item}
                  className={`w-[15%] md:w-[200px] aspect-square rounded-full ${item} hover:scale-110 hover:contrast-105 transition-all duration-300 ease-in-out`}
                />
              );
            })}
          </div>
          <div className="py-10 flex items-center justify-between gap-2">
            <button className="py-3 px-4 rounded-md bg-[#23A6F0] font-montserratBold text-[#FAFAFA] hover:bg-[#FAFAFA] hover:text-[#23A6F0] border-[1px] hover:border-[#23A6F0] transition-all duration-400 text-[2.2vw] ease-in-out md:text-[1.2vw]">
              Select Options
            </button>
            <div className="flex  gap-2">
              {["/icon/love.svg", "/icon/shop.svg", "/icon/eye.svg"].map(
                (item) => {
                  return (
                    <button
                      key={item}
                      className="border-[#E8E8E8] border-2 bg-[#FFFFFF] p-3 rounded-full flex items-center hover:scale-105 transition-all duration-300 md:p-2"
                    >
                      <Image
                        src={item}
                        width={20}
                        height={20}
                        alt="loveButton"
                        className="w-[15px] aspect-square md:w-[15px]"
                      />
                    </button>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="bestSeller px-1 flex flex-col items-center">
        <div className="font-montserratBold text-[#252B42] text-[28px] mt-14">
          BESTSELLER PRODUCTS
        </div>
        <div className="w-[99%] border-t-[1px] my-7 border-[#BDBDBD]"></div>
        <div className="flex flex-wrap">
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
