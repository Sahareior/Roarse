import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    // Redirect to home page after "login"
    navigate("/");
  };

  return (
    <div className="bg-white rounded-3xl p-10 shadow-2xl w-full md:w-1/2 flex flex-col justify-center roboto">
      <div>
        <h2 className="text-2xl mb-2">Welcome Back</h2>
        <p className="text-[#45556C] mb-6">
          Sign in to access your logistics dashboard
        </p>

        {/* Role Selection */}
        <div className="flex gap-4 mb-8 flex-wrap">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="role"
              value="shipper"
              defaultChecked
              {...register("role")}
              className="w-5 h-5 text-black accent-black"
            />
            <span>As a Shipper</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="role"
              value="carrier"
              {...register("role")}
              className="w-5 h-5 text-black accent-black"
            />
            <span>As a Carrier</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="role"
              value="agent"
              {...register("role")}
              className="w-5 h-5 text-black accent-black"
            />
            <span>As an Agent</span>
          </label>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="john@company.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                {...register("rememberMe")}
                className="w-4 h-4 rounded"
              />
              <span className="text-sm">Remember me</span>
            </label>
            <div
              onClick={() => navigate("/forgot-password")}
              className="text-base font-medium text-[#121212] hover:underline"
            >
              Forgot password?
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-medium transition flex items-center justify-center gap-2"
          >
            Sign In
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
            >
              <path
                d="M3.90625 9.37512H14.8438"
                stroke="white"
                stroke-width="1.5625"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.375 3.90637L14.8438 9.37512L9.375 14.8439"
                stroke="white"
                stroke-width="1.5625"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/signup")}
            className="text-base font-medium text-[#121212] hover:underline"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
