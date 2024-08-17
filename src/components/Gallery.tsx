import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const paramedicTreatments = [
  {
    name: "Olivia Chen",
    treatment: "Vitiligo Camouflage",
    testimonial:
      "The vitiligo camouflage treatment at this clinic has been life-changing. The pigmentation matches my natural tone perfectly, and I feel comfortable wearing short sleeves again.",
  },
  {
    name: "Marcus Roberts",
    treatment: "Burn Scar Camouflage",
    testimonial:
      "The burn scar camouflage treatment has given me a new lease on life. The texture and color matching are incredible, and most people can't even tell I had scars.",
  },
  {
    name: "Aisha Patel",
    treatment: "Stretch Mark Camouflage",
    testimonial:
      "The stretch mark camouflage treatment exceeded my expectations. The marks are now barely visible, and I feel confident in my body again.",
  },
  {
    name: "Liam O'Connor",
    treatment: "Acne Scar Camouflage",
    testimonial:
      "The acne scar camouflage treatment here has been miraculous. My skin looks smoother, and the scars are significantly less noticeable.",
  },
  {
    name: "Zara Mahmood",
    treatment: "Hypopigmentation Camouflage",
    testimonial:
      "The hypopigmentation camouflage treatment blended perfectly with my natural skin tone. The results look completely natural, and I feel like myself again.",
  },
  {
    name: "Tyler Nguyen",
    treatment: "Surgical Scar Camouflage",
    testimonial:
      "The surgical scar camouflage treatment has helped me move past my surgery. The scar is now barely noticeable, and I can confidently wear V-neck shirts again.",
  },
];

const ParamedicTreatmentCards: React.FC = () => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      console.log("Gallery.tsx:", api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section
      className="flex flex-col items-center justify-center h-auto py-20 sm:py-40 text-center"
      style={{
        background:
          "linear-gradient(90deg, hsla(210, 91%, 39%, 1) 0%, hsla(321, 55%, 50%, 1) 100%)",
      }}
    >
      {/* Title Section */}
      <div className="max-w-6xl mx-auto text-center pt-5 sm:pt-10 pb-10 sm:pb-20">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Trusted by <span className="text-pink-600">our clients</span> for
          exceptional paramedical tattoo treatments
        </h2>
      </div>

      {/* Carousel of Cards */}
      <div className="relative w-full max-w-5xl">
        <Carousel
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {paramedicTreatments.map((treatment, index) => (
              <CarouselItem
                key={index}
                className="basis-full md:basis-1/2 lg:basis-1/2 flex justify-center"
              >
                <div className="p-6 h-full w-full max-w-sm mx-auto">
                  <Card className="w-full h-full bg-white p-8 shadow-md flex flex-col">
                    <CardHeader className="pb-4">
                      <div className="flex flex-col items-center">
                        <img
                          className="w-16 h-16 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 mb-4"
                          src="https://github.com/shadcn.png"
                          alt="Bordered avatar"
                        />
                        <CardTitle className="text-2xl mt-2 text-center">
                          {treatment.name}
                        </CardTitle>
                        <CardDescription className="text-lg mb-2 text-center">
                          {treatment.treatment}
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-4 flex-grow flex flex-col justify-between">
                      <p className="text-base text-gray-500 text-center">
                        {treatment.testimonial}
                      </p>
                      <div className="flex justify-center mt-4">
                        {/* Fixed 5 Star Rating */}
                        <div className="rating rating-md">
                          <input
                            type="radio"
                            className="mask mask-star-2 bg-orange-400"
                            defaultChecked
                            disabled
                          />
                          <input
                            type="radio"
                            className="mask mask-star-2 bg-orange-400"
                            defaultChecked
                            disabled
                          />
                          <input
                            type="radio"
                            className="mask mask-star-2 bg-orange-400"
                            defaultChecked
                            disabled
                          />
                          <input
                            type="radio"
                            className="mask mask-star-2 bg-orange-400"
                            defaultChecked
                            disabled
                          />
                          <input
                            type="radio"
                            className="mask mask-star-2 bg-orange-400"
                            defaultChecked
                            disabled
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 sm:left-5 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-3 sm:p-2 cursor-pointer text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 19l-7-7 7-7M19 19l-7-7 7-7"
              />
            </svg>
          </CarouselPrevious>
          <CarouselNext className="absolute right-2 sm:right-5 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-3 sm:p-2 cursor-pointer text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 19l7-7-7-7m14 14l-7-7 7-7"
              />
            </svg>
          </CarouselNext>
        </Carousel>
      </div>
    </section>
  );
};

export default ParamedicTreatmentCards;
