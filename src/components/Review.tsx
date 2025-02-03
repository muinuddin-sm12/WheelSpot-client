import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaStar } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

import { Link } from "react-router-dom";

const reviewData = [
  {
    name: 'BMW i60 Sedan',
    rating: 5,
    message: 'The BMW i60 Sedan combines luxury with performance, offering a smooth ride and advanced technology features. Perfect for those who value style and comfort.',
    userName: 'John Doe',
    date: 'Feb 1, 2025',
  },
  {
    name: 'Tesla Model S',
    rating: 5,
    message: 'The Tesla Model S is an all-electric luxury sedan with cutting-edge technology, impressive range, and unparalleled acceleration. A game-changer in the EV market.',
    userName: 'Jane Smith',
    date: 'Jan 28, 2025',
  },
  {
    name: 'Audi A8',
    rating: 5,
    message: ' The Audi A8 is a flagship luxury sedan with a sleek design, premium interiors, and state-of-the-art driver assistance systems. Ideal for executives and enthusiasts alike.',
    userName: 'Alice Johnson',
    date: 'Jan 23, 2024',
  },
  {
    name: 'Mercedes-Benz S-Class',
    rating: 5,
    message: 'The Mercedes-Benz S-Class is the epitome of luxury, offering unparalleled comfort, advanced safety features, and a powerful engine. A true status symbol.',
    userName: 'Michael Brown',
    date: 'Jan 17, 2025',
  },
  {
    name: 'Lexus LS 500',
    rating: 4,
    message: 'The Lexus LS 500 is a luxury sedan that combines Japanese craftsmanship with modern technology. It offers a quiet, comfortable ride and exceptional reliability.',
    userName: 'Sarah Lee',
    date: 'Jan 1, 2025',
  },
]

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
      >
        <CarouselContent className="flex gap-2">
          {reviewData?.map((data, index) => (
            <CarouselItem
              key={index}
              className="basis-full md:basis-1/2 lg:basis-1/3"
            >
              <div className="pb-3">
                <div className="border shadow-sm rounded-lg">
                  <CardContent className="px-6 py-4">
                    <div>
                      <div>
                        <p>{data?.name}</p>
                        <span>*****</span>
                      </div>
                      <div>
                        <p>
                          {data?.message.slice(0, 100)}....
                        </p>
                      </div>
                      <div className="flex items-center gap-3  mt-3">
                        <div className="h-10 w-10 rounded-full bg-red-500"></div>
                        <div className="text-sm">
                          <p className="leading-none">{data?.userName}</p>
                          <small className="leading-none">{data?.date}</small>
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
