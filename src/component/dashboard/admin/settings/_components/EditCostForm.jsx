import { useForm } from "react-hook-form";

const EditCostForm = ({ defaultCost, onSave }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      cost: defaultCost || "",
    },
  });

  const handleFormSubmit = (data) => {
    console.log("Cost updated:", data);
    onSave(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="space-y-5"
    >
      {/* Cost Field */}
      <div>
        <label className="block text-sm robReg font-medium text-gray-600 mb-1">
          Cost
        </label>

        <input
          {...register("cost", {
            required: "Cost is required",
            pattern: {
              value: /^[0-9]+$/,
              message: "Enter a valid number",
            },
          })}
          type="number"
          placeholder="Enter Cost"
          className="
            w-full
            h-[38px]
            border
            border-gray-300
            rounded-md
            px-3
            text-sm
            robReg
            focus:outline-none
            focus:ring-1
            focus:ring-gray-800
          "
        />

        {errors.cost && (
          <p className="text-xs text-red-500 mt-1">
            {errors.cost.message}
          </p>
        )}
      </div>

      {/* Save Button */}
      <button
        type="submit"
        className="
          w-full
          h-[40px]
          bg-gray-800
          text-white
          text-sm
          robMed
          rounded-md
          hover:bg-gray-900
          transition
        "
      >
        Save Changes
      </button>
    </form>
  );
};

export default EditCostForm;