import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Image URLs
const images = [
  "/img_1.png",
  "/img_10.png",
  "/img_11.png",
  "/img_3.png",
  "/img_4.png",
  "/img_5.png",
  "/img_6.png",
  "/img_7.png",
  "/img_8.png",
  "/img_9.png",
];

const AboutServicesCard: React.FC = () => {
  return (
    <section
      className="flex flex-col items-center justify-center h-auto text-center text-black"
      style={{
        backgroundImage:
          "linear-gradient(90deg, hsla(321, 55%, 50%, 1) 0%, hsla(210, 91%, 39%, 1) 100%)",
      }}
    >
      <div className="min-h-screen flex flex-col lg:flex-row lg:items-center lg:space-x-10 space-y-10 lg:space-y-0 lg:pl-20 pt-10 sm:pt-10">
        <div className="lg:w-1/2 px-4 sm:px-8 lg:px-10">
          <h1 className="text-3xl lg:text-4xl font-bold text-white">
            Scalp Micropigmentation Hairlines (SMP)
          </h1>
          <p className="py-6 text-sm lg:text-base text-white leading-relaxed lg:leading-relaxed">
            Experience the transformative power of Scalp Micropigmentation (SMP)
            for creating natural, defined hairlines that enhance your
            appearance. Our skilled technician uses advanced techniques to
            replicate the look of real hair follicles, providing a non-invasive,
            long-lasting solution for hair loss. Whether you're dealing with a
            receding hairline, thinning hair, or complete baldness, our SMP
            treatments are designed to restore your confidence and give you the
            youthful, well-groomed look you desire.
          </p>
          <a
            href="#contact-section"
            className="mt-4 sm:mt-6 md:mt-8 bg-yellow-400 text-black py-2 px-4 rounded-lg shadow-lg transform transition hover:scale-105"
          >
            Get Started
          </a>
        </div>
        <CarouselDApiDemo />
      </div>
    </section>
  );
};

export function CarouselDApiDemo() {
  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      console.log("AboutServicesCard.tsx:", api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="relative w-full px-4 sm:px-8 lg:w-2/3 xl:w-3/4 lg:pl-10">
      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className="w-full h-full"
      >
        <CarouselContent className="h-full">
          {images.map((image, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="w-full h-full p-1 flex items-center justify-center">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="object-cover w-full sm:w-full md:w-2/3 lg:w-1/2 h-auto rounded-lg pb-10 sm:pb-0"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-5 sm:left-10 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-3 sm:p-2 cursor-pointer text-white">
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </CarouselPrevious>
        <CarouselNext className="absolute right-5 sm:right-10 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-3 sm:p-2 cursor-pointer text-white">
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
              d="M9 5l7 7-7 7"
            />
          </svg>
        </CarouselNext>
      </Carousel>
    </div>
  );
}

export default AboutServicesCard;
