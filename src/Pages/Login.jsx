import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext } from "react";
import { Link } from "react-router";
import auth from "../firebase/firebase.config";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {

  const {setUser, user}  = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(user);
  

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="rounded-2xl shadow-2xl p-8 w-[380px] border bg-white">
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-400 bg-clip-text text-transparent mb-6">
          Login to Warm Paw
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div>
            <label className="font-medium">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 mt-1 rounded-lg border focus:ring focus:ring-amber-300 outline-none"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="font-medium">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 mt-1 rounded-lg border focus:ring focus:ring-amber-300 outline-none"
              required
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

          <div className="">
            <span>Don't have an account?</span>
            <Link
              className="text-amber-600 font-semibold hover:underline"
              to={"/Signup"}
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
