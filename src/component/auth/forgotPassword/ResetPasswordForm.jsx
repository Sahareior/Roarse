import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const ResetPasswordForm = ({ email, onSuccess }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const password = watch("password");

  const onSubmit = (data) => {
    console.log("New password set for:", email);
    onSuccess();
  };

  return (
    <div className="roboto">
      <h2 className="text-2xl mb-2">Create New Password</h2>
      <p className="text-gray-600 mb-8">
        Choose a strong password for: <br />
        <strong>{email}</strong>
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            New Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 8, message: "At least 8 characters" },
            })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Confirm New Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            {...register("confirmPassword", {
              required: "Please confirm password",
              validate: (val) => val === password || "Passwords do not match",
            })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <div className="bg-gray-100 rounded-lg p-4 space-y-2 text-sm text-gray-700">
          <p className="font-medium">Password must contain:</p>
          <ul className="space-y-1">
            <li className="flex items-center gap-2">✓ At least 8 characters</li>
            <li className="flex items-center gap-2">
              ✓ Contains uppercase letter
            </li>
            <li className="flex items-center gap-2">
              ✓ Contains lowercase letter
            </li>
            <li className="flex items-center gap-2">✓ Contains number</li>
            <li className="flex items-center gap-2">
              ✓ Contains special character
            </li>
          </ul>
        </div>

        <button
          type="submit"
          className="w-full bg-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-400 transition flex items-center justify-center gap-2"
        >
          Reset Password
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
    </div>
  );
};

export default ResetPasswordForm;
