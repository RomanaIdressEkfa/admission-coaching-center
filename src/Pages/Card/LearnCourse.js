// style = {{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
// import Product from "../Card/Product";

// const LearnCourse = () => {
//     const [products, setProducts] = useState([]);
//     useEffect(() => {
//         fetch('data.json')
//             .then(res => res.json())
//             .then(data => setProducts(data));
//     }, [products]);

//     return (
//         <div className='' style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
//             <h1 className='text-5xl font-bold text-center m-2 text-error'>Manufactured Weapons</h1>
//             <Swiper
//                 effect={"coverflow"}
//                 grabCursor={true}
//                 centeredSlides={true}
//                 slidesPerView={"auto"}
//                 coverflowEffect={{
//                     rotate: 50,
//                     stretch: 0,
//                     depth: 100,
//                     modifier: 1,
//                     slideShadows: true,
//                 }}
//                 autoplay={{
//                     delay: 2500,
//                     disableOnInteraction: false,
//                 }}
//                 pagination={{
//                     clickable: true,
//                 }}
//                 modules={[Autoplay, Pagination, Navigation]}
//                 // modules={[EffectCoverflow, Pagination]}
//                 className="mySwiper"
//             >
//                 {
//                     products.slice(0, 6).map(product => <SwiperSlide> <Product key={product.name} product={product}>
//                     </Product></SwiperSlide>)
//                 }
//             </Swiper>
//         </div>
//     );
// };

// export default LearnCourse;


import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Product from "./Product";

const LearnCourse = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [products]);
    return (
        <div>
            <br />
            <h1 className="font-bold text-2xl ">এই কোর্স থেকে কি কি শিখতে পারবে:</h1>
            <br />
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                // modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {
                    products.map(product =>
                        <SwiperSlide><Product product={product}></Product></SwiperSlide>
                    )
                }

            </Swiper>
        </div>
    );
};

export default LearnCourse;
