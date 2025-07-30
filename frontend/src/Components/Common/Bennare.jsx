import slider1 from '../../assets/slider-1.png'
import slider2 from '../../assets/slider-2.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion";
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { useRef,useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
const slides = [
    {
        img: slider1,
        title: "Fresh Vegetables",
        subtitle: "Big discount",
    },
    {
        img: slider2,
       title: "Fresh Vegetables",
        subtitle: "Big discount",
    },
];
function Bennare() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <>
            <div className="container mx-auto h-[100vh] py-20">
                <div className="w-[100%]  bg-blue-100 rounded-xl relative group  mx-auto overflow-hidden">
                    <button
                        ref={prevRef}
                        className="cursor-pointer absolute top-1/2 -left-10 z-10 transform -translate-y-1/2 text-black bg-white rounded-full p-2 opacity-0 group-hover:left-2 group-hover:opacity-100 transition-all duration-200"
                    >
                        <FaArrowLeft size={20} />
                    </button>
                    <button
                        ref={nextRef}
                        className="cursor-pointer absolute top-1/2 z-10 transform -translate-y-1/2 text-black bg-white -right-5  rounded-full p-2 opacity-0 group-hover:right-2 group-hover:opacity-100 transition-all duration-200"
                    >
                        <FaArrowRight size={20} />
                    </button>

                    <Swiper
                        className="mySwiper"
                        modules={[EffectFade, Navigation, Pagination]}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        spaceBetween={30}
                        effect={'fade'}
                        pagination={{
                            clickable: true,
                        }}
                        onInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }}
                        // speed={100}
                        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative w-full h-[480px]">
                                    <img src={slide.img} className="w-full h-full object-cover " />
                                </div>
                                {/* Animated text content with unique key */}
                                {index === activeIndex && (
                                    <motion.div
                                        key={activeIndex} // re-triggers animation
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8 }}
                                        className="absolute top-1/5 px-10 left-10 text-left "
                                    >
                                        
                                        <motion.h2
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4 }}
                                            className="text-[45px] font-bold my-2 text-black"
                                        >
                                            {slide.title}
                                            <p>{slide.subtitle}</p>
                                        </motion.h2>
                                        <motion.p
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                            className="text-black text-lg"
                                        >
                                            Save up to 50% off on your first order
                                        </motion.p>
                                        
                                        <motion.button
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.8 }}
                                            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                                        >
                                            SHOP NOW
                                        </motion.button>
                                    </motion.div>
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Bennare