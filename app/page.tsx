"use client";
import Image from "next/image";
import React from "react";
import CarouselAtom from "@/components/atoms/carousel";
import Nav from "@/components/atoms/nav";
import Hero from "@/components/atoms/hero";
import Client from "@/components/atoms/client";
import Body from "@/components/atoms/body";

export default function Home() {
  return (
    <div className="bg-[#F5F7FA]">
      <Nav />
      <Hero />
      <Client />
      <Body />
      {/* <CarouselAtom /> */}
    </div>
  );
}
