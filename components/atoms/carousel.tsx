"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import Hero, { Hero2 } from "./hero";

export default function CarouselAtom() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="flex justify-center items-center w-full">
      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full max-w-full flex-1"
      >
        <CarouselContent className="border-none">
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index} className="border-none">
              <Card className="border-none">
                <CardContent className="flex w-full items-center justify-center p-6 bg-[#F5F7FA] border-none">
                  {(index == 0 || index == 2) && <Hero />}
                  {index == 1 && <Hero2 />}
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
        <div className="py-2 text-center text-sm text-muted-foreground">
          {Array.from({ length: 3 }).map((_, index) => (
            <Button
              size="icon"
              className={
                "h-2 w-2 mx-1 rounded-full data-[active='false']:bg-[#4CAF4F]/30 data-[active='true']:bg-[#4CAF4F]"
              }
              data-active={index === current - 1}
            >
              {/* <span className="sr-only">slide {current} </span> */}
            </Button>
          ))}
        </div>
      </Carousel>
    </div>
  );
}
