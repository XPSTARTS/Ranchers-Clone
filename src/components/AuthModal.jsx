import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const AuthModal = ({ isOpen, onClose }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset, watch } = useForm();

    useEffect(() => {
        if (isOpen) {
            const scrollY = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';
            document.body.style.overflow = 'hidden';
        } else {
            const scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.style.overflow = '';
            if (scrollY) {
                window.scrollTo(0, parseInt(scrollY || '0') * -1);
            }
        }

        return () => {
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const onSubmit = (data) => {
        console.log(isLogin ? 'Login data:' : 'Signup data:', data);
        if (isLogin) {
            alert('Login functionality coming soon!');
        } else {
            alert('Signup functionality coming soon!');
        }
    };

    const toggleForm = () => {
        setIsLogin(!isLogin);
        reset();
        setShowPassword(false);
        setShowConfirmPassword(false);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    if (!isOpen) return null;

    return (
        <>
            <div 
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                onClick={onClose}
            />

            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden
                    h-[95vh] sm:h-[85vh] md:h-[70vh]"
                >
                    <button 
                        onClick={onClose}
                        className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-8 h-8 sm:w-10 sm:h-10 
                            bg-black/5 hover:bg-black/10 rounded-full flex items-center justify-center transition-colors"
                    >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="relative h-full flex flex-col md:flex-row">
                        
                        <div className={`
                            hidden md:block w-2/5 h-full absolute top-0 transition-all duration-500 ease-in-out
                            ${isLogin ? 'left-0' : 'left-[60%]'}
                        `}>
                            <div className="w-full h-full bg-gradient-to-br from-orange-500 to-red-700 relative">
                                <div className="absolute inset-0 opacity-10">
                                    <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                                    <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
                                </div>
                                
                                <div className="relative h-full flex flex-col items-center justify-center text-white p-8">
                                    <img 
                                        src="https://rancherscafe.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.9137e136.png&w=400&q=75" 
                                        alt="Ranchers Cafe" 
                                        className="w-32 mb-6 brightness-0 invert"
                                    />
                                    <h2 className="text-3xl font-bold mb-4 text-center">
                                        {isLogin ? 'Welcome Back!' : 'Join Us Today!'}
                                    </h2>
                                    <p className="text-center text-white/80 text-sm leading-relaxed">
                                        {isLogin 
                                            ? 'Sign in to access your account and enjoy exclusive offers.' 
                                            : 'Create an account to get personalized recommendations and faster checkout.'}
                                    </p>
                                    
                                    <div className="absolute bottom-8 left-8 text-6xl opacity-20 animate-bounce">🍔</div>
                                    <div className="absolute top-8 right-8 text-6xl opacity-20 animate-pulse">🍟</div>
                                </div>
                            </div>
                        </div>

                        <div className="md:hidden w-full bg-gradient-to-r from-orange-500 to-red-700 px-6 py-5 flex-shrink-0">
                            <div className="flex items-center gap-3">
                                <img 
                                    src="https://rancherscafe.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.9137e136.png&w=400&q=75" 
                                    alt="Ranchers Cafe" 
                                    className="w-10 h-10 brightness-0 invert object-contain"
                                />
                                <div>
                                    <h2 className="text-white font-bold text-lg">
                                        {isLogin ? 'Welcome Back!' : 'Join Us Today!'}
                                    </h2>
                                    <p className="text-white/70 text-xs">
                                        {isLogin 
                                            ? 'Sign in to your account' 
                                            : 'Create your account'}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={`
                            w-full md:w-3/5 flex-1 md:h-full md:absolute md:top-0 bg-white 
                            overflow-y-auto transition-all duration-500 ease-in-out
                            ${isLogin ? 'md:left-[40%]' : 'md:left-0'}
                        `}>
                            <div className="max-w-md mx-auto px-5 sm:px-8 py-6 sm:py-8 md:mt-8 lg:mt-12">
                                <div className="transition-all duration-300">
                                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-1 sm:mb-2">
                                        {isLogin ? 'Sign In' : 'Create Account'}
                                    </h2>
                                    <p className="text-gray-500 text-xs sm:text-sm mb-4 sm:mb-6">
                                        {isLogin 
                                            ? 'Please enter your details to sign in' 
                                            : 'Please fill in the information below'}
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 sm:space-y-4">
                                    {!isLogin && (
                                        <div className="animate-fadeIn">
                                            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                {...register('name', { 
                                                    required: 'Name is required' 
                                                })}
                                                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm text-gray-900 
                                                    border border-gray-300 rounded-lg bg-white
                                                    focus:ring-2 focus:ring-orange-500 focus:border-orange-500 
                                                    outline-none transition placeholder:text-gray-400"
                                                placeholder="John Doe"
                                            />
                                            {errors.name && (
                                                <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                                            )}
                                        </div>
                                    )}

                                    <div>
                                        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            {...register('email', { 
                                                required: 'Email is required',
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: 'Invalid email address'
                                                }
                                            })}
                                            className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm text-gray-900 
                                                border border-gray-300 rounded-lg bg-white
                                                focus:ring-2 focus:ring-orange-500 focus:border-orange-500 
                                                outline-none transition placeholder:text-gray-400"
                                            placeholder="you@example.com"
                                        />
                                        {errors.email && (
                                            <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                                            Password
                                        </label>
                                        <div className="relative">
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                {...register('password', { 
                                                    required: 'Password is required',
                                                    minLength: {
                                                        value: 6,
                                                        message: 'Password must be at least 6 characters'
                                                    }
                                                })}
                                                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm text-gray-900 
                                                    border border-gray-300 rounded-lg bg-white
                                                    focus:ring-2 focus:ring-orange-500 focus:border-orange-500 
                                                    outline-none transition pr-12
                                                    placeholder:text-gray-400
                                                    [-webkit-text-security:disc] [&:not(:placeholder-shown)]:[-webkit-text-security:none]"
                                                style={{
                                                    WebkitTextSecurity: showPassword ? 'none' : undefined,
                                                    color: '#111827',
                                                    caretColor: '#111827',
                                                    fontSize: '14px',
                                                }}
                                                placeholder="Enter your password"
                                                autoComplete={isLogin ? "current-password" : "new-password"}
                                            />
                                            <button
                                                type="button"
                                                onClick={togglePasswordVisibility}
                                                className="absolute right-3 top-1/2 transform -translate-y-1/2 
                                                    text-gray-500 hover:text-orange-500 transition-colors 
                                                    p-1 z-10"
                                                tabIndex={-1}
                                            >
                                                {showPassword ? (
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                                    </svg>
                                                ) : (
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                    </svg>
                                                )}
                                            </button>
                                        </div>
                                        {errors.password && (
                                            <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>
                                        )}
                                    </div>

                                    {!isLogin && (
                                        <div className="animate-fadeIn">
                                            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                                                Confirm Password
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type={showConfirmPassword ? "text" : "password"}
                                                    {...register('confirmPassword', { 
                                                        required: 'Please confirm your password',
                                                        validate: (value) => 
                                                            value === watch('password') || 'Passwords do not match'
                                                    })}
                                                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm text-gray-900 
                                                        border border-gray-300 rounded-lg bg-white
                                                        focus:ring-2 focus:ring-orange-500 focus:border-orange-500 
                                                        outline-none transition pr-12
                                                        placeholder:text-gray-400"
                                                    style={{
                                                        color: '#111827',
                                                        caretColor: '#111827',
                                                        fontSize: '14px',
                                                    }}
                                                    placeholder="Re-enter your password"
                                                    autoComplete="new-password"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={toggleConfirmPasswordVisibility}
                                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 
                                                        text-gray-500 hover:text-orange-500 transition-colors 
                                                        p-1 z-10"
                                                    tabIndex={-1}
                                                >
                                                    {showConfirmPassword ? (
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                                        </svg>
                                                    ) : (
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                        </svg>
                                                    )}
                                                </button>
                                            </div>
                                            {errors.confirmPassword && (
                                                <p className="mt-1 text-xs text-red-500">{errors.confirmPassword.message}</p>
                                            )}
                                        </div>
                                    )}

                                    {isLogin && (
                                        <div className="text-right">
                                            <button 
                                                type="button"
                                                className="text-xs sm:text-sm text-orange-500 hover:text-orange-600 transition-colors"
                                            >
                                                Forgot password?
                                            </button>
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white 
                                            py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base
                                            hover:from-orange-600 hover:to-red-700 transition-all 
                                            active:scale-95 sm:hover:scale-105 shadow-lg"
                                    >
                                        {isLogin ? 'Sign In' : 'Create Account'}
                                    </button>
                                </form>

                                <div className="relative my-4 sm:my-6">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-300"></div>
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-2 bg-white text-gray-500">or</span>
                                    </div>
                                </div>

                                <div className="text-center pb-4">
                                    <p className="text-gray-600 text-xs sm:text-sm">
                                        {isLogin ? "Don't have an account?" : "Already have an account?"}
                                    </p>
                                    <button
                                        onClick={toggleForm}
                                        className="mt-1 sm:mt-2 text-orange-500 hover:text-orange-600 font-semibold 
                                            text-sm sm:text-base transition-all hover:underline"
                                    >
                                        {isLogin ? 'Sign Up' : 'Sign In'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-in-out;
                }
            `}</style>
        </>
    );
};

export default AuthModal;