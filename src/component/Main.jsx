import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Page/Shared/Navbar/Navbar";
import Footer from "../Page/Shared/Footer/Footer";

const Main = () => {
    const Location = useLocation();

    const hiddenNavbarSingup = Location.pathname.includes('singup')
    const hiddenNavbarLogin = Location.pathname.includes('login')
    return (
        <div>
            { hiddenNavbarSingup || hiddenNavbarLogin ||  <Navbar></Navbar>}
            <Outlet></Outlet>
            { hiddenNavbarSingup || hiddenNavbarLogin || <Footer></Footer>}
        </div>
    );
};

export default Main;