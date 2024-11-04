'use client'

import { useState, useEffect } from 'react'
import { IoClose, IoCloseCircleSharp } from 'react-icons/io5'
import { UsePostFormData } from '../../utils/formSubmit'
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'
import { TbCircleCheckFilled } from "react-icons/tb";
import { ThreeDots } from 'react-loader-spinner'
import { motion, AnimatePresence } from 'framer-motion'

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
  const [isMobile, setIsMobile] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submissionFailed, setSubmissionFailed] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
    setFormSubmitted(false);
    setSubmissionFailed(false);
    mutate(formData, {
      onSuccess: () => {
        setMessage('We will get back to you shortly');
        setFormSubmitted(true);
      },
      onError: (error) => {
        setMessage('Failed to submit form. Please try again.');
        setSubmissionFailed(true);
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

  const inputClasses = "block px-3 py-3 w-full text-sm text-[#000000CC] bg-transparent rounded border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:ring-[#000000CC] focus:border-[#000000CC] placeholder-[#b2b2b2]"

  const LabelWithAsterisk = ({ children, required }) => (
    <label className="absolute text-sm text-[#00000099] bg-white px-1 top-[-0.6rem] left-3 z-10">
      {children}
      {required && <span className="text-[#DA1212]">*</span>}
    </label>
  )

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", damping: 25, stiffness: 500 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { type: "spring", damping: 25, stiffness: 500 }
    }
  };

  const sliderVariants = {
    hidden: { y: "100%" },
    visible: { 
      y: 0,
      transition: { type: "spring", damping: 30, stiffness: 300 }
    },
    exit: { 
      y: "100%",
      transition: { type: "spring", damping: 30, stiffness: 300 }
    }
  };

  const modalContent = (
    <motion.div 
      className="bg-white rounded-lg shadow-xl w-full max-w-2xl relative my-8"
      variants={modalVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="flex justify-between items-center p-4 sm:p-6 relative">
        {!isLoading && (
          <button onClick={() => setIsOpen(false)} className={`absolute right-4 sm:right-8 text-gray-400 hover:text-gray-600 top-6 md:top-6`}>
            <IoClose size={24} className="sm:w-9 sm:h-9" />
          </button>
        )}
        {!isLoading && !message && (
          <h2 className="text-xl sm:text-2xl font-semibold w-full text-center text-black">
            Let's Connect
          </h2>
        )}
      </div>

      <div className="p-6 md:pt-0 sm:p-12 sm:pt-0 sm:pb-8">
        {isLoading && (
          <div className="flex justify-center items-center h-64">
            <ThreeDots color="#6b9080" height={80} width={80} />
          </div>
        )}
        {message && (
          <div className="flex flex-col items-center justify-center text-center">
            {isSuccess ? (
              <>
                <TbCircleCheckFilled size={64} className="text-[#6b9080]" />
                <h2 className="text-xl sm:text-2xl font-semibold mt-4 text-black">Thank You!</h2>
                <p className="mt-2 text-gray-600">{message}</p>
              </>
            ) : (
              <>
                <IoCloseCircleSharp size={64} className="text-[#DF2420]" />
                <h2 className="text-xl sm:text-2xl font-semibold mt-4 text-black">Oops!</h2>
                <p className="mt-2 text-gray-600">{message}</p>
              </>
            )}
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
                placeholder="Please mention your reason for connecting with us. Are you interested in sourcing the product/service or are you seeking a partnership or collaboration?"
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="bg-[#6b9080] text-white rounded py-2 px-6 focus:outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </motion.div>
  );

  const sliderContent = (
    <motion.div
      className="fixed inset-x-0 bottom-0 bg-white rounded-t-lg shadow-xl w-full max-h-[90vh] overflow-y-auto"
      variants={sliderVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className={`flex justify-between items-center relative ${message ? '' : 'p-4'}`}>
        {!isLoading && (
          <button onClick={() => setIsOpen(false)} className="absolute right-4 text-gray-400 hover:text-gray-600 top-5 md:top-6">
            <IoClose size={24} />
          </button>
        )}
        {!isLoading && !message && (
          <h2 className="text-xl sm:text-2xl font-semibold w-full text-center text-black">
            Let's Connect
          </h2>
        )}
      </div>

      <div className="p-6 pb-8 pt-0">
        {isLoading && (
          <div className="flex justify-center items-center h-64">
            <ThreeDots color="#6b9080" height={80} width={80} />
          </div>
        )}
        {message && (
          <div className="flex flex-col items-center justify-center text-center mt-6">
            {isSuccess ? (
              <>
                <TbCircleCheckFilled size={64} className="text-[#6b9080]" />
                <h2 className="text-xl sm:text-2xl font-semibold mt-4 text-black">Thank You!</h2>
                <p className="mt-2 text-gray-600">{message}</p>
              </>
            ) : (
              <>
                <IoCloseCircleSharp size={64} className="text-[#DF2420]" />
                <h2 className="text-xl sm:text-2xl font-semibold mt-4 text-black">Oops!</h2>
                <p className="mt-2 text-gray-600">{message}</p>
              </>
            )}
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
                placeholder="Please mention your reason for connecting with us. Are you interested in sourcing the product/service or are you seeking a partnership or collaboration?"
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="bg-[#6b9080] text-white rounded py-2 px-6 focus:outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </motion.div>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className={`fixed inset-0 bg-black bg-opacity-50 flex items-${isMobile ? 'end' : 'center'} justify-center p-4 z-50 ${isMobile ? '' : 'overflow-y-auto'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {isMobile ? sliderContent : modalContent}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
