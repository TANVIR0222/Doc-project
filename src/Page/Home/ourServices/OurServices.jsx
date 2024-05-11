import { NavLink } from "react-router-dom";
import serviceLogo from "../../../assets/Logo/Rectangle 20078.png";
import minbanner from "../../../assets//minBanner/woman-dental-chair-girl-chooses-implant-beauty-treats-her-teeth.jpg";
import minbanner2 from "../../../assets//minBanner/beautiful-girl-sitting-dentist-s-office.jpg";
import minbanner1 from "../../../assets//minBanner/smiling-woman-posing-with-dentists.jpg";
import { useState } from "react";

// import Minslid from "../minSlid/Minslid";

const OurServices = () => {
  const [tab, settab] = useState(1);
  const updateTogol = (id) => {
    settab(id);
    console.log(id);
  };

  return (
    <div className="py-14 flex gap-10  ">
      <img src={serviceLogo} alt="" />
      <div className="max-w-xl">
        <h1 className="text-2xl ">Our Services</h1>
        <p className="my-5">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium <br /> doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inve ntore <br /> veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
        {/*             name="options"
         */}

        <div className="flex gap-10 p-4 border-solid border-2 rounded border-sky-500  my-10 text-xl">
          
          <input type="radio" name="options" aria-label="Cosmetic Dentisty" className="btn outline-none" onClick={() => updateTogol(1)} />
          <input type="radio" name="options" aria-label="Oral Surgery" className="btn outline-none" onClick={() => updateTogol(2)} />
          <input type="radio" name="options" aria-label="Cavity Protection" className="btn outline-none" onClick={() => updateTogol(3)} />
          
        </div>

        <div className="my-6">
          <div className={tab === 1 ? "show" : "hidden"}>
            <img src={minbanner2} alt="" />
            <h1 className="text-2xl leading-6 py-5 my-5">
              Electro Gastrology Therapy
            </h1>
            <p className="my-5">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium <br /> doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inve ntore <br /> veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Sed ut perspiciatis <br /> unde omnis iste natus
              error{" "}
            </p>
            <p className="my-5  line-clamp-4	">
              Sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo.
            </p>

            <button className="btn btn-outline my-10 border-emerald-300">
              More Details
            </button>
          </div>
          <div className={tab === 2 ? "show" : "hidden"}>
            <div className="w-[580] my-10 h-[350]">
              <img src={minbanner1} alt="" />
            </div>
            <h1 className="text-2xl leading-6  my-10">
              Electro Gastrology Therapy
            </h1>
            <p className="my-5">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inve ntore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus
              error{" "}
            </p>
            <p className="my-5  line-clamp-4	">
              Sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo.
            </p>

            <button className="btn btn-outline my-10 border-emerald-300">
              More Details
            </button>
          </div>
          <div className={tab === 3 ? "show" : "hidden"}>
            <img src={minbanner} alt="" />
            <h1 className="text-2xl leading-6 py-5 my-5">
              Electro Gastrology Therapy
            </h1>
            <p className="my-5">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inve ntore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus
              error{" "}
            </p>
            <p className="my-5 ">
              Sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo.
            </p>

            <button className="btn btn-outline my-10 border-emerald-300">
              More Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
