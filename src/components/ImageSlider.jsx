import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar,A11y,Autoplay} from "swiper/modules"; 
import "swiper/css";
import { FaStar } from "react-icons/fa";
import "./ImageSlider.css";

const ImageSlider = ({ images }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      loop={true}
      breakpoints={{
        1024: {
          slidesPerView:3,
        },
        768:{
          slidesPerView:2,
        },
      }}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }} // Add autoplay settings

    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="slide h-[260px] bg-white p-2 sm:p-7  rounded-2xl">
            <div className="flex justify-between gap-[4rem] mt-4">
              <div className="flex gap-3">
                <img src={image.src} width={50} alt={`Slide ${index}`} />
                <div className="flex flex-col gap-1">
                  <h5 className="text-nowrap text-[14px] font-bold">{image.name}</h5>
                  <div className="flex text-yellow-400">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
              <div>
                <h6 className="text-nowrap text-[14px] sm:text-[16px] font-bold opacity-80"><span className="text-primaryColor font-bold">Invested:</span> {image.Invested}</h6>
                <h6 className="text-nowrap text-[14px] sm:text-[16px] font-bold opacity-80"><span className="text-primaryColor font-bold">Profit:</span> {image.Profit}</h6>
              </div>
            </div>
            <div className="mt-8">
              <span className="font-bold opacity-80">Review: </span>
              <span>{image.Review}</span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
