import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "../components/Courses/Login"; // <== make sure Login component exists in same folder
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const location = useLocation() 
  const  navigate = useNavigate()
  const from = location.state?.from?.pathname || "/"  
  // dummy validation error states (you can replace later with React Hook Form)
   const {
     register,
     handleSubmit,
     formState: { errors },
   } = useForm();
 
   // ✅ Handle form submit
   const onSubmit = async (data) => {
   const userInfo= {
    fullname:data.fullname,
    email:data.email,
    password:data.password,
   }
  await  axios.post("http://localhost:4001/user/signup",userInfo)
   .then((res)=>{
    console.log(res.data);
    if(res.data) {
     toast.success("Signup Sucessfull");
     navigate(from,{replace :true })
 
    }
    localStorage.setItem("Users", JSON.stringify (res.data.user) );
   }).catch((err)=>{
if(err.response) {
  console.log(err);
  toast.error("Error:" +err.response.data.message);
  
}
 
    
   })
   };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-pink-100 via-white to-pink-100">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-[90%] sm:w-[400px] border border-pink-200 relative">
        {/* Close Button */}
        <Link
          to="/"
          className="text-gray-400 hover:text-gray-600 absolute right-4 top-4 text-xl font-bold"
        >
          ✕
        </Link>

        {/* Heading */}
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Create Account</h3>
        <p className="text-gray-500 mb-6 text-sm">
          Sign up to explore more features!
        </p>

        <form  onSubmit={handleSubmit(onSubmit)}> 
          {/* Name */}
          <div className="mb-4">
            <label className="text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="Enter your fullname"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
            {...register("fullname", { required: true })}
              
           
           />
            {errors.fullname && (
              <span className="text-sm text-red-500">This field is required</span>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
             {...register("email", { required: true })}
              
            />
            {errors.email && (
              <span className="text-sm text-red-500">This field is required</span>
            )}
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
               {...register("password", { required: true })}
              
            />
            {errors.password && (
              <span className="text-sm text-red-500">This field is required</span>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-pink-500 text-white rounded-md py-2 hover:bg-pink-600 transition duration-200"
          >
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <p className="text-sm text-gray-600 text-center mt-5">
          Already have an account?{" "}
          <button
            className="text-pink-500 hover:underline font-medium"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Login
          </button>
        </p>

        {/* Include Login Modal */}
        <Login />
      </div>
    </div>
  );
};

export default Signup;
