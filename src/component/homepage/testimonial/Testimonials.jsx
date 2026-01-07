// components/Testimonials.jsx
import Header from "../../reusable/Header";
import TestimonialCard from "./TestimonialCard";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const Testimonials = ({ testimonials = [] }) => {
  // Default fallback data
  const defaultTestimonials = [
    {
      review:
        "Roarse has transformed our freight operations. The AI matching system saved us 30% on shipping costs significantly.",
      author: "John Freak",
      rating: 5,
    },
    {
      review:
        "Roarse has transformed our freight operations. The AI matching system saved us 30% on shipping costs significantly.",
      author: "John Freak",
      rating: 4.5,
    },
    {
      review:
        "Roarse has transformed our freight operations. The AI matching system saved us 30% on shipping costs significantly.",
      author: "John Freak",
      rating: 5,
    },
    {
      review:
        "Excellent platform! Real-time tracking and AI route optimization have streamlined our logistics completely.",
      author: "Sarah Miller",
      rating: 5,
    },
    {
      review:
        "Best freight solution we've used. The load matching is incredibly accurate and fast.",
      author: "David Chen",
      rating: 4.5,
    },
  ];

  const data = testimonials.length > 0 ? testimonials : defaultTestimonials;

  return (
    <section className="bg-white py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <Header
          title="What Our Users Say"
          subTitle="Trusted by thousands of shippers and carriers worldwide"
        />

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={32}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          loop={true}
          autoplay={{
            delay: 3000,        // 3 seconds per slide
            disableOnInteraction: false,
            pauseOnMouseEnter: true, // Optional: pause on hover
          }}
          speed={800} // Smooth transition
          className="mt-12"
        >
          {data.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="px-4">
                <TestimonialCard
                  review={testimonial.review}
                  author={testimonial.author}
                  rating={testimonial.rating || 5}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;