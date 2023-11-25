"use client";
import { Image } from "@nextui-org/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper as Swip, SwiperSlide } from "swiper/react";
import Main from "./ui/Main";

export default function Swiper() {
  return (
    <Main id="tiktok" className="mb-10 mt-20 lg:mt-0">
      <h1 className="mb-10 inline bg-gradient-to-b from-[#ffd27d] to-[#f0981d] bg-clip-text font-tektur text-5xl font-semibold uppercase tracking-tight text-transparent lg:text-7xl">
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
      <div className="mt-20 w-full ">
        <blockquote
          className="tiktok-embed min-w-[288px] max-w-[780px] "
          cite="https://www.tiktok.com/@fw.soles"
          data-unique-id="fw.soles"
          data-embed-type="creator"
        >
          <section>
            <a
              target="_blank"
              href="https://www.tiktok.com/@fw.soles?refer=creator_embed"
            >
              @fw.soles
            </a>
          </section>
        </blockquote>
      </div>
    </Main>
  );
}
