// components/SignupForm.jsx
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      role: "shipper", // matches defaultChecked
    },
  });

  const navigate = useNavigate();
  const password = watch("password"); // to compare with confirmPassword

  const onSubmit = (data) => {
    console.log("Signup Data:", data);
    // Redirect to home after successful signup
    navigate("/");
  };

  return (
    <div className="bg-white rounded-3xl p-10 shadow-2xl w-full md:w-1/2 flex flex-col justify-center roboto max-w-2xl roboto ">
      <div>
        <h2 className="text-2xl text-[#0F172B] mb-2">Create Account</h2>
        <p className="text-[#45556C] mb-8">
          Get started with your free Roarse account today.
        </p>

        {/* Role Selection - Toggle Style */}
        <div className="mb-8">
          <p className="text-sm text-gray-700 mb-4">I am a</p>
          <div className="flex gap-4 flex-wrap">
            <label className="flex-1 min-w-[140px]">
              <input
                type="radio"
                value="shipper"
                {...register("role")}
                className="hidden peer"
              />
              <div className="peer-checked:bg-[#F8F8F8] peer-checked:text-black bg-white border border-[#E2E8F0] text-gray-700 rounded-xl px-6 py-4 text-center cursor-pointer transition font-medium">
                <div className="font-semibold">Shipper</div>
                <div className="text-sm text-[#62748E] mt-1">I need to ship goods</div>
              </div>
            </label>

            <label className="flex-1 min-w-[140px]">
              <input
                type="radio"
                value="carrier"
                {...register("role")}
                className="hidden peer"
              />
              <div className="peer-checked:bg-[#F8F8F8] peer-checked:text-black bg-white border border-[#E2E8F0] text-gray-700 rounded-xl px-6 py-4 text-center cursor-pointer transition font-medium">
                <div className="font-semibold">Carrier</div>
                <div className="text-xs mt-1">I transport goods</div>
              </div>
            </label>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                placeholder="John"
                {...register("firstName", { required: "First name is required" })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Doe"
                {...register("lastName", { required: "Last name is required" })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="john.doe@company.com"
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
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+1 (555) 123-4567"
              {...register("phone", { required: "Phone number is required" })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company Name
            </label>
            <input
              type="text"
              placeholder="Your Company Inc."
              {...register("company", { required: "Company name is required" })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            {errors.company && (
              <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>
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
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
            )}
            <p className="text-xs text-gray-500 mt-1">Must be at least 8 characters</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>
            )}
          </div>

          {/* Terms Checkbox */}
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              {...register("terms", {
                required: "You must agree to the terms and privacy policy",
              })}
              className="w-5 h-5 rounded border-gray-400"
            />
            <span className="text-sm text-gray-700">
              I agree to the{" "}
              <a href="#" className="underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>
            </span>
          </label>
          {errors.terms && (
            <p className="text-red-500 text-xs -mt-3 mb-3">{errors.terms.message}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition flex items-center justify-center gap-2 mt-6"
          >
            Create Account
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <a href="/login" className="font-medium text-black hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;