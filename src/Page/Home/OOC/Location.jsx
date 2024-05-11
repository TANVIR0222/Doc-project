import { MdCall, MdLocationOn, MdOutlineAccessTime } from "react-icons/md";

const Location = () => {
  return (
    <div className="flex gap-16">
        {/* opening oure */}
        <div className="card w-96  h-56 bg-[#07332F] ">
      <div className="card-body">
        <div className="flex gap-5 my-5">
          <div className="text-5xl">
            <MdOutlineAccessTime />
          </div>
          <div>
                <h1 className="text-4xl">Opening Hours</h1>
                <h3 className="text-xl my-3">Open 9.00 am to 5.00pm Everyday</h3>
          </div>
        </div>
      </div>
    </div>
        {/*  Location */}
        <div className="card w-96 text-white h-56 bg-[#F7A582] ">
      <div className="card-body">
        <div className="flex gap-5 my-5">
          <div className="text-5xl">
            <MdLocationOn />
          </div>
          <div>
                <h1 className="text-4xl">Our Locations</h1>
                <h3 className="text-xl my-3">Dhanmondi 17, Dhaka -1200, Bangladesh</h3>
          </div>
        </div>
      </div>
    </div>
        {/*  contact  */}
        <div className="card w-96  h-56 bg-[#07332F] ">
      <div className="card-body">
        <div className="flex gap-5 my-5">
          <div className="text-5xl">
            <MdCall />
          </div>
          <div>
                <h1 className="text-4xl">Contact Us </h1>
                <h3 className="text-xl my-3">+88 01750 00 00 00 <br />+88 01750 00 00 00</h3>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Location;
