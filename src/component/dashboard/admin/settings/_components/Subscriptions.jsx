import React from "react";
import { useForm } from "react-hook-form";
import { FaCheck } from "react-icons/fa";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

const SubscriptionCard = ({ title, price, features }) => (
  <div className="border rounded-xl p-5 w-full max-w-sm">
<div className="flex justify-between">
        <div className="flex items-center gap-2 mb-2">
      <IoCheckmarkDoneCircleSharp size={24} />
      <h3 className="font-semibold robMed text-[24px]">{title}</h3>
    </div>

    <p className="text-4xl robMed font-bold mb-4">
      ${price}
      <span className="text-sm robReg font-normal">/month</span>
    </p>
</div>

    <ul className="space-y-2 text-sm mb-6">
      {features.map((item, index) => (
        <li key={index} className="flex gap-2">
          <FaCheck className="text-green-600 mt-1 text-xs" />
          <span className="robReg">{item}</span>
        </li>
      ))}
    </ul>

    <button className="w-full border py-2 rounded text-sm">
      Edit
    </button>
  </div>
);

const Subscriptions = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Subscription Created:", data);
    reset();
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-[22px] robMed font-semibold">
          Subscription Plan
        </h2>
        <button className="bg-black text-white text-xs px-4 py-1.5 rounded">
          + Add new
        </button>
      </div>

      {/* Create Subscription */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white border rounded-xl p-5 space-y-4"
      >
        <div>
          <label className="text-[20px] robReg font-medium">
            Type
          </label>
          <input
            {...register("type", { required: true })}
            placeholder="Shipment type name"
            className="mt-1 robReg w-full border rounded px-3 py-2 text-sm"
          />
          {errors.type && (
            <p className="text-xs text-red-500">
              Type is required
            </p>
          )}
        </div>

        <div>
          <label className="text-[20px] robReg font-medium">
            Amount
          </label>
          <input
            {...register("amount", { required: true })}
            placeholder="Plan Price"
            className="mt-1 robReg w-full border rounded px-3 py-2 text-sm"
          />
          {errors.amount && (
            <p className="text-xs text-red-500">
              Amount is required
            </p>
          )}
        </div>

        <div>
          <label className="text-[20px] robReg font-medium">
            Time
          </label>
          <input
            {...register("time", { required: true })}
            placeholder="Duration"
            className="mt-1 robReg w-full border rounded px-3 py-2 text-sm"
          />
          {errors.time && (
            <p className="text-xs text-red-500">
              Time is required
            </p>
          )}
        </div>

        <div>
          <label className="text-[20px] robReg font-medium">
            Description
          </label>
          <textarea
            {...register("description", { required: true })}
            placeholder="Facilities and description of this plan."
            rows={4}
            className="mt-1 robReg w-full border rounded px-3 py-2 text-sm"
          />
          {errors.description && (
            <p className="text-xs text-red-500">
              Description is required
            </p>
          )}
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 text-xs rounded"
          >
            Create
          </button>
        </div>
      </form>

      {/* Subscription List */}
      <div className="space-y-4">
        <h3 className="text-[22px] robMed font-semibold">
          Subscription List
        </h3>

        <div className="flex flex-wrap gap-6">
          <SubscriptionCard
            title="General"
            price="0"
            features={[
              "Access to basic shipment tracking and carrier matching.",
              "Up to 5 shipments per month.",
              "Basic support with limited response time.",
              "Standard road transport options.",
              "Limited real-time shipment tracking.",
            ]}
          />

          <SubscriptionCard
            title="Premium"
            price="50"
            features={[
              "Access to basic shipment tracking and carrier matching.",
              "Up to 100 shipments per month.",
              "Basic support with unlimited response time.",
              "Standard road transport options.",
              "Real-time shipment tracking.",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
