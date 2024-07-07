import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

export default function Client() {
  return (
    <div className="bg-white dark:bg-[#263238] p-6 lg:p-10">
      <div>
        <div className="my-6">
          <div className="mt-6 mb-10">
            <div className="text-[36px] text-center font-semibold  dark:text-white">
              Our Clients
            </div>
            <p
              className="text-[#717171] dark:text-[rgba(255,255,255,0.7)] text-[16px] font-normal text-center"
              role="heading"
            >
              We have been working with some Fortune 500+ clients
            </p>
          </div>
          <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 justify-center lg:w-[75%]"
            style={{ margin: "auto" }}
          >
            {Array.from({ length: 7 }).map((_, index) => (
              <div key={`client${index}`} className="flex justify-center">
                <Image
                  src={`/clients/client${index}.png`}
                  alt={`client${index}`}
                  width={40}
                  height={40}
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="my-10">
            <div className="text-[36px] text-center lg:w-[75%] mx-auto font-semibold dark:text-white">
              Manage your entire community <br /> in a single system
            </div>
            <p
              className="text-[#717171] text-[16px] font-normal text-center dark:text-[rgba(255,255,255,0.7)]"
              role="heading"
            >
              Who is Nextcent suitable for?
            </p>
          </div>
          <div className="flex lg:flex-row flex-col ">
            <div className="mx-auto my-3 ">
              <div className="w-[300px] flex flex-col items-center ">
                <Image src={"/Icon0.png"} alt="icon0" width={65} height={56} />
                <div className="text-[28px] dark:text-[rgba(255,255,255,0.7)] text-[#4D4D4D] text-center mx-auto font-bold my-2 ">
                  Membership Organisations
                </div>
                <p
                  className="text-[#717171] text-[14px] font-normal text-center dark:text-[rgba(255,255,255,0.5)] "
                  role="heading"
                >
                  Our membership management software provides full automation of
                  membership renewals and payments
                </p>
              </div>
            </div>
            <div className="mx-auto my-3 ">
              <div className="w-[300px] flex flex-col items-center ">
                <Image src={"/Icon1.png"} alt="icon0" width={65} height={56} />
                <div className="text-[28px] dark:text-[rgba(255,255,255,0.7)] text-[#4D4D4D] text-center mx-auto font-bold my-2 ">
                  National Associations
                </div>
                <p
                  className="text-[#717171] text-[14px] font-normal text-center dark:text-[rgba(255,255,255,0.5)] "
                  role="heading"
                >
                  Our membership management software provides full automation of
                  membership renewals and payments
                </p>
              </div>
            </div>
            <div className="mx-auto my-3 ">
              <div className="w-[300px] flex flex-col items-center ">
                <Image src={"/Icon2.png"} alt="icon0" width={65} height={56} />
                <div className="text-[28px] dark:text-[rgba(255,255,255,0.7)] text-[#4D4D4D] text-center mx-auto font-bold my-2 ">
                  Clubs And Groups
                </div>
                <p
                  className="text-[#717171] text-[14px] font-normal text-center dark:text-[rgba(255,255,255,0.5)] "
                  role="heading"
                >
                  Our membership management software provides full automation of
                  membership renewals and payments
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-12 mt-12 lg:w-[65%] mx-auto lg:flex items-center justify-center dark:text-white">
        <div className="lg:flex-1">
          <Image src={"/rafiki.png"} alt="rafiki" width={442} height={433} />
        </div>
        <div className="lg:flex-1">
          <h1 className="text-[36px] text-[#4D4D4D] font-semibold dark:text-white">
            The unseen of spending three years at Pixelgrade
          </h1>
          <p className="text-[14px] text-[#717171] dark:text-[rgba(255,255,255,0.7)] my-5 font-normal">
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
  );
}
