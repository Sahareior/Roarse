import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const ForgotPasswordForm = ({ onNext }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Sending code to:", data.email);
    onNext(data.email); // Proceed to verification step
  };

  return (
    <div className="roboto">
      <button
        onClick={() => navigate("/login")}
        className="text-sm text-gray-600 mb-6 flex items-center gap-2"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
          >
            <path
              d="M7.5 11.875L3.125 7.5L7.5 3.125"
              stroke="#45556C"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.875 7.5H3.125"
              stroke="#45556C"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>{" "}
        Back to Sign In
      </button>

      <h2 className="text-xl font-medium mb-2">Forgot Password?</h2>
      <p className="text-lg text-[#45556C] mb-8">
        No worries! Enter your email address and we'll send you a verification
        code to reset your password.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-[#314158] mb-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="john.doe@company.com"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
            })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        <p className="text-sm text-gray-600">
          We'll send a 6-digit verification code to this email.
        </p>

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg font-medium transition flex items-center justify-center gap-2"
        >
          Send Verification Code
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
          >
            <path
              d="M3.90625 9.375H14.8438"
              stroke="white"
              stroke-width="1.5625"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.375 3.90625L14.8438 9.375L9.375 14.8438"
              stroke="white"
              stroke-width="1.5625"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </form>

      <p className="text-center text-sm text-gray-600 mt-6">
        Remember your password?{" "}
        <a href="/login" className="font-medium text-black hover:underline">
          Sign In
        </a>
      </p>
    </div>
  );
};

export default ForgotPasswordForm;
