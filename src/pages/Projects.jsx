import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import TitleComponent from '../components/Title';
import projects from '../components/projects'

export default function ProjectCarousel() {
  return (
    <div className="text-white px-6 mt-20">
      <TitleComponent title="Projects" />
      <Swiper
        modules={[EffectCoverflow, Navigation, Pagination]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        initialSlide={1}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        navigation
        pagination={{ clickable: true }}
        className="max-w-6xl mt-10"
        breakpoints={{
          320: {
            slidesPerView: 1, spaceBetween: 20,
          },
          640: {
            slidesPerView: 2, spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3, spaceBetween: 5,
          },
        }}
      >
        {
          projects.map((project) => (
            <SwiperSlide key={project.title}>
              <div className="bg-olive-700 rounded-lg shadow-lg p-6 text-center mb-10">
                <img src={project.img} alt="" />
                <h3 className="text-xl font-bold m-3">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                <div className="flex justify-center flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-orange-400 text-black text-xs px-1 py-1 rounded-full"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center gap-4">
                  {!!project.demo && <a href={project.demo} target="_blank" className="text-orange-400 text-xs border rounded px-2 py-1 hover:text-orange-600">
                    Live Demo
                  </a>}
                  {!!project.code && <a href={project.code} className="text-orange-400 text-xs border rounded px-2 py-1 hover:text-orange-600">
                    View Code
                  </a>}
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div >
  );
}
