import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <div
      className="lg:flex lg:p-10 p-6 pb-6 text-center lg:text-left justify-center gap-x-10 w-[100%] lg:w-[75%] mx-auto items-center bg-[#F5F7FA]"
      role="main"
    >
      <div className="sm:py-16">
        <h1
          className="lg:mt-6 pt-6  lg:text-5xl lg:text-left text-[40px] font-headline tracking-tight text-[#4D4D4D] leading-snug sm:leading-normal font-semibold"
          role="heading"
        >
          Lessons and insights <br />
          <span className="text-[#4CAF4F] font-semibold" role="heading">
            from 8 years
          </span>
        </h1>
        <br />
        <span className="lg:w-3/5 sm:w-full mt-2 text-gray-600 lg:text-lg sm:text-base">
          Where to grow your business as a photographer: site or social media?
        </span>
        <div
          className="mt-8 lg:flex sm:block sm:w-1/2 sm:mx-auto lg:mx-0"
          role="button"
        >
          <Button className="outline-none" size={"lg"}>
            Register
          </Button>
        </div>
      </div>
      <div className="lg:mt-0 mt-10 flex justify-center items-center" role="img">
        <Image src={"/Illustration.png"} alt="Illustration" height={407} width={391} />
      </div>
    </div>
  );
}
