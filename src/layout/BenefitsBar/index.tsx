// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";
import { useAppSelector } from "../../redux/store";

const BenefitsBar = () => {
  const benefits = [
    "Criativo",
    "Inovação",
    "Original",
    "Resultado",
    "Conversão",
    "Criativo",
    "Inovação",
    "Original",
    "Resultado",
    "Conversão",
  ];

  const { isMobile } = useAppSelector((state) => state.deviceSize);

  return (
    <div className="h-[96px] sm:h-[128px] w-full bg-primary_hover text-white relative">
      <div className="bg-benefits-linear w-[30px] sm:w-[100px] h-full absolute top-0 left-0 z-10"></div>
      <Swiper
        spaceBetween={50}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={isMobile ? 2: 5}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper flex items-center h-full"
      >
        {benefits.map((item, key) => (
          <SwiperSlide key={key} className="flex items-center gap-4">
            <div className="rounded-full bg-white h-4 w-4"></div>
            <span className="text-3xl sm:text-5xl font-title">{item}</span>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="bg-benefits-linear w-[30px] sm:w-[100px] h-full absolute top-0 right-0 rotate-180 z-10"></div>
    </div>
  );
};

export default BenefitsBar;
