import { MdLocationOn, MdPhone } from "react-icons/md";
import Swal from "sweetalert2";

const ContactUs = () => {
  const handleContactSubmit = event =>{
    event.preventDefault();
    // event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const number = form.number.value;
    const date = form.date.value;
    const email = form.email.value;
    const dname = form.dname.value;
    const time = form.time.value;

    const user ={
        name ,number , date , email , dname , time
    };

    fetch('http://localhost:5000/contact', {
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(user)

    })
    .then(res => res.json())
    .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Thank You",
          showConfirmButton: false,
          timer: 1500
        });
    });
    console.log( user);

  }
  return (
    <div>
      <div className="card w-full h-[570] relative  my-10 bg-[#07332F] text-primary-content">
        <div className=" p-20 flex justify-center top-50">
            <div className="w-1/2 py-1/2  text-start text-balance text-white">
                <h1 className="text-4xl my-5">Contact With Us</h1>
                <p className="my-4" >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi.</p>
                <p className="flex my-4 gap-4 "><MdPhone className="text-2xl" ></MdPhone> +88 01750 14 14 14</p>
                <p className="flex my-4 gap-4 "><MdLocationOn className="text-2xl" ></MdLocationOn> Dhanmondi, Dhaka, Bangladesh</p>
            </div>


              <form onSubmit={handleContactSubmit} className="w-1/2">
                  <div className="flex gap-4">
                  <div className="">
                      <input name='name' required type="text" placeholder="Name" className="input my-2 bg-white  w-full max-w-xs" />
                      <input name='number' required type="number" placeholder="Mobile Number" className="input my-2 bg-white  w-full max-w-xs" />
                      <input name='date' required type="date" placeholder="Date" className="input my-2 bg-white  w-full max-w-xs" />
                  </div>
                  <div className="">
                      <input name="email" required type="email" placeholder="Email" className="input my-2 bg-white  w-full max-w-xs" />
                      <input name="dname" required type="text" placeholder="Doctor Name" className="input my-2 bg-white  w-full max-w-xs" />
                      <input name="time" required type="Time" placeholder="Time" className="input my-2 bg-white  w-full max-w-xs" />
                  </div>
                  </div>
                <input className="btn w-full my-4 text-white bg-[#F7A582]" type="submit" value="Book Now" />
              </form>

        </div>
        </div>
    </div>
  );
};

export default ContactUs;
