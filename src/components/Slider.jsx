import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules'; 

const Slider = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await axios.get('https://pekplastic.emilmaharramov.com/wp-json/wp/v2/slider')
        .then(res => {
          const formattedSlides = res.data.map(slide => {
            const content = slide.content.rendered;

            const parser = new DOMParser();
            const doc = parser.parseFromString(content, 'text/html');
            const imgElement = doc.querySelector('img');
            
            return {
              title: slide.title.rendered,
              image: imgElement ? imgElement.src : null,
            };
          });
          setSlides(formattedSlides);
        });
    }
    fetchData();
  }, []);

  return (
    <Swiper
      pagination={{ dynamicBullets: true }}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      modules={[Pagination, Autoplay]}
      className="mySwiper h-[50vh] md:h-[75vh]"
    >
      {slides.slice().reverse().map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-full">
            <img src={slide.image} alt={`slide-${index}`} className="object-cover w-full h-full" />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-start p-8 md:p-16" 
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration="700">
              <h2 className="text-white text-2xl md:text-4xl font-bold">{slide.title}</h2>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
