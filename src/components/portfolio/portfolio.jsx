import  {React} from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import "./portfolio.css"
import "swiper/css";
const Portfolio = () => {
     return (
       <div className="portfolio" id="Portfolio">
         {/* heading */}
         <span>Recent Projects</span>
         <span>Portfolio</span><br/><br/>
   
         {/* slider */}
         <Swiper
           spaceBetween={70}
           slidesPerView={4}
           grabCursor={true}
           className="portfolio-slider"
         >
          
           <SwiperSlide>
           <img src={require("../../img/sidebar.jpg")} height={180} />
           </SwiperSlide>
           <SwiperSlide>
           <img src={require("../../img/green.jpg")} height={180} />
           </SwiperSlide>
           <SwiperSlide>
           <img src={require("../../img/f1.jpg")} height={180} />
           </SwiperSlide>
           <SwiperSlide>
           <img src={require("../../img/f2.jpg")} height={180} />
           </SwiperSlide>
           <SwiperSlide>
           <img src={require("../../img/f3.jpg")} height={180} />
           </SwiperSlide>
           <SwiperSlide>
           <img src={require("../../img/hoc.jpg")} height={180} />
           </SwiperSlide>
           <SwiperSlide>
           <img src={require("../../img/singnup.jpg")} height={170} />
           </SwiperSlide>
           <SwiperSlide>
           <img src={require("../../img/bnk.jpg")} height={170} />
           </SwiperSlide>
           
           <SwiperSlide>
           <img src={require("../../img/Ecommerce.jpg")} height={170} />
           </SwiperSlide>
         </Swiper>
       </div>
     );
   };

   export default Portfolio;