import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

export default function Body() {
  return (
    <>
      <div className="p-10 mx-auto lg:flex-row flex-col flex  w-[75%] items-center justify-center">
        <div className="lg:flex-1">
          <h1
            className="lg:mt-6 pt-6  lg:text-5xl sm:text-4xl font-headline tracking-tight text-[#4D4D4D] leading-snug sm:leading-normal font-semibold"
            role="heading"
          >
            Helping a local <br />
            <span className="text-[#4CAF4F] font-semibold" role="heading">
              business reinvent itself
            </span>
          </h1>
          <span className="lg:w-3/5 sm:w-full mt-2 text-[#18191F] lg:text-lg sm:text-base">
            We reached here with our hard work and dedication
          </span>
        </div>
        <div className="lg:flex-1 mt-6">
          <div className="flex gap-10">
            <div className="flex w-[200px]">
              <div className="w-[50px]">
                <Image alt="icon3" src={"/Icon3.png"} width={48} height={48} />
              </div>
              <div className="w-[140px] ml-2">
                <h1 className="font-bold text-[28px] text-[#4D4D4D]">
                  2,245,341
                </h1>
                <p className="text-[#717171] text-[16px] font-normal">
                  Members
                </p>
              </div>
            </div>
            <div className="flex w-[200px]">
              <div className="w-[50px]">
                <Image alt="icon4" src={"/Icon4.png"} width={48} height={48} />
              </div>
              <div className="w-[140px] ml-2">
                <h1 className="font-bold text-[28px] text-[#4D4D4D]">46,328</h1>
                <p className="text-[#717171] text-[16px] font-normal">
                  Members
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-10 mt-4">
            <div className="flex w-[200px]">
              <div className="w-[50px]">
                <Image alt="icon5" src={"/Icon5.png"} width={48} height={48} />
              </div>
              <div className="w-[140px] ml-2">
                <h1 className="font-bold text-[28px] text-[#4D4D4D]">
                  828,867
                </h1>
                <p className="text-[#717171] text-[16px] font-normal">
                  Members
                </p>
              </div>
            </div>
            <div className="flex w-[200px]">
              <div className="w-[50px]">
                <Image alt="icon6" src={"/Icon6.png"} width={48} height={48} />
              </div>
              <div className="w-[140px] ml-2">
                <h1 className="font-bold text-[28px] text-[#4D4D4D]">
                  1,926,436
                </h1>
                <p className="text-[#717171] text-[16px] font-normal">
                  Members
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white pt-5">
        <div className="my-5 mt-4 p-6 w-[70%] mx-auto lg:flex items-center justify-center">
          <div className="lg:flex-1">
            <Image src={"/pana.png"} alt="pana" width={442} height={433} />
          </div>
          <div className="lg:flex-1">
            <h1 className="text-[36px] text-[#4D4D4D] font-semibold">
              How to design your site footer like we did
            </h1>
            <p className="text-[14px] text-[#717171] my-5 font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
            <Button size={"lg"}>Register</Button>
          </div>
        </div>
      </div>
    </>
  );
}
