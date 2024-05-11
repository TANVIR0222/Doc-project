import { Link, useNavigate } from "react-router-dom";
import login from "../../../assets/doc-house Landing Page Design-3/Frame.png";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const SingUp = () => {
    const naviget = useNavigate();
    const {createUser} = useContext(AuthContext);

    const handleSingUp = (event) =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const pass = form.pass.value;

        console.log(name , email ,pass);

        createUser(email , pass)
        .then(result => {
            console.log(result.user);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
            });

            naviget('/')

        })
        .catch(error => {
            console.log(error);
        })

    }

    return (
        <div>
        <div className="card w-full h-[570] relative bg-[#07332F]  my-10  text-primary-content">
          <div className=" p-20 flex justify-center top-50">
            <div className="w-1/2  py-1/2  text-start text-balance text-white">
              <img src={login} alt="" />
            </div>
            <form  onSubmit={handleSingUp} className="card-body card border-2 bg-white  border-red-500">
                <h1  className="text-5xl  text-black font-bold">SING UP</h1>

                <div className="form-control">
                    <label className="label">
                    <span className="label-text">Name</span>
                    </label>
                    <input
                    name="name"
                    type="text"
                    placeholder="Enter Your Name"
                    className="input  bg-white input-bordered"
                    required
                    />
                </div>
  
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input

                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="input  bg-white input-bordered"
                  required
                />
              </div>
  
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input

                  type="password"
                  name="pass"
                  placeholder="Password"
                  className="input  bg-white input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
  
              {/*  */}
              <div className="form-control mt-6">
                <button  className="btn btn-primary">Login</button>
              </div>
  
              <div className="text-center my-5">
                  <Link to={'/login'}> Already registered? Go to <span className= "mx-auto text-red-300">LOG IN</span> </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SingUp;