import logo from '../../../assets/Logo/Doc House.png'
import logo2 from '../../../assets/Logo/Group 1.png'
const Footer = () => {
  return (
    <div>
      <footer className="footer  p-10 bg-base-200 text-base-content">
        {/* <aside className='w-1/4'>
          

          
        </aside> */}

        <div>
        <img src={logo2} alt="" />
          <img src={logo} alt="" />
          <p>
          Lorem Ipsum is simply dummy text of the <br />
           printing and typesetting industry. has been <br />
            since the printer took.
          </p>
        </div>
        
          <nav>
            <h6 className="text-xl">Quick Links</h6>
            <a className="link link-hover">About Us</a>
            <a className="link link-hover">Doctors</a>
            <a className="link link-hover">Departments</a>
            <a className="link link-hover">Online Payment</a>
            <a className="link link-hover">Contact Us</a>
            <a className="link link-hover">My Account</a>
          </nav>
        <nav>
          <h6 className="text-xl">Doc House Services</h6>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Pediatric Clinic</a>
          <a className="link link-hover">Diagnosis Clinic</a>
          <a className="link link-hover">Cardiac Clinic</a>
          <a className="link link-hover">Laboratory Analysis</a>
          <a className="link link-hover">Gynecological Clinic</a>
          <a className="link link-hover">Personal Counseling</a>
          <a className="link link-hover">Dental Clinic</a>
        </nav>
        <nav>
          <h6 className="text-xl">Working Hours</h6>
          <a className="link link-hover">Monday    - 10 am to 7 pm</a>
          <a className="link link-hover">Tuesday   - 10 am to 7 pm</a>
          <a className="link link-hover">Wednesday - 10 am to 7 pm</a>
          <a className="link link-hover">Thursday  - 10 am to 7 pm</a>
          <a className="link link-hover">Friday    - 10 am to 7 pm</a>
          <a className="link link-hover">Saturday  - 10 am to 7 pm</a>
          <a className="link link-hover">Sunday    - 10 am to 7 pm</a>

        </nav>
      </footer>
      <div>
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
          <aside>
            <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
