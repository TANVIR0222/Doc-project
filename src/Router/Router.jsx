
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../component/Main";
import Home from "../Page/Home/Home/Home";
import DPHome from "../Page/DoctorProfile/Home/Home/DPHome";
import Login from "../Page/Home/Login/Login";
import SingUp from "../Page/Home/SingUp/SingUp";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/dprofile/:id',
          element:<DPHome></DPHome>,
          loader:({params}) => fetch(`http://localhost:5000/doctorInfo/${params.id}`)
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/singup',
          element:<SingUp></SingUp>
        }


      ]
    },
  ]);