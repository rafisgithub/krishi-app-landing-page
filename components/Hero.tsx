import Image from 'next/image';
import { Download, Play, Store } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative w-full min-h-[90vh] flex items-center pt-20 overflow-hidden bg-black/50">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    // Using a placeholder or one of the app images heavily blurred as fallback if no specific farmer image
                    // For now, I'll use a gradient background if no image is suitable, or the disease detection one blurred
                    src="/images/mobile-app-features-for-customer/disease-detection-scanner.jpg"
                    alt="Field Background"
                    fill
                    className="object-cover opacity-40 mix-blend-overlay"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a5d1a] to-[#2e7d32] opacity-90"></div>
            </div>

            <div className="container mx-auto px-4 z-10 grid md:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="text-white space-y-6" data-aos="fade-right">
                    <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-2">
                        AI Research Project - 2026
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold font-heading leading-tight">
                        Detect Crop Diseases in <span className="text-[#ffb74d]">Seconds</span>, Get Support Instantly
                    </h1>
                    <p className="text-lg md:text-xl text-gray-100 font-light max-w-lg">
                        AI-powered mobile app for Bangladeshi farmers - developed at Sonargaon University.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <button className="flex items-center gap-2 bg-[#ff9800] hover:bg-[#f57c00] text-white px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg">
                            <Download className="w-5 h-5" />
                            Download App
                        </button>
                        <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-6 py-3 rounded-full font-semibold transition-all border border-white/30">
                            <Play className="w-5 h-5" />
                            Watch Demo
                        </button>
                        <button className="flex items-center gap-2 bg-white text-[#2e7d32] px-6 py-3 rounded-full font-semibold transition-all hover:bg-gray-100 shadow-lg">
                            <Store className="w-5 h-5" />
                            Join as Vendor
                        </button>
                    </div>

                    <div className="pt-8 flex items-center gap-6 text-sm font-medium text-gray-200">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#ff9800]"></span>
                            92% Accuracy
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#ff9800]"></span>
                            Verified by Experts
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#ff9800]"></span>
                            Dept. of CSE
                        </div>
                    </div>
                </div>

                {/* Right Content - Mockup */}
                <div className="relative flex justify-center" data-aos="fade-left">
                    <div className="relative w-[300px] md:w-[350px] h-[600px] md:h-[700px] border-8 border-black rounded-[3rem] shadow-2xl overflow-hidden bg-white">
                        <div className="absolute top-0 w-full h-8 bg-black rounded-b-xl z-20"></div>
                        <Image
                            src="/images/mobile-app-features-for-customer/customer-home-screen.jpg"
                            alt="Krishi App Interface"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute -bottom-10 -left-10 md:bottom-20 md:-left-12 bg-white p-4 rounded-xl shadow-xl z-30 animate-bounce-slow max-w-[200px]">
                        <div className="flex items-center gap-3">
                            <div className="bg-green-100 p-2 rounded-full text-green-600">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500">Status</p>
                                <p className="font-bold text-gray-800">Healthy Crop</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative overlaid gradient for smooth transition */}
            <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
        </section>
    );
};

export default Hero;
