import React from 'react'
import { useForm } from 'react-hook-form'
import Header from '../../reusable/Header'

const Shipment_Filter = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log('Form Data:', data)
  }

  // Input field configuration
  const formFields = [
    {
      id: 'pickup',
      label: 'Pickup',
      placeholder: 'Germany',
      type: 'text',
      validation: { required: 'Pickup is required' },
      colSpan: 'md:col-span-1'
    },
    {
      id: 'dropout',
      label: 'Dropout',
      placeholder: 'India',
      type: 'text',
      validation: { required: 'Dropout is required' },
      colSpan: 'md:col-span-1'
    },
    {
      id: 'weight',
      label: 'Weight',
      placeholder: '1200',
      type: 'number',
      validation: {
        required: 'Weight is required',
        min: { value: 1, message: 'Weight must be positive' },
      },
      colSpan: 'md:col-span-1'
    },
    {
      id: 'goods',
      label: 'Goods',
      placeholder: 'Electronics',
      type: 'text',
      validation: { required: 'Goods type is required' },
      colSpan: 'md:col-span-3'
    }
  ]

  // Render input field
  const renderField = (field) => {
    const { id, label, placeholder, type, validation, colSpan } = field
    
    return (
      <div key={id} className={`flex flex-col ${colSpan}`}>
        <label className="text-[16px] robReg mb-2 text-gray-700 font-bold">
          {label}
        </label>
        <input
          type={type}
          placeholder={placeholder}
          {...register(id, validation)}
          className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
        />
        {errors[id] && (
          <span className="text-xs text-red-500 mt-1">
            {errors[id].message}
          </span>
        )}
      </div>
    )
  }

  return (
    <div className='py-12 px-4'>
<Header title={'Send Your Shipment'} subTitle={' Provide your information and send your shipment'} />

<div className='px-14'>
          <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-8xl  mx-auto bg-white p-8 rounded-xl shadow-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {formFields.map(renderField)}
        </div>

        <div className="flex justify-end mt-8">
          <button
            type="submit"
            className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition duration-300 font-medium"
          >
            Save Shipment
          </button>
        </div>
      </form>
</div>
    </div>
  )
}

export default Shipment_Filter