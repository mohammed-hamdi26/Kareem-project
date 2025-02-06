import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import EventItem from "./EventItem";
function EventsSection() {
  const swiper = useSwiper();

  return (
    <div className="flex">
      <Swiper
        ref={swiper}
        slidesPerView={1}
        modules={[Pagination, Scrollbar, A11y, Autoplay]}
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        autoplay={{ delay: 3000 }}
        loop
      >
        <SwiperSlide>
          <EventItem
            title={"Denshawai Incident"}
            info={
              "Mustafa Kamel Pasha was one of the strongest opponents of the Denshawai Incident in 1906, when Egyptian peasants were executed after a confrontation with British occupiers. Mustafa Kamel strongly condemned the brutal treatment by the British authorities and used the incident to raise national awareness in Egypt against British colonialism."
            }
            image={"/images/دنشواي.webp"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <EventItem
            title={"National Party"}
            info={
              "Mustafa Kamel Pasha founded the 'National Party' in 1907, aiming to achieve Egypt's independence from British occupation and promote the rights of Egyptians. He played a significant role in raising national awareness and fighting against colonialism through his speeches and written works."
            }
            image={"/images/الحزب الوطني.jpg"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <EventItem
            title={"Al-Liwaa Newspaper"}
            info={
              "Mustafa Kamel Pasha founded the newspaper 'Al-Liwaa' in 1900, which became a key platform for advocating national independence and resisting British occupation. He used the newspaper to spread his political ideas and encourage the Egyptian people to fight for freedom and independence."
            }
            image={"/images/جريدة اللواء.jpg"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button
      className="block px-4 py-2 bg-white text-white rounded"
      onClick={() => swiper.slideNext()}
    >
      Slide to the next slide
    </button>
  );
}

export default EventsSection;
