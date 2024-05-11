import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { BiDollar } from 'react-icons/bi';
// import moment from 'moment';
import { MdCalendarToday, MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';

const DoctorCard = ({ info }) => {
    const { _id ,first_name, image_url, specialty,rating , location , date , pament} = info;
  return (
    
    <div>
        {/* {moment().format('MMMM Do YYYY, h:mm:ss a')} */}
      <div className="card w-96  bg-base-100  bg-fixed">
        <figure className="px-10 pt-10">
          <img
            src={image_url}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body p-5 ">
          <h2 className="text-3xl">{first_name}</h2>
          <p>BTP-{specialty}</p>
            <Rating
                style={{ maxWidth: 100 }}
                value={rating}
                readOnly
            />
            <div className="divider divider-accent"></div>
            {/* Location */}
              <div className='flex gap-4 text-center'>
                  <div className='text-2xl'>
                      <MdLocationOn/>
                  </div>
                  <div>
                      <p>{location}</p>
                  </div>
              </div>
            {/* date  */}
            <div className='flex gap-4 text-center'>
                <div className='text-2xl'>
                     <MdCalendarToday></MdCalendarToday>
                </div>
                <div>
                    <p>{date}</p>
                </div>
            </div>
            {/* price */}
            <div className='flex gap-4 text-center'>
                <div className='text-2xl'>
                    <BiDollar />
                </div>
                <div>
                    <p>${pament}</p>
                </div>
            </div>
            <Link to={`/dprofile/${_id}`} ><button className='btn w-full border-2 border-green-400 bg-[#F7A582] text-white '>View Profile</button></Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
