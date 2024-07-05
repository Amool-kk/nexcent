import Image from "next/image";
import React from "react";

export default function Client() {
  return (
    <div className="bg-white p-3" >
      <div className="my-6">
        <div className="mt-6 mb-10">
          <div className="text-[36px] text-center font-semibold">
            Our Clients
          </div>
          <p
            className="text-[#717171] text-[16px] font-normal text-center"
            role="heading"
          >
            We have been working with some Fortune 500+ clients
          </p>
        </div>
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 justify-center w-[75%]"
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
          <div className="text-[36px] text-center w-[75%] mx-auto font-semibold">
            Manage your entire community <br /> in a single system
          </div>
          <p
            className="text-[#717171] text-[16px] font-normal text-center"
            role="heading"
          >
            We have been working with some Fortune 500+ clients
          </p>
        </div>
        <div className="flex lg:flex-row sm:flex-col ">
          <div className="mx-auto my-3 " >
            <div className="w-[300px] flex flex-col items-center ">
              <Image src={"/Icon0.png"} alt="icon0" width={65} height={56} />
              <div className="text-[28px] text-[#4D4D4D] text-center mx-auto font-bold my-2 ">
                Membership Organisations
              </div>
              <p
                className="text-[#717171] text-[14px] font-normal text-center"
                role="heading"
              >
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
          </div>
          <div className="mx-auto my-3 " >
            <div className="w-[300px] flex flex-col items-center ">
              <Image src={"/Icon0.png"} alt="icon0" width={65} height={56} />
              <div className="text-[28px] text-[#4D4D4D] text-center mx-auto font-bold my-2 ">
                Membership Organisations
              </div>
              <p
                className="text-[#717171] text-[14px] font-normal text-center"
                role="heading"
              >
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
          </div>
          <div className="mx-auto my-3 " >
            <div className="w-[300px] flex flex-col items-center ">
              <Image src={"/Icon0.png"} alt="icon0" width={65} height={56} />
              <div className="text-[28px] text-[#4D4D4D] text-center mx-auto font-bold my-2 ">
                Membership Organisations
              </div>
              <p
                className="text-[#717171] text-[14px] font-normal text-center"
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
  );
}
