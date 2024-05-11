import Banner from "../Banner/Banner";
import Cards from "../CardDoc/Cards";
import ContactUs from "../ContactUs/ContactUs";
import Location from "../OOC/Location";
import Patients from "../Patients/Patients";
import OurServices from "../ourServices/OurServices";

const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <OurServices></OurServices>
           <Location></Location>
           <Patients></Patients>
           <Cards></Cards>
           <ContactUs></ContactUs>
        </div>
    );
};

export default Home;