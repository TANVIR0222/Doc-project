import './banner.css'
import banner from '../../../assets/Banner/beautiful-young-female-doctor-looking-camera-office.png'
const Banner = () => {
    return (
        <div className='banner poppins-regular'>
            <div className='banner_img 	 text-end'>  
             <img  src={banner} alt="" />
            </div>
            <div className='px-11 -mt-36 text-green-50'>

                <h1 className="text-6xl text-start mx-auto ">Your Best Medical <br /> Help Center</h1>
                <p className='mt-5'>Lorem Ipsum is simply dummy text they are printing typesetting <br /> has been the industry’s stardard.</p>
                <button className='btn mt-5 text-gray-50 bg-[#F7A582]'>All Service</button>

            </div>
        </div>
    );
};

export default Banner;