import React from 'react';
import { Link } from "react-router";

const Login = () => {
    return (
         <div className="min-h-screen flex items-center justify-center p-6">
      <div className="rounded-2xl shadow-2xl p-8 w-[380px] border bg-white">

        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-400 bg-clip-text text-transparent mb-6">
          Login to Warm Paw
        </h2>

        <form className="space-y-4">

          {/* Email Field */}
          <div>
            <label className="font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 mt-1 rounded-lg border focus:ring focus:ring-amber-300 outline-none"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 mt-1 rounded-lg border focus:ring focus:ring-amber-300 outline-none"
            />
          </div>

          {/* Forget Password */}
           <div className="">
            <a href="#" className="text-sm text-gray-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button — (your gradient style) */}
          <Link
            to={"/"}
            className="block text-center px-6 py-3 font-semibold text-white rounded-lg bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-400 hover:from-yellow-400 hover:via-orange-500 hover:to-amber-600 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Login
          </Link>

           <div className=''>
            <span>Don't have an account?</span>
             <Link className='text-amber-600 font-semibold hover:underline' to={"/Signup"}>Register</Link>
          </div>
        </form>
      </div>
    </div>
    );
};

export default Login;