import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import ArrorIcon from "./arrowIcon";
import CountUp from "react-countup";

export default function Body() {
  return (
    <>
      <div className="lg:p-10 lg:pb-14 px-6 py-8 mx-auto lg:flex-row gap-x-10 flex-col flex lg:w-[75%] items-center justify-center">
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
          <div className="flex lg:gap-10 gap-1">
            <div className="flex lg:w-[200px] w-[160px]">
              <div className="lg:w-[50px] w-[40px]">
                <Image alt="icon3" src={"/Icon3.png"} width={48} height={48} />
              </div>
              <div className="w-[140px] ml-2">
                <h1 className="font-bold text-[20px]  lg:text-[28px] text-[#4D4D4D]">
                  <CountUp
                    end={2245341}
                    start={0}
                    duration={2.75}
                    enableScrollSpy={true}
                  />
                </h1>
                <p className="text-[#717171] text-[12px] lg:text-[16px] font-normal">
                  Members
                </p>
              </div>
            </div>
            <div className="flex lg:w-[200px] w-[160px]">
              <div className="lg:w-[50px] w-[40px]">
                <Image alt="icon4" src={"/Icon4.png"} width={48} height={48} />
              </div>
              <div className="w-[140px] ml-2">
                <h1 className="font-bold text-[20px]  lg:text-[28px] text-[#4D4D4D]">
                  <CountUp
                    end={46328}
                    start={0}
                    duration={2.75}
                    enableScrollSpy={true}
                  />
                </h1>
                <p className="text-[#717171] text-[12px] lg:text-[16px] font-normal">
                  Members
                </p>
              </div>
            </div>
          </div>
          <div className="flex lg:gap-10 gap-1 mt-4">
            <div className="flex lg:w-[200px] w-[160px]">
              <div className="lg:w-[50px] w-[40px]">
                <Image alt="icon5" src={"/Icon5.png"} width={48} height={48} />
              </div>
              <div className="w-[140px] ml-2">
                <h1 className="font-bold text-[20px]  lg:text-[28px] text-[#4D4D4D]">
                  <CountUp
                    end={828867}
                    start={0}
                    duration={2.75}
                    enableScrollSpy={true}
                  />
                </h1>
                <p className="text-[#717171] text-[12px] lg:text-[16px] font-normal">
                  Members
                </p>
              </div>
            </div>
            <div className="flex lg:w-[200px] w-[160px]">
              <div className="lg:w-[50px] w-[40px]">
                <Image alt="icon6" src={"/Icon6.png"} width={48} height={48} />
              </div>
              <div className="w-[140px] ml-2">
                <h1 className="font-bold text-[20px]  lg:text-[28px] text-[#4D4D4D]">
                  <CountUp
                    end={1926436}
                    start={0}
                    duration={2.75}
                    enableScrollSpy={true}
                  />
                </h1>
                <p className="text-[#717171] text-[12px] lg:text-[16px] font-normal">
                  Members
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-[#263238] pt-4">
        <div className="my-5 mt-4 p-6 lg:p-10 lg:w-[70%] mx-auto lg:flex items-center justify-center">
          <div className="lg:flex-1">
            <Image src={"/pana.png"} alt="pana" width={442} height={433} />
          </div>
          <div className="lg:flex-1">
            <h1 className="text-[36px] dark:text-primary text-[#4D4D4D] font-semibold">
              How to design your site footer like we did
            </h1>
            <p className="text-[14px] dark:text-[rgba(255,255,255,0.7)] text-[#717171] my-5 font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
            <Button size={"lg"}>Learn More</Button>
          </div>
        </div>
      </div>

      <div>
        <div className="lg:w-[70%] lg:px-10 mb-5 p-6 mx-auto md:flex-col lg:flex-row flex-col flex lg:gap-x-32 items-center justify-center">
          <div>
            <Image src={"/image.png"} alt="image" width={326} height={326} />
          </div>
          <div className="lg:flex-1">
            <p className="text-[16px] text-[#717171] my-5 font-medium">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <h1 className="text-[20px] text-[#4CAF4F] font-semibold mb-2">
              Tim Smith
            </h1>
            <p className="text-[16px] text-[#89939E] font-normal">
              British Dragon Boat Racing Association
            </p>
            <div className="mt-4 2xl:gap-x-10 2xl:flex-row 2xl:items-center flex flex-col items-start gap-y-3">
              <div className="flex lg:gap-x-10 gap-x-3">
                {Array.from({ length: 6 }).map((_, index) => (
                  <Image
                    src={`/clients/client${index}.png`}
                    alt={`client${index}`}
                    width={40}
                    height={40}
                    key={`client${index}`}
                  />
                ))}
              </div>
              <h1 className="text-[20px] text-[#4CAF4F] font-semibold mb-2 flex justify-center items-center gap-x-3 cursor-pointer">
                <p>Meet all customers </p>
                <ArrorIcon hexColor={"#4CAF4F"} />
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:p-10 lg:pb-36 px-6 py-8 pb-36 bg-white dark:bg-[#263238]">
        <div>
          <h1 className="text-[36px] text-[#4D4D4D] font-semibold text-center dark:text-primary">
            Caring is the new marketing
          </h1>
          <p className="text-[#717171] dark:text-[rgba(255,255,255,0.7)] text-[16px] font-normal text-center xl:w-[40%] my-7 lg:w-[80%] mx-auto">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, dolorem mollitia. Quasi ducimus quos et unde a inventore! At facere consectetur eveniet possimus, aut beatae unde itaque eos nihil. Dolore.
          </p>
        </div>
        <div>
          <div className="lg:w-[75%] mx-auto my-4 flex flex-col 2xl:flex-row justify-around gap-x-4 gap-y-32 items-center">
            <div className="relative w-fit">
              <Image
                src={`/image/image0.png`}
                alt="image0"
                width={368}
                height={366}
              />
              <div
                className="w-[90%] absolute left-[50%] bg-[#F5F7FA] p-4 text-center rounded-[8px] font-semibold text-[20px]"
                style={{
                  transform: "translate(-50%, -50%);",
                  boxShadow: "0px 8px 16px 0px #ABBED166;",
                }}
              >
                <p className="text-[#717171] mb-5 ">
                  Creating Streamlined Safeguarding Processes with OneRen
                </p>
                <div className="text-[#4CAF4F] flex justify-center items-center gap-x-5 cursor-pointer">
                  <h1>Readmore</h1>
                  <ArrorIcon hexColor={"#4CAF4F"} />
                </div>
              </div>
            </div>
            <div className="relative w-fit">
              <Image
                src={`/image/image1.png`}
                alt="image1"
                width={368}
                height={366}
              />
              <div
                className="w-[90%] absolute left-[50%] bg-[#F5F7FA] p-4 text-center rounded-[8px] font-semibold text-[20px]"
                style={{
                  transform: "translate(-50%, -50%);",
                  boxShadow: "0px 8px 16px 0px #ABBED166;",
                }}
              >
                <p className="text-[#717171] mb-5 ">
                  Creating Streamlined Safeguarding Processes with OneRen
                </p>
                <div className="text-[#4CAF4F] flex justify-center items-center gap-x-5 cursor-pointer">
                  <h1>Readmore</h1>
                  <ArrorIcon hexColor={"#4CAF4F"} />
                </div>
              </div>
            </div>
            <div className="relative w-fit">
              <Image
                src={`/image/image2.png`}
                alt="image2"
                width={368}
                height={366}
              />
              <div
                className="w-[90%] absolute left-[50%] bg-[#F5F7FA] p-4 text-center rounded-[8px] font-semibold text-[20px]"
                style={{
                  transform: "translate(-50%, -50%);",
                  boxShadow: "0px 8px 16px 0px #ABBED166;",
                }}
              >
                <p className="text-[#717171] mb-5 ">
                  Creating Streamlined Safeguarding Processes with OneRen
                </p>
                <div className="text-[#4CAF4F] flex justify-center items-center gap-x-5 cursor-pointer ">
                  <h1>Readmore</h1>
                  <ArrorIcon hexColor={"#4CAF4F"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:py-8 py-4">
        <div className="lg:p-10 px-6 py-8 flex flex-col justify-center items-center lg:w-[40%] mx-auto">
          <h1
            className="lg:text-[64px] text-[40px] text-[#263238] font-semibold text-center my-5"
            style={{ lineHeight: "76px" }}
          >
            Pellentesque suscipit fringilla libero eu.
          </h1>
          <Button>
            Get a Demo{" "}
            <span className="px-4">
              <ArrorIcon hexColor={"#ffff"} />
            </span>
          </Button>
        </div>
      </div>
    </>
  );
}
