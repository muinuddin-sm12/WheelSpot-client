/* eslint-disable @typescript-eslint/no-explicit-any */
import { CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Rate } from "antd";
import { useGetAllReviewsQuery } from "@/redux/features/review/reviewApi";
import { MdKeyboardArrowRight } from "react-icons/md";

import { Link } from "react-router-dom";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  Key,
} from "react";

const Review = () => {
  const { data, isLoading } = useGetAllReviewsQuery(undefined);
  if (isLoading) {
    return <p className="text-center text-sm">Loading...</p>;
  }
  return (
    <div className="px-6 md:px-12 lg:px-20 pb-16">
      <div className="flex items-center justify-between mb-6 w-full">
        <h1 className="text-3xl font-medium mb-6">Reviews</h1>
        <div>
          <Link
            to={"/review"}
            className="uppercase flex items-center text-[#D32F2F] text-sm font-medium "
          >
            write a review <MdKeyboardArrowRight className="text-xl" />
          </Link>
        </div>
      </div>
      <div className="px-8 lg:px-12">
        <Carousel
          opts={{
            align: "start",
          }}
        >
          <CarouselContent className="flex gap-2">
            {data?.data?.map(
              (
                data: {
                  carName:
                    | string
                    | number
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | null
                    | undefined;
                  rating: number | undefined;
                  review: string | any[];
                  image: string | undefined;
                  customerName:
                    | string
                    | number
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | null
                    | undefined;
                  date:
                    | string
                    | number
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | null
                    | undefined;
                },
                index: Key | null | undefined
              ) => (
                <CarouselItem
                  key={index}
                  className="basis-full  select-none md:basis-1/2 lg:basis-1/3"
                >
                  <div className="pb-3">
                    <div className="border shadow-sm rounded-lg">
                      <CardContent className="px-6 py-4 min-h-[200px]">
                        <div className="flex flex-col justify-between">
                          <div>
                            <div>
                              <p>{data?.carName}</p>
                              <Rate
                                className="text-sm"
                                defaultValue={data?.rating}
                                disabled
                              />
                            </div>
                            <div>
                              <p className="text-sm ">
                                {data?.review?.slice(0, 100)}....
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3  mt-3">
                            <div className="h-10 w-10 overflow-hidden rounded-full bg-red-500">
                              <img
                                className="w-full h-full object-cover"
                                src={data?.image}
                                alt=""
                              />
                            </div>
                            <div className="text-sm">
                              <p className="leading-none">
                                {data?.customerName}
                              </p>
                              <small className="leading-none">
                                {data?.date}
                              </small>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </CarouselItem>
              )
            )}
          </CarouselContent>
          <CarouselPrevious className="hover:bg-[#D32F2F] hover:text-white" />
          <CarouselNext className="hover:bg-[#D32F2F] hover:text-white" />
        </Carousel>
      </div>
    </div>
  );
};

export default Review;
