'use client'

import { useState, useEffect } from 'react'
import { IoClose } from 'react-icons/io5'
import { UsePostFormData } from '../../utils/formSubmit'
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'

export default function LetsConnectModal({ isOpen, setIsOpen }) {
  const { mutate, isLoading, isSuccess, isError } = UsePostFormData();

  const initialFormData = {
    fullName: '',
    companyName: '',
    emailId: '',
    phoneNumber: '',
    message: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('');
    mutate(formData, {
      onSuccess: () => {
        setMessage('Form submitted successfully!');
        setTimeout(() => {
          setIsOpen(false);
        }, 2000);
      },
      onError: (error) => {
        setMessage('Failed to submit form. Please try again.');
        console.error("Error submitting form:", error);
      }
    });
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
      setFormData(initialFormData);
      setMessage('');
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null;

  const inputClasses = "block px-3 py-3 w-full text-sm text-gray-900 bg-transparent rounded border border-gray-300 appearance-none focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 placeholder-[#b2b2b2]"

  const LabelWithAsterisk = ({ children, required }) => (
    <label className="absolute text-xs text-gray-500 bg-white px-1 top-[-0.5rem] left-3 z-10">
      {children}
      {required && <span className="text-[#DA1212]">*</span>}
    </label>
  )

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl relative my-8">
        <div className="flex justify-between items-center p-4 sm:p-6 relative">
          <button onClick={() => setIsOpen(false)} className="absolute right-4 sm:right-8 text-gray-400 hover:text-gray-600">
            <IoClose size={24} className="sm:w-9 sm:h-9" />
          </button>
          <h2 className="text-xl sm:text-2xl text-[#000000] font-semibold w-full text-center">Let's Connect</h2>
        </div>

        <div className="p-6 sm:p-12 sm:pt-6 sm:pb-8">
          {isLoading && <div className="text-center">Loading...</div>}
          {message && (
            <div className={`flex flex-col items-center justify-center text-center ${isSuccess ? 'text-green-500' : 'text-red-500'}`}>
              {isSuccess ? <AiOutlineCheckCircle size={64} /> : <AiOutlineCloseCircle size={64} />}
              <p className="mt-2">{message}</p>
            </div>
          )}
          {!isLoading && !message && (
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-6 sm:space-y-0">
                <div className="relative flex-1">
                  <LabelWithAsterisk required>Full Name</LabelWithAsterisk>
                  <input
                    type="text"
                    name="fullName"
                    required
                    className={inputClasses}
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="relative flex-1">
                  <LabelWithAsterisk required>Company Name</LabelWithAsterisk>
                  <input
                    type="text"
                    name="companyName"
                    required
                    className={inputClasses}
                    placeholder="Enter your company name"
                    value={formData.companyName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-6 sm:space-y-0">
                <div className="relative flex-1">
                  <LabelWithAsterisk required>Email Id</LabelWithAsterisk>
                  <input
                    type="email"
                    name="emailId"
                    required
                    className={inputClasses}
                    placeholder="Enter your email address"
                    value={formData.emailId}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="relative flex-1">
                  <LabelWithAsterisk>Phone Number</LabelWithAsterisk>
                  <input
                    type="tel"
                    name="phoneNumber"
                    className={inputClasses}
                    placeholder="Enter your phone number (optional)"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="relative">
                <LabelWithAsterisk required>Message</LabelWithAsterisk>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className={inputClasses}
                  placeholder="Enter your message here"
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  type="submit"
                  className="bg-[#4d7297] text-white rounded py-2 px-6 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
