import React from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Add your submission logic here
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 font-poppins">Contact Us</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Email Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 font-poppins">
            Email
          </label>
          <input
            type="email"
            placeholder="name@example.com"
            className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all ${
              errors.email ? 'border-red-500 focus:ring-red-200' : 
              'border-gray-300 focus:border-gray-500 focus:ring-gray-200'
            }`}
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>
          )}
        </div>

        {/* Phone Number Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 font-poppins">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="+1 (555) 123-4567"
            className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all ${
              errors.phone ? 'border-red-500 focus:ring-red-200' : 
              'border-gray-300 focus:border-gray-500 focus:ring-gray-200'
            }`}
            {...register('phone', {
              required: 'Phone number is required',
              pattern: {
                value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/,
                message: 'Invalid phone number'
              }
            })}
          />
          {errors.phone && (
            <span className="text-red-500 text-sm mt-1">{errors.phone.message}</span>
          )}
        </div>

        {/* Message Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 font-poppins">
            Message
          </label>
          <textarea
            placeholder="Type your message here..."
            rows="4"
            className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all ${
              errors.message ? 'border-red-500 focus:ring-red-200' : 
              'border-gray-300 focus:border-gray-500 focus:ring-gray-200'
            }`}
            {...register('message', {
              required: 'Message is required',
              minLength: {
                value: 20,
                message: 'Message must be at least 20 characters'
              }
            })}
          ></textarea>
          {errors.message && (
            <span className="text-red-500 text-sm mt-1">{errors.message.message}</span>
          )}
        </div>

        {/* Radio Group */}
        <div className="space-y-3">
          <p className="text-sm font-medium text-gray-700 font-poppins">Request Type</p>
          <div className="flex items-center space-x-6">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="quote"
                className="w-5 h-5 text-gray-850 border-2 border-gray-300 focus:ring-gray-500 rounded-full"
                {...register('requestType', { required: true })}
              />
              <span className="text-gray-700 font-poppins">Request a Quote</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="info"
                className="w-5 h-5 text-gray-850 border-2 border-gray-300 focus:ring-gray-500 rounded-full"
                {...register('requestType', { required: true })}
              />
              <span className="text-gray-700 font-poppins">More Information</span>
            </label>
          </div>
          {errors.requestType && (
            <span className="text-red-500 text-sm mt-1">Please select a request type</span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gray-800 text-white px-6 py-2.5 rounded-full font-poppins 
                   font-medium text-sm shadow-lg hover:bg-gray-900 transition-colors
                   focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;