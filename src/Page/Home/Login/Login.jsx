import { useContext, useEffect } from "react";
import login2 from "../../../assets/doc-house Landing Page Design-3/Frame.png";

import {
    loadCaptchaEnginge,
    LoadCanvasTemplate,
    validateCaptcha,
  } from 'react-simple-captcha';
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Login = () => {
   

    const {login} = useContext(AuthContext);

    const handleLogin = (event) => {
      event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const pass = form.pass.value;
        console.log(email , pass);

        login(email , pass)
        .then(result => {
          console.log(result.user);
        })
        .catch(error => {
          console.log(error);
        })

    }

    useEffect(() => {
      loadCaptchaEnginge(6);
    }, []);

    const handleCaptcha = () => {

        let user_captcha = document.getElementById('user_captcha_input').value;

        if (validateCaptcha(user_captcha) == true) {
          alert('Captcha Matched');
          loadCaptchaEnginge(6);
          document.getElementById('user_captcha_input').value = '';
        } else {
          alert('Captcha Does Not Match');
          document.getElementById('user_captcha_input').value = '';
        }
      
    }
  return (
    <div>
      <div className="card w-full h-[570] relative bg-[#07332F]  my-10  text-primary-content">
        <div className=" p-20 flex justify-center top-50">
          <div className="w-1/2  py-1/2  text-start text-balance text-white">
            <img src={login2} alt="" />
            
          </div>
          <form className="card-body card border-2 bg-white  border-red-500">
          <h1  className="text-5xl  text-balck font-bold">Login now!</h1>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input

                type="email"
                name="email"
                placeholder="email"
                className="input  bg-white input-bordered"
                required
              />
            </div>

            <div onSubmit={handleLogin} className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="pass"
                placeholder="password"
                className="input  bg-white input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <LoadCanvasTemplate />
              <input
                type="text"
                placeholder="Enter Captcha Value"
                className="input  bg-white input-bordered"
                required
              />
            </div>

            <div className=" w-full mt-3">
              <div>
                <button className="btn btn-primary" onClick={() => handleCaptcha()} >
                validate
                </button>
              </div>
            </div>

            <div className="form-control mt-6">
              <button  className="btn btn-primary">Login</button>
            </div>

            <div className="text-center my-5">
                <Link to={'/singup'}> Please register at first. Go to <span className= "mx-auto text-red-300">SIGN UP</span> </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
