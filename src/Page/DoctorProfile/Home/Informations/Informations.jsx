import { useState } from "react";
import Location from "../Location/Location";

const Informations = () => {
  const [next, setnext] = useState(1);

  const handleMinSlider = (id) => {
    setnext(id);
  };

  return (
    <div>
      <div className=" text-black max-h-full mx-auto my-10 rounded-md	 bg-white w-full">
        <div className="gap-6 ">
          <input
            onClick={() => handleMinSlider(1)}
            className="btn mx-7  text-white bg-[#f4733c] my-5 p-4  border-none w-1/5"
            name="options"
            type="radio"
            aria-label="Overview"
          />
          <input
            onClick={() => handleMinSlider(2)}
            className="btn mx-7  text-white bg-[#f4733c] my-5 p-4  border-none w-1/5"
            name="options"
            type="radio"
            aria-label="Locations"
          />
          <input
            onClick={() => handleMinSlider(3)}
            className="btn mx-7  text-white bg-[#f4733c] my-5 p-4  border-none w-1/5"
            name="options"
            type="radio"
            aria-label="Reviews"
          />
          <input
            onClick={() => handleMinSlider(4)}
            className="btn mx-7  text-white bg-[#f4733c] my-5 p-4  border-none w-1/5"
            name="options"
            type="radio"
            aria-label="Business Hours"
          />
        </div>
        <div className="divider divider-accent"></div>
        <div className= {next === 1 ? 'show' : 'hidden'}>
          <h1 className="text-2xl my-3 mx-4">About Me</h1>
          <p className="w-9/12 my-2	mx-4 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="flex gap-32 p-9">
            <div>
              <h1 className="text-xl mb-7">Education</h1>
              <div className="mx-5">
                <li>American Dental Medical University</li>
                <div className="mx-5">
                  <p>BDS</p>
                  <p>1998 - 2003</p>
                </div>
                <li>American Dental Medical University</li>
                <div className="mx-5">
                  <p>BDS</p>
                  <p>1998 - 2005</p>
                </div>
              </div>
              <h1 className="text-xl my-6">Work & Experience</h1>
              <div className="mx-5">
                <li>Glowing Smiles Family Dental Clinic</li>
                <p className="mx-5">2010 - Present (5 years)</p>
                <li>Comfort Care Dental Clinic</li>
                <p className="mx-5">2007 - 2010 (3 years)</p>
                <li>Dream Smile Dental Practice</li>
                <p className="mx-5">2005 - 2007 (2 years)</p>
              </div>
              <h1 className="text-xl my-6">Services</h1>
              <div className="mx-5">
                <div className="mx-5">
                  <li>Tooth cleaning</li>
                  <li>Root Canal Therapy</li>
                  <li>Implants</li>
                  <li>Composite Bonding</li>
                  <li>Fissure Sealants</li>
                  <li>Surgical Extractions</li>
                </div>
              </div>
            </div>
            {/* second */}

            <div>
              <div>
                <h1 className="text-xl mb-7">Awards</h1>
                <p className="mx-7">July 2019</p>
                <div className="mx-2">
                  <li className="text-md">Humanitarian Award</li>
                  <p className="mx-4 my-2 mb-7">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin a ipsum tellus. <br />
                    Interdum et malesuada fames ac ante ipsum primis in
                    faucibus.
                  </p>
                </div>
              </div>
              <div>
                <p className="mx-7">March 2011</p>
                <div className="mx-2">
                  <li className="text-md">
                    Certificate for International Volunteer Service
                  </li>
                  <p className="mx-4 my-2 mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin a ipsum tellus. <br />
                    Interdum et malesuada fames ac ante ipsum primis in
                    faucibus.
                  </p>
                </div>
              </div>
              <div>
                <p className="mx-7">March 2011</p>
                <div className="mx-2">
                  <li className="text-md">
                    The Dental Professional of The Year Award
                  </li>
                  <p className="mx-4 my-2 mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin a ipsum tellus. <br />
                    Interdum et malesuada fames ac ante ipsum primis in
                    faucibus.
                  </p>
                </div>
              </div>

              <h1 className="text-xl my-6">Services</h1>
              <div className="mx-5">
                <div className="mx-5">
                  <li>Children Care</li>
                  <li>Dental Care</li>
                  <li>Oral and Maxillofacial Surgery</li>
                  <li>Orthodontist</li>
                  <li>Periodontist</li>
                  <li>Prosthodontics</li>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={next === 2 ? 'show' : 'hidden'}>
        <Location></Location>
      </div>
      </div>
    </div>
  );
};

export default Informations;
