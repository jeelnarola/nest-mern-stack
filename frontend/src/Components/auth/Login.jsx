import React from 'react'

function Login() {
  const handelLogin = () =>{
    sessionStorage.setItem("access_token", "true");
    alert("Login successfully....")
  }
 return (
    <div className=" flex items-center justify-center bg-gray-50 h-[100vh]">
      <div className=" w-full flex max-w-5xl ">
        {/* Left Image Section */}
        <div className="hidden md:block w-1/2 h-[60vh] rounded-2xl">
          <img
            src="https://images.pexels.com/photos/4064693/pexels-photo-4064693.jpeg" // replace with your image
            alt="Login"
            className="h-full w-full object-cover rounded-lg"
          />
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 p-8 md:p-5 md:pl-10 ">
          <h2 className="text-5xl font-bold text-[#253D4E] mb-2">Login</h2>
          <p className="text-gray-600 mb-10">
            Don't have an account?{" "}
            <a href="#" className="text-[#3BB77E] font-medium">
              Create here
            </a>
          </p>

          {/* Username */}
          <input
            type="text"
            placeholder="Username or Email *"
            className="w-full mb-4 px-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3BB77E]"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Your password *"
            className="w-full mb-4 px-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3BB77E]"
          />

          {/* Security Code */}
          <div className="flex items-center gap-4 mb-4">
            <input
              type="text"
              placeholder="Security code *"
              className="flex-1 px-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3BB77E]"
            />
            <div className="px-4 py-2 bg-[#C5EDD7] rounded-md font-bold text-lg tracking-widest text-[#3BB77E]">
              <span className="text-[#3BB77E]">8</span>
              <span className="text-[#34a66f]">6</span>
              <span className="text-[#2f7edb]">7</span>
              <span className="text-[#f97316]">5</span>
            </div>
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between mb-6 text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4" />
              Remember me
            </label>
            <a href="#" className="text-gray-400 hover:text-[#3BB77E]">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button onClick={()=>handelLogin()} className="w-full bg-[#253D4E] text-white font-bold py-3 rounded-lg hover:bg-[#1c2e3f] transition">
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login