import * as React from 'react';
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
  '/Paramedic.png',
  '/IMG_1.png',
  '/stetch_marks_coverage.png',
  '/stetch_marks_coverage_2.png',
  '/IMG_6.png',
  '/IMG_4.png',
  '/IMG_5.png',
];

const AboutServicesCard: React.FC = () => {
    return (
        <section className="flex flex-col items-center justify-center h-auto text-center text-black" style={{
            background: 'linear-gradient(90deg, hsla(139, 72%, 83%, 1) 0%, hsla(229, 89%, 62%, 1) 100%)'
        }}>
            <div className="min-h-screen flex flex-col lg:flex-row lg:items-center lg:space-x-10 space-y-10 lg:space-y-0 lg:pl-20 pt-10 sm:pt-10">
                <div className="lg:w-1/2 px-4 sm:px-8 lg:px-10">
                    <h1 className="text-3xl lg:text-4xl font-bold text-black">Paramedical Tattooing</h1>
                    <p className="py-6 text-sm lg:text-base text-black leading-relaxed lg:leading-relaxed">
                        Paramedical tattooing offers a life-changing solution for those aiming to improve the appearance of scars, stretch marks, or other skin imperfections. Our expert technicians employ advanced techniques, such as 3D areola reconstruction and radiation marker camouflage, to achieve natural-looking results that boost your confidence and well-being. Whether your goal is to conceal scars or restore skin color, our paramedical tattooing services are tailored to meet your specific needs.
                    </p>
                    <a href="#contact-section" className="mt-4 sm:mt-6 md:mt-8 bg-yellow-400 text-black py-2 px-4 rounded-lg shadow-lg transform transition hover:scale-105">Get Started</a>
                </div>
                <CarouselDApiDemo />
            </div>
        </section>
    );
};

export function CarouselDApiDemo() {
  const [api, setApi] = React.useState<CarouselApi>()

  React.useEffect(() => {
    if (!api) {
      return
    }

    api.on("select", () => {
      console.log("AboutServicesCard.tsx:", api.selectedScrollSnap() + 1)
    })
  }, [api])

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
                <img src={image} alt={`Slide ${index + 1}`} className="object-cover w-full sm:w-full md:w-2/3 lg:w-1/2 h-auto rounded-lg pb-10 sm:pb-0" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-5 sm:left-10 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-3 sm:p-2 cursor-pointer text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </CarouselPrevious>
        <CarouselNext className="absolute right-5 sm:right-10 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-3 sm:p-2 cursor-pointer text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </CarouselNext>
      </Carousel>
    </div>
  )
}

export default AboutServicesCard;
