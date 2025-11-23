import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="rounded-2xl shadow-2xl p-8 w-[420px] border bg-white">
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-400 bg-clip-text text-transparent mb-6">
          Create Your Warm Paw Account
        </h2>

        <form className="space-y-4">
          {/* Name */}
          <div>
            <label className="font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full p-3 mt-1 rounded-lg border focus:ring focus:ring-amber-300 outline-none"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 mt-1 rounded-lg border focus:ring focus:ring-amber-300 outline-none"
              required
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="font-medium">Photo URL</label>
            <input
              type="text"
              placeholder="Enter your photo URL"
              className="w-full p-3 mt-1 rounded-lg border focus:ring focus:ring-amber-300 outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 mt-1 rounded-lg border focus:ring focus:ring-amber-300 outline-none"
              required
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full text-center px-6 py-3 font-semibold text-white rounded-lg bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-400 hover:from-yellow-400 hover:via-orange-500 hover:to-amber-600 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Register
          </button>
        </form>

        {/* Redirect to Login */}
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link
            to={"/login"}
            className="text-amber-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
