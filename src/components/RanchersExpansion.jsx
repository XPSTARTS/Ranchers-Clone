import React from 'react'

const RanchersExpansion = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-orange-400 text-center mb-8">
          Franchising
        </h1>

        {/* Form Container */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-gray-200">
          
          {/* Name Field */}
          <div className="mb-8">
            <label className="block text-gray-700 text-lg font-bold mb-2">
              Name:
            </label>
            <input
              type="text"
              placeholder="First Last"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition-all text-gray-700"
            />
          </div>

          {/* Email Field */}
          <div className="mb-8">
            <label className="block text-gray-700 text-lg font-bold mb-2">
              Email:
            </label>
            <input
              type="email"
              placeholder="email@example.com"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition-all text-gray-700"
            />
          </div>

          {/* Phone Field */}
          <div className="mb-8">
            <label className="block text-gray-700 text-lg font-bold mb-2">
              Phone:
            </label>
            <input
              type="tel"
              placeholder="+92 300 1234567"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition-all text-gray-700"
            />
          </div>

          {/* City of Interest Field */}
          <div className="mb-8">
            <label className="block text-gray-700 text-lg font-bold mb-2">
              City of Interest?
            </label>
            <select
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition-all text-gray-700 bg-white"
            >
              <option value="">Select a city</option>
              <option value="islamabad">Islamabad</option>
              <option value="rawalpindi">Rawalpindi</option>
              <option value="lahore">Lahore</option>
              <option value="karachi">Karachi</option>
              <option value="faisalabad">Faisalabad</option>
              <option value="multan">Multan</option>
              <option value="gujranwala">Gujranwala</option>
              <option value="sialkot">Sialkot</option>
              <option value="peshawar">Peshawar</option>
              <option value="quetta">Quetta</option>
            </select>
          </div>

          <div className="mb-8">
            <label className="block text-gray-700 text-lg font-bold mb-2">
              Investment Capability
            </label>
            <div className="relative">
              <select
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition-all text-gray-700 bg-white appearance-none"
              >
                <option value="25">25 Million</option>
                <option value="50">50 Million</option>
                <option value="75">75 Million</option>
                <option value="100">100 Million</option>
                <option value="150">150 Million+</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <label className="block text-gray-700 text-lg font-bold mb-2">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Tell us about your interest in franchising..."
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition-all text-gray-700 resize-none"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-orange-400 hover:bg-orange-500 text-white font-bold text-xl py-4 px-12 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-300 shadow-lg"
            >
              Submit Application
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default RanchersExpansion