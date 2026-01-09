import Image from 'next/image';
import { XCircle, CheckCircle } from 'lucide-react';

const ProblemSolution = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-[#2e7d32]">Why We Built Krishi App</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Bridging the gap between agricultural challenges and technological solutions.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Left Column: The Problem */}
                    <div className="bg-red-50 p-8 rounded-3xl border border-red-100" data-aos="fade-right">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-red-100 rounded-full text-red-600">
                                <XCircle className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800">The Challenge Farmers Face</h3>
                        </div>
                        <ul className="space-y-4">
                            {[
                                "Crop diseases cause 30-40% yield loss annually",
                                "Manual diagnosis requires expert consultation",
                                "Limited access to authentic pesticides",
                                "Delayed treatment increases damage",
                                "No integrated platform for diagnosis + purchase"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-gray-700">
                                    <span className="mt-1 min-w-[6px] min-h-[6px] rounded-full bg-red-400"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column: The Solution */}
                    <div className="bg-green-50 p-8 rounded-3xl border border-green-100" data-aos="fade-left">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-green-100 rounded-full text-green-600">
                                <CheckCircle className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800">Our AI-Driven Solution</h3>
                        </div>
                        <ul className="space-y-4">
                            {[
                                "Instant disease detection via smartphone camera",
                                "Accurate pesticide recommendations",
                                "Direct access to verified vendors",
                                "Real-time expert consultation",
                                "All-in-one agricultural assistant"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-gray-700">
                                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Visual Split */}
                <div className="mt-16 relative h-[400px] rounded-3xl overflow-hidden shadow-xl" data-aos="zoom-in">
                    <div className="absolute inset-0 grid grid-cols-2">
                        <div className="relative h-full">
                            <Image
                                src="/images/mobile-app-features-for-customer/disease-detection-scanner.jpg"
                                alt="Diseased Crop"
                                fill
                                className="object-cover grayscale-[30%]"
                            />
                            <div className="absolute inset-0 bg-red-900/20 flex items-center justify-center">
                                <span className="bg-red-600 text-white px-4 py-2 rounded-full font-bold">Problem</span>
                            </div>
                        </div>
                        <div className="relative h-full">
                            <Image
                                src="/images/mobile-app-features-for-customer/customer-home-screen.jpg"
                                alt="Healthy Solution"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-green-900/10 flex items-center justify-center">
                                <span className="bg-[#2e7d32] text-white px-4 py-2 rounded-full font-bold">Solution</span>
                            </div>
                        </div>
                    </div>

                    {/* Center Icon */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-2xl z-10">
                        <div className="bg-gray-100 p-2 rounded-full">
                            <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;
