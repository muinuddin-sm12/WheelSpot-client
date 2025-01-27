import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MdKeyboardArrowRight } from "react-icons/md";

import { Link } from "react-router-dom";

const Review = () => {
  return (
    <div className="px-6 md:px-12: lg:px-20">
      <div className="flex items-center justify-between mb-4 w-full mt-12">
        <h1 className="text-xl font-medium">User Review</h1>
        <div>
          <Link
            to={"/"}
            className="uppercase flex items-center text-[#D32F2F] text-sm font-medium "
          >
            write a review <MdKeyboardArrowRight className="text-xl"/>
          </Link>
        </div>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className=""
      >
        <CarouselContent className="flex gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="basis-full md:basis-1/2 lg:basis-1/3"
            >
              <div className="pb-3">
                <div className="border shadow-sm rounded-lg">
                  <CardContent className="px-6 py-4">
                    <div>
                      <div>
                        <p>BMW i60 Sedan</p>
                        <span>******</span>
                      </div>
                      <div>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Accusamus, temporibus dolor, deserunt error
                          tempore nulla qui....
                        </p>
                      </div>
                      <div className="flex items-center gap-3  mt-3">
                        <div className="h-10 w-10 rounded-full bg-red-500"></div>
                        <div className="text-sm">
                          <p className="leading-none">Nusrat</p>
                          <small className="leading-none">Jan 12,2025</small>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hover:bg-[#D32F2F] hover:text-white"/>
        <CarouselNext className="hover:bg-[#D32F2F] hover:text-white"/>
      </Carousel>
    </div>
  );
};

export default Review;
