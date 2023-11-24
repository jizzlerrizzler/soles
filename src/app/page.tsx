"use client";
import { Button, Image, Link } from "@nextui-org/react";
import Swiper from "./_components/Swiper";
import Main from "./_components/ui/Main";

export default function HomePage() {
  return (
    <section>
      <Main id="home">
        <div className="mx-auto grid max-w-screen-xl space-x-10 px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
          <div className="mr-auto place-self-center lg:col-span-7">
            <div className="gradienth1" />
            <h1 className="font-tektur  mb-4 max-w-2xl text-5xl font-extrabold leading-none tracking-tight dark:text-white md:text-6xl xl:text-7xl">
              Who is <br />
              <span className=" text-4xl md:text-5xl xl:text-6xl">
                fw.soles?
              </span>
            </h1>
            <p className="mb-6 max-w-2xl font-light  dark:text-gray-300 md:text-lg lg:mb-8 lg:text-xl">
              He once punched a mirror and it shattered, looked at his hand and
              thought what have I done with this strenght
            </p>
            <div className="space-x-2">
              <Button
                as={Link}
                href="/#tiktok"
                size="lg"
                radius="sm"
                variant="shadow"
                color="warning"
                className="text-white"
              >
                Lets see
              </Button>
              <Button
                as={Link}
                href="https://www.tiktok.com/@fw.soles"
                size="lg"
                radius="sm"
                variant="bordered"
                color="warning"
                className="text-white"
              >
                Tiktok Account
              </Button>
            </div>
          </div>
          <div className="hidden lg:col-span-5 lg:mt-0 lg:flex ">
            <div className="gradient" />
            <Image src="profile.webp" alt="profile" className="w-96" />
          </div>
        </div>
        <blockquote
          className="tiktok-embed min-w-[288px] max-w-[780px]"
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
      </Main>
      <Swiper />
    </section>
  );
}
