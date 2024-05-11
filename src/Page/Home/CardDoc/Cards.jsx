import axios from "axios";
import SectiomTitle from "../../../component/SectionTitle/SectiomTitle";
import DoctorCard from "../DoctorCard/DoctorCard";
import { useState } from "react";

const Cards = () => {
    const [data, setdata] = useState([]);
    axios.get('http://localhost:5000/doctorInfo')
    .then(res => setdata(res.data))

    return (
        <div>
            <SectiomTitle
            heading={'Our Expert Doctors'}
            subHeading={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo."}
            ></SectiomTitle>

            <div className="grid grid-cols-3">
                {
                    data.map(info => <DoctorCard key={info._id} info={info} ></DoctorCard> )
                }
            </div>

        </div>
    );
};

export default Cards;