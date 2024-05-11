import "swiper/css";
import {
  Autoplay,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import axios from "axios";
import SectiomTitle from "../../../component/SectionTitle/SectiomTitle";
import { FaQuoteLeft } from "react-icons/fa";

const Patients = () => {
  const [inFo, setinFo] = useState([]);
  axios.get("http://localhost:5000/info").then((res) => {
    setinFo(res.data);
  });

  return (
    <div>
      <SectiomTitle
        heading={"What Our Patients Says"}
        subHeading={
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        }
      ></SectiomTitle>

      <section className="w-full bg-white rounded-sm  ">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          autoplay={true}
          keyboard={true}
          modules={[Navigation, Autoplay, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {inFo.map((data) => (
            <SwiperSlide key={data.id}>
              <div className=" flex flex-col items-center  text-black  rounded-xl my-16 mx-24">
                <div className="flex relative p-5 gap-4">
                  <div className="w-24 h-20 items-start rounded">
                    <img src={data.image_url} />
                  </div>
                  <div>
                    <h1 className="text-3xl">{data.first_name}</h1>
                    <p>{data.specialty}</p>
                  </div>
                  <FaQuoteLeft className="text-2xl mx-20 text-orange-300" ></FaQuoteLeft>

                </div>
                <p className="text-wrap text-center w-1/2">{data.deatils}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Patients;
