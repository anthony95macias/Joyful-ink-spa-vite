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

const smpReviews = [
  {
    name: "James Turner",
    treatment: "Advanced Hairline Design",
    testimonial:
      "The Advanced Hairline Design service completely changed my look. The technician’s precision and artistic eye created a natural, youthful hairline that blends seamlessly with my remaining hair. I'm absolutely thrilled with the outcome!",
  },
  {
    name: "Emily Davis",
    treatment: "Full Scalp Coverage",
    testimonial:
      "I opted for Full Scalp Coverage, and it was the best decision I ever made. The technician's expertise was evident from the start, and the results are stunning. My scalp looks completely covered, and I feel more confident going out without a hat.",
  },
  {
    name: "Michael Lee",
    treatment: "Temple Restoration",
    testimonial:
      "The Temple Restoration service was incredible. The technician carefully matched the pigmentation to my natural hair color, and now my temples look fuller and more defined. It’s like turning back the clock on hair loss.",
  },
  {
    name: "Sarah Johnson",
    treatment: "Micro Density Treatment",
    testimonial:
      "The Micro Density Treatment added volume to my thinning hair areas in a way that looks natural and realistic. The technician was incredibly skilled and made me feel comfortable throughout the process. I feel like I have my old hair back!",
  },
  {
    name: "David Brown",
    treatment: "Hairline Enhancement",
    testimonial:
      "I chose Hairline Enhancement to refine my existing hairline, and I’m amazed at how natural it looks. The technician’s detailed approach and careful planning resulted in a perfect blend with my natural hair. I couldn’t be happier!",
  },
  {
    name: "Sophia Martinez",
    treatment: "Scar Concealment SMP",
    testimonial:
      "The Scar Concealment SMP was a lifesaver. The technician skillfully blended the pigmentation with my existing hair, making my scars practically disappear. The results are incredibly realistic, and I’m so pleased with the outcome.",
  },
];

const SmpTreatmentCards: React.FC = () => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      console.log("SmpTreatmentCards.tsx:", api.selectedScrollSnap() + 1);
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
        <h2 className="text-3xl font-extrabold text-white">
          Trusted by <span className="text-yellow-300">our clients</span> for
          exceptional SMP treatments by a skilled technician
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
            {smpReviews.map((review, index) => (
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
                          {review.name}
                        </CardTitle>
                        <CardDescription className="text-lg mb-2 text-center">
                          {review.treatment}
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-4 flex-grow flex flex-col justify-between">
                      <p className="text-base text-gray-500 text-center">
                        {review.testimonial}
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

export default SmpTreatmentCards;
