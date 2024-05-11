import { Rating } from "@smastrom/react-rating";
import { MdLocationOn } from "react-icons/md";
import { useLoaderData } from "react-router-dom";

const DoctorProfile = () => {
  const data = useLoaderData();
  const {
    first_name,
    image_url,
    location,
    rating,
    academic_status,
  } = data;
  return (
    <div>
      <div className="card text-start my-10 min-h-96 bg-yellow-50 mx-auto max-w-screen-lg card-side  shadow-xl">
        <figure>
          <img className="p-5 min-h-72	max-w-60	"
            src={image_url}
            alt="Movie"
          />
        </figure>
        <div className="my-16 mx-10 text-start text-black">
            <h1 className="text-3xl py-2">Dr.{first_name} </h1>
            <h3 className="text-xl">{academic_status}</h3>
            <Rating
                style={{ maxWidth: 100 }}
                value={rating}
                readOnly
            />
            <div className="my-2 flex gap-1">
                <MdLocationOn className="text-xl text-orange-500"></MdLocationOn>
                <p>{location} - <span className="text-orange-300"> Get Directions</span> </p>
            </div>
            <div className="my-10 gap-6 ">
                <button className="btn btn-outline">Dental Filling</button>
                <button className="btn btn-outline mx-6">Teeth Whitneing</button>

            </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
