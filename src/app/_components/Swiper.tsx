"use client";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper as Swip, SwiperSlide } from "swiper/react";
import Main from "./ui/Main";
import { Image } from "@nextui-org/react";

export default function Swiper() {
  return (
    <Main id="tiktok" className="mb-10">
      <h1 className="font-tektur mb-10 inline bg-gradient-to-b from-[#ffd27d] to-[#f0981d] bg-clip-text text-4xl font-semibold uppercase tracking-tight text-transparent lg:text-6xl">
        Tiktok
      </h1>
      <p className="mb-2">
        <i>Swipe to left </i>
      </p>
      <div>
        <div className="gradient" />

        <Swip
          pagination={{
            type: "progressbar",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper w-80 rounded-md hover:cursor-grab"
        >
          <SwiperSlide>
            <Image src="/slide1.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/slide2.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/comment.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/account.jpg" alt="" />
          </SwiperSlide>
        </Swip>
      </div>
    </Main>
  );
}
