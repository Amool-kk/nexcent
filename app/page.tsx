"use client";
import Image from "next/image";
import React from "react";
import CarouselAtom from "@/components/atoms/carousel";
import Nav from "@/components/atoms/nav";
import Hero from "@/components/atoms/hero";
import Client from "@/components/atoms/client";
import Body from "@/components/atoms/body";
import Footer from "@/components/atoms/footer";

export default function Home() {
  return (
    <div className="bg-[rgb(245,247,250)]">
      <Nav />
      <CarouselAtom />
      {/* <Hero /> */}
      <Client />
      <Body />
      <Footer />
    </div>
  );
}
