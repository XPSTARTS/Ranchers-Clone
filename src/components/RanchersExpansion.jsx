import React from 'react';
import { useForm } from 'react-hook-form';

const RanchersExpansion = () => {
    const { 
        register, 
        handleSubmit, 
        formState: { errors, isSubmitting },
        reset 
    } = useForm();

    const onSubmit = async (data) => {
        console.log('Franchise Application:', data);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        alert('Application submitted successfully! We will contact you soon.');
        reset();
    };

    // Pakistani cities
    const cities = [
        'Islamabad', 'Rawalpindi', 'Lahore', 'Karachi', 'Faisalabad',
        'Multan', 'Gujranwala', 'Sialkot', 'Peshawar', 'Quetta',
        'Hyderabad', 'Bahawalpur', 'Sargodha', 'Sukkur', 'Larkana'
    ];

    // Investment options
    const investments = [
        { value: '25', label: '25 Million PKR' },
        { value: '50', label: '50 Million PKR' },
        { value: '75', label: '75 Million PKR' },
        { value: '100', label: '100 Million PKR' },
        { value: '150', label: '150 Million+ PKR' }
    ];

    return (
        <div className="min-h-screen bg-linear-to-br from-orange-50 to-red-50 py-12 px-4 sm:px-6 lg:px-8">
            {/* Decorative Background Elements */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-20 left-10 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl md:text-6xl font-black mb-4">
                        <span className="bg-linear-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                            Join the Family
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Become a part of Pakistan's fastest-growing restaurant chain. 
                        Fill out the form below and our franchise team will reach out to you.
                    </p>
                </div>

                {/* Form Container */}
                <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20">
                    
                    {/* Progress Steps (Optional - adds premium feel) */}
                    <div className="flex justify-center mb-10">
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                                <span className="ml-2 text-gray-600 font-medium">Personal Info</span>
                            </div>
                            <div className="w-16 h-0.5 bg-linear-to-r from-orange-500 to-red-500"></div>
                            <div className="flex items-center">
                                <div className="w-8 h-8 bg-linear-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                                <span className="ml-2 text-gray-600 font-medium">Business Details</span>
                            </div>
                            <div className="w-16 h-0.5 bg-gray-300"></div>
                            <div className="flex items-center">
                                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-500 font-bold">3</div>
                                <span className="ml-2 text-gray-400 font-medium">Review</span>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                        {/* Name Field */}
                        <div className="group">
                            <label className="block text-gray-700 text-lg font-bold mb-2 group-focus-within:text-orange-500 transition-colors">
                                Full Name <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    {...register('name', { 
                                        required: 'Name is required',
                                        minLength: {
                                            value: 3,
                                            message: 'Name must be at least 3 characters'
                                        },
                                        pattern: {
                                            value: /^[a-zA-Z\s]+$/,
                                            message: 'Name can only contain letters'
                                        }
                                    })}
                                    placeholder="e.g., Ahmad Khan"
                                    className={`w-full px-4 py-4 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all text-gray-700 bg-white/50 backdrop-blur-sm
                                        ${errors.name ? 'border-red-500' : 'border-gray-300 focus:border-orange-500'}`}
                                />
                                {!errors.name && (
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                        <svg className="w-5 h-5 text-gray-400 group-focus-within:text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                            {errors.name && (
                                <p className="mt-2 text-sm text-red-500 flex items-center">
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {errors.name.message}
                                </p>
                            )}
                        </div>

                        {/* Email Field */}
                        <div className="group">
                            <label className="block text-gray-700 text-lg font-bold mb-2 group-focus-within:text-orange-500 transition-colors">
                                Email Address <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <input
                                    type="email"
                                    {...register('email', { 
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: 'Invalid email address'
                                        }
                                    })}
                                    placeholder="ahmad@example.com"
                                    className={`w-full px-4 py-4 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all text-gray-700 bg-white/50 backdrop-blur-sm
                                        ${errors.email ? 'border-red-500' : 'border-gray-300 focus:border-orange-500'}`}
                                />
                                {!errors.email && (
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                        <svg className="w-5 h-5 text-gray-400 group-focus-within:text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                            {errors.email && (
                                <p className="mt-2 text-sm text-red-500 flex items-center">
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        {/* Phone Field */}
                        <div className="group">
                            <label className="block text-gray-700 text-lg font-bold mb-2 group-focus-within:text-orange-500 transition-colors">
                                Phone Number <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <input
                                    type="tel"
                                    {...register('phone', { 
                                        required: 'Phone number is required',
                                        pattern: {
                                            value: /^(\+92|0|92)[0-9]{10}$/,
                                            message: 'Please enter a valid Pakistani number'
                                        }
                                    })}
                                    placeholder="+92 300 1234567"
                                    className={`w-full px-4 py-4 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all text-gray-700 bg-white/50 backdrop-blur-sm
                                        ${errors.phone ? 'border-red-500' : 'border-gray-300 focus:border-orange-500'}`}
                                />
                                {!errors.phone && (
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                        <svg className="w-5 h-5 text-gray-400 group-focus-within:text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                            {errors.phone && (
                                <p className="mt-2 text-sm text-red-500 flex items-center">
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {errors.phone.message}
                                </p>
                            )}
                        </div>

                        {/* Two Column Layout for City and Investment */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* City of Interest */}
                            <div className="group">
                                <label className="block text-gray-700 text-lg font-bold mb-2 group-focus-within:text-orange-500 transition-colors">
                                    Preferred City <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <select
                                        {...register('city', { required: 'Please select a city' })}
                                        className={`w-full px-4 py-4 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all text-gray-700 bg-white/50 backdrop-blur-sm appearance-none
                                            ${errors.city ? 'border-red-500' : 'border-gray-300 focus:border-orange-500'}`}
                                    >
                                        <option value="">Select a city</option>
                                        {cities.map(city => (
                                            <option key={city} value={city.toLowerCase()}>{city}</option>
                                        ))}
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                                {errors.city && (
                                    <p className="mt-2 text-sm text-red-500">{errors.city.message}</p>
                                )}
                            </div>

                            {/* Investment Capability */}
                            <div className="group">
                                <label className="block text-gray-700 text-lg font-bold mb-2 group-focus-within:text-orange-500 transition-colors">
                                    Investment Range <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <select
                                        {...register('investment', { required: 'Please select investment range' })}
                                        className={`w-full px-4 py-4 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all text-gray-700 bg-white/50 backdrop-blur-sm appearance-none
                                            ${errors.investment ? 'border-red-500' : 'border-gray-300 focus:border-orange-500'}`}
                                    >
                                        <option value="">Select range</option>
                                        {investments.map(inv => (
                                            <option key={inv.value} value={inv.value}>{inv.label}</option>
                                        ))}
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                                {errors.investment && (
                                    <p className="mt-2 text-sm text-red-500">{errors.investment.message}</p>
                                )}
                            </div>
                        </div>

                        {/* Message Field */}
                        <div className="group">
                            <label className="block text-gray-700 text-lg font-bold mb-2 group-focus-within:text-orange-500 transition-colors">
                                Your Message
                            </label>
                            <textarea
                                rows="5"
                                {...register('message', {
                                    maxLength: {
                                        value: 500,
                                        message: 'Message cannot exceed 500 characters'
                                    }
                                })}
                                placeholder="Tell us about your experience, why you want to franchise, and any questions you have..."
                                className={`w-full px-4 py-4 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all text-gray-700 bg-white/50 backdrop-blur-sm resize-none
                                    ${errors.message ? 'border-red-500' : 'border-gray-300 focus:border-orange-500'}`}
                            ></textarea>
                            {errors.message && (
                                <p className="mt-2 text-sm text-red-500">{errors.message.message}</p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <div className="flex flex-col items-center space-y-4 pt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="relative group bg-linear-to-r from-orange-500 to-red-600 text-white font-bold text-xl py-4 px-16 rounded-xl transition-all transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-orange-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                            >
                                <span className="relative z-10">
                                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                                </span>
                                <div className="absolute inset-0 bg-linear-to-r from-orange-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </button>
                            
                            <p className="text-sm text-gray-500">
                                By submitting, you agree to our privacy policy and terms of service.
                            </p>
                        </div>
                    </form>
                </div>
            </div>

            {/* Custom Animations */}
            <style jsx>{`
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </div>
    );
};

export default RanchersExpansion;