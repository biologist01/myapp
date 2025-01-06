"use client"
import React, { FormEvent } from 'react';
import { useState } from 'react';

const contactUs = () => {

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
  
    // Optionally reset the form fields after submission
    (e.target as HTMLFormElement).reset();
  
    // Hide the success message after a few seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

    return (
      <div className="min-h-screen bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 p-8 flex items-center justify-center ">
        <div className="max-w-4xl w-screen bg-white shadow-lg rounded-lg p-6 md:p-12 ">
          <div className=" bg-[url('/contact.webp')] bg-cover bg-center h-48 md:h-64 lg:h-100"></div>
          <h1 className="text-3xl md:text-4xl font-bold text-center text-pink-600 mb-8 ">
            Contact Us
          </h1>
          <form onSubmit = {handleSubmit} className="space-y-6">
            
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-gray-700 font-semibold">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
          required
        />
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-gray-700 font-semibold">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      {/* Subject Field */}
      <div>
        <label htmlFor="subject" className="block text-gray-700 font-semibold">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          placeholder="Enter the subject"
          className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
          required
        />
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-gray-700 font-semibold">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Write your message here"
          className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
          required
        />
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          Send Message
        </button>
      </div>
      

      {/* Success Message */}
      {isSubmitted && (
        <div className="text-green-600 text-center mt-4">
          Message sent successfully! We'll contact you soon.
        </div>
      )}
    </form>
        </div>
        
      </div>
    );
  };
  
  export default contactUs;
  