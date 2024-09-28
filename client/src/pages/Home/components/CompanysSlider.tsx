import { Swiper, SwiperSlide } from "swiper/react";

//? logos
import netflix from "@/assets/home/companys_logo/netflix.svg";
import zapier from "@/assets/home/companys_logo/zapier.svg";
import spotify from "@/assets/home/companys_logo/spotify.svg";
import zoom from "@/assets/home/companys_logo/zoom.svg";
import amazon from "@/assets/home/companys_logo/amazon.svg";
import adobe from "@/assets/home/companys_logo/adobe.svg";
import notion from "@/assets/home/companys_logo/notion.svg";

//? swiper styles
import "swiper/css";

import { Autoplay } from "swiper/modules";
import { Divider } from "@nextui-org/react";

export default function CompanysSlider() {
  //? skip the divider slides
  const skipSlide = (swiper: any) => {
    const currentSlide = swiper.realIndex;

    if (currentSlide % 2) {
      swiper.slideTo(currentSlide + 1);
    }
  };

  return (
    <Swiper
      slidesPerView={"auto"}
      onSlideChange={(swiper) => skipSlide(swiper)}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="bg-white rounded-lg border-1 border-gray-100 !p-4
        [&>*]:!items-center [&>*]:!w-[calc((100%/3)-2rem)] select-none my-20 sm:my-32
          [&>*]:sm:!w-[calc((100%/7)-2.2rem)]
        "
    >
      <SwiperSlide className="">
        <img className="mx-auto" src={zapier} alt="zapier" />
      </SwiperSlide>
      <SwiperSlide className="!w-auto mx-5">
        <Divider orientation="vertical" className="h-20" />
      </SwiperSlide>
      <SwiperSlide className="">
        <img className="mx-auto" src={netflix} alt="netflix" />
      </SwiperSlide>
      <SwiperSlide className="!w-auto mx-5">
        <Divider orientation="vertical" className="h-20" />
      </SwiperSlide>
      <SwiperSlide className="">
        <img className="mx-auto" src={spotify} alt="spotify" />
      </SwiperSlide>
      <SwiperSlide className="!w-auto mx-5">
        <Divider orientation="vertical" className="h-20" />
      </SwiperSlide>
      <SwiperSlide className="">
        <img className="mx-auto" src={zoom} alt="zoom" />
      </SwiperSlide>
      <SwiperSlide className="!w-auto mx-5">
        <Divider orientation="vertical" className="h-20" />
      </SwiperSlide>
      <SwiperSlide className="">
        <img className="mx-auto" src={amazon} alt="amazon" />
      </SwiperSlide>
      <SwiperSlide className="!w-auto mx-5">
        <Divider orientation="vertical" className="h-20" />
      </SwiperSlide>
      <SwiperSlide className="">
        <img className="mx-auto" src={adobe} alt="adobe" />
      </SwiperSlide>
      <SwiperSlide className="!w-auto mx-5">
        <Divider orientation="vertical" className="h-20" />
      </SwiperSlide>
      <SwiperSlide className="">
        <img className="mx-auto" src={notion} alt="notion" />
      </SwiperSlide>
    </Swiper>
  );
}
