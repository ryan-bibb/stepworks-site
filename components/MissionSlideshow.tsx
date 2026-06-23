"use client"

import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

const photos = [
  { src: "/sw1.jpg", alt: "Stepworks facility" },
  { src: "/sw2.jpg", alt: "Stepworks facility" },
  { src: "/sw3.jpg", alt: "Stepworks facility" },
  { src: "/sw4.jpg", alt: "Stepworks facility" },
  { src: "/sw5.jpg", alt: "Stepworks facility" },
]

export default function MissionSlideshow() {
  return (
    <Carousel
      plugins={[Autoplay({ delay: 3500, stopOnInteraction: false })]}
      opts={{ loop: true }}
      className="w-full"
    >
      <CarouselContent>
        {photos.map((photo) => (
          <CarouselItem key={photo.src}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
