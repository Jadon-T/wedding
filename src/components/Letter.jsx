import { useInView } from 'react-intersection-observer';
import { Heart, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';
import jad1 from "../assets/images/jad1.jpg"
import jad2 from "../assets/images/jad2.jpg"

function LettersSection() {
    const [titleRef, titleInView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    const [letter1Ref, letter1InView] = useInView({
        threshold: 0.4,
        triggerOnce: true,
    });

    const [coupleRef, coupleInView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    const [letter2Ref, letter2InView] = useInView({
        threshold: 0.4,
        triggerOnce: true,
    });

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50 overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-32 h-32 bg-rose-300 rounded-full blur-3xl animate-float"></div>
                <div className="absolute top-40 right-20 w-24 h-24 bg-pink-300 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-rose-200 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-pink-200 rounded-full blur-2xl animate-float" style={{ animationDelay: '0.5s' }}></div>
            </div>

            {/* Floating Hearts */}
            <div className="absolute top-16 right-16 opacity-10">
                <Heart className="w-12 h-12 text-rose-400 animate-float" />
            </div>
            <div className="absolute bottom-24 left-16 opacity-10">
                <Heart className="w-8 h-8 text-pink-400 animate-float" style={{ animationDelay: '1.5s' }} />
            </div>
            <div className="absolute top-1/3 left-8 opacity-10">
                <Heart className="w-6 h-6 text-rose-300 animate-float" style={{ animationDelay: '2.5s' }} />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto py-20 px-6 lg:px-8">
                {/* Enhanced Title Section */}
                <div 
                    ref={titleRef}
                    className={`text-center mb-20 transition-all duration-1000 ease-out ${
                        titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    <div className="inline-flex items-center gap-4 mb-6">
                        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-rose-300 to-rose-400"></div>
                        <Heart className="w-6 h-6 text-rose-400 animate-pulse" />
                        <div className="w-16 h-0.5 bg-gradient-to-l from-transparent via-rose-300 to-rose-400"></div>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-4">
                        <span className="font-serif italic">Our Letters</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 font-light tracking-wide">
                        Words from the heart, promises for forever
                    </p>
                </div>

                {/* Letters Container */}
                <div className="space-y-24 md:space-y-32">
                    {/* Jadon's Letter */}
                    <div 
                        ref={letter1Ref}
                        className={`relative transition-all duration-1000 ease-out ${
                            letter1InView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
                        }`}
                    >
                        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                            <div className="lg:w-1/2">
                                <div className="relative bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-white/50 hover:shadow-[0_30px_80px_rgba(0,0,0,0.15)] transition-all duration-500 group">
                                    {/* Quote Icon */}
                                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <Quote className="w-6 h-6 text-white" />
                                    </div>
                                    
                                    {/* Letter Header */}
                                    <div className="mb-6">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-8 h-0.5 bg-gradient-to-r from-rose-300 to-transparent"></div>
                                            <span className="text-sm uppercase tracking-[0.2em] text-gray-500 font-medium">From</span>
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-serif italic text-gray-800 mb-2">Jadon</h3>
                                        <div className="flex items-center gap-3">
                                            <span className="text-sm uppercase tracking-[0.2em] text-gray-500 font-medium">To my beloved</span>
                                            <div className="w-8 h-0.5 bg-gradient-to-l from-rose-300 to-transparent"></div>
                                        </div>
                                    </div>
                                    
                                    {/* Letter Content */}
                                    <div className="relative">
                                        <p className="text-gray-700 leading-relaxed text-lg md:text-xl font-light mb-6">
                                            My dearest Wedding, you are my sunshine, my compass, and my heart's delight. Every moment with you feels like an eternity of joy, and I cannot imagine a world without your beautiful smile lighting up my days.
                                        </p>
                                        <p className="text-gray-700 leading-relaxed text-lg md:text-xl font-light">
                                            You have transformed my life in ways I never thought possible, and I promise to love, cherish, and support you through all of life's adventures.
                                        </p>
                                        
                                        {/* Signature */}
                                        <div className="mt-8 text-right">
                                            <p className="text-gray-600 font-serif italic text-lg">Forever yours,</p>
                                            <p className="text-2xl font-serif italic text-rose-600 mt-1">Jadon</p>
                                        </div>
                                    </div>
                                    
                                    {/* Decorative Elements */}
                                    <div className="absolute bottom-4 right-4 opacity-20">
                                        <Heart className="w-8 h-8 text-rose-300" />
                                    </div>
                                </div>
                            </div>
                            
                            {/* Decorative Side */}
                            <div className="lg:w-1/2 flex justify-center">
                                <div className="relative">
                                    <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center shadow-2xl">
                                        <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full flex items-center justify-center">
                                            <Heart className="w-16 h-16 md:w-20 md:h-20 text-rose-400 animate-pulse" />
                                        </div>
                                    </div>
                                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-rose-300 rounded-full animate-float"></div>
                                    <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-pink-300 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Couple Images Section */}
                    <div 
                        ref={coupleRef}
                        className={`relative py-16 transition-all duration-1200 ease-out ${
                            coupleInView ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <div className="flex justify-center items-center relative min-h-[400px]">
                            {/* Bride Image */}
                            <div className={`absolute left-0 md:left-1/4 transform transition-all duration-1000 ease-out ${
                                coupleInView ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                            }`}>
                                <div className="relative group">
                                    <div className="w-48 h-64 md:w-56 md:h-72 bg-gradient-to-br from-rose-100 to-pink-100 rounded-3xl shadow-2xl overflow-hidden border-4 border-white/50 group-hover:scale-105 transition-transform duration-500">
                                        <img 
                                            src= {jad1}
                                            className="w-full h-full object-cover" 
                                            alt="Beautiful Bride" 
                                        />
                                    </div>
                                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg border border-rose-100">
                                        <span className="text-rose-600 font-serif italic text-sm">Wedding</span>
                                    </div>
                                </div>
                            </div>

                            {/* Central Heart */}
                            <div className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-800 ease-out ${
                                coupleInView ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                            }`} style={{ transitionDelay: '0.5s' }}>
                                <div className="w-20 h-20 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse-glow">
                                    <Heart className="w-10 h-10 text-white fill-current" />
                                </div>
                            </div>

                            {/* Groom Image */}
                            <div className={`absolute right-0 md:right-1/4 transform transition-all duration-1000 ease-out ${
                                coupleInView ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                            }`}>
                                <div className="relative group">
                                    <div className="w-48 h-64 md:w-56 md:h-72 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl shadow-2xl overflow-hidden border-4 border-white/50 group-hover:scale-105 transition-transform duration-500">
                                        <img 
                                            src= {jad2}
                                            className="w-full h-full object-cover" 
                                            alt="Handsome Groom" 
                                        />
                                    </div>
                                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg border border-blue-100">
                                        <span className="text-blue-600 font-serif italic text-sm">Jadon</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Wedding's Letter */}
                    <div 
                        ref={letter2Ref}
                        className={`relative transition-all duration-1000 ease-out ${
                            letter2InView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
                        }`}
                    >
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16">
                            <div className="lg:w-1/2">
                                <div className="relative bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-white/50 hover:shadow-[0_30px_80px_rgba(0,0,0,0.15)] transition-all duration-500 group">
                                    {/* Quote Icon */}
                                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <Quote className="w-6 h-6 text-white" />
                                    </div>
                                    
                                    {/* Letter Header */}
                                    <div className="mb-6 text-right">
                                        <div className="flex items-center justify-end gap-3 mb-2">
                                            <span className="text-sm uppercase tracking-[0.2em] text-gray-500 font-medium">From</span>
                                            <div className="w-8 h-0.5 bg-gradient-to-l from-pink-300 to-transparent"></div>
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-serif italic text-gray-800 mb-2">Wedding</h3>
                                        <div className="flex items-center justify-end gap-3">
                                            <div className="w-8 h-0.5 bg-gradient-to-r from-pink-300 to-transparent"></div>
                                            <span className="text-sm uppercase tracking-[0.2em] text-gray-500 font-medium">To my darling</span>
                                        </div>
                                    </div>
                                    
                                    {/* Letter Content */}
                                    <div className="relative">
                                        <p className="text-gray-700 leading-relaxed text-lg md:text-xl font-light mb-6">
                                            Jadon, you are my safe haven, my dream come true, and the love I never thought I'd find. Your gentle heart and unwavering support have given me strength I never knew I possessed.
                                        </p>
                                        <p className="text-gray-700 leading-relaxed text-lg md:text-xl font-light">
                                            I look forward to building our forever together, creating memories that will last a lifetime, and growing old with you by my side.
                                        </p>
                                        
                                        {/* Signature */}
                                        <div className="mt-8 text-left">
                                            <p className="text-gray-600 font-serif italic text-lg">All my love,</p>
                                            <p className="text-2xl font-serif italic text-pink-600 mt-1">Wedding</p>
                                        </div>
                                    </div>
                                    
                                    {/* Decorative Elements */}
                                    <div className="absolute bottom-4 left-4 opacity-20">
                                        <Heart className="w-8 h-8 text-pink-300" />
                                    </div>
                                </div>
                            </div>
                            
                            {/* Decorative Side */}
                            <div className="lg:w-1/2 flex justify-center">
                                <div className="relative">
                                    <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center shadow-2xl">
                                        <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full flex items-center justify-center">
                                            <Heart className="w-16 h-16 md:w-20 md:h-20 text-pink-400 animate-pulse" />
                                        </div>
                                    </div>
                                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-pink-300 rounded-full animate-float"></div>
                                    <div className="absolute -bottom-6 -right-6 w-6 h-6 bg-rose-300 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Decorative Element */}
                <div className="text-center mt-20">
                    <div className="inline-flex items-center gap-4">
                        <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-rose-300 to-rose-400"></div>
                        <Heart className="w-8 h-8 text-rose-400 animate-pulse fill-current" />
                        <div className="w-20 h-0.5 bg-gradient-to-l from-transparent via-rose-300 to-rose-400"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LettersSection;