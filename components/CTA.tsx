import { Download, CheckCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const CTA = () => {
    return (
        <section className="py-20 bg-[#f0f7f0]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-[#2e7d32]">Start Your Smart Farming Journey</h2>
                    <p className="text-gray-600">Join thousands of farmers and experts today.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* For Farmers */}
                    <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-green-100 flex flex-col items-center text-center" data-aos="fade-right">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-[#2e7d32] mb-6">
                            <Download className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">For Farmers</h3>
                        <p className="text-gray-600 mb-8">Get instant diagnosis and the best products for your crops.</p>

                        <div className="flex flex-col gap-4 w-full">
                            <button className="bg-black text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-all">
                                <Download className="w-5 h-5" />
                                Download for Android
                            </button>
                            <div className="flex items-center justify-center gap-4 py-4">
                                <div className="text-center">
                                    <div className="w-24 h-24 bg-gray-100 rounded-lg mx-auto flex items-center justify-center border-2 border-dashed border-gray-300">
                                        <p className="text-[10px] text-gray-400 font-mono">QR CODE</p>
                                    </div>
                                    <p className="text-[10px] text-gray-500 mt-2">Scan to Download</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* For Vendors */}
                    <div className="bg-[#2e7d32] p-8 md:p-12 rounded-[2.5rem] shadow-xl text-white" data-aos="fade-left">
                        <h3 className="text-2xl font-bold mb-4">Join Our Network</h3>
                        <p className="text-green-50/80 mb-8">Register as a verified vendor or agricultural expert.</p>

                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#ff9800]"
                            />
                            <input
                                type="text"
                                placeholder="Email or Phone"
                                className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#ff9800]"
                            />
                            <select className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white/50 focus:outline-none focus:ring-2 focus:ring-[#ff9800]">
                                <option className="text-black">Select Role</option>
                                <option className="text-black">Vendor</option>
                                <option className="text-black">Expert</option>
                            </select>
                            <button className="w-full bg-[#ff9800] text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-[#f57c00] transition-all shadow-lg transform hover:scale-[1.02]">
                                Register Now
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </form>
                        <p className="text-[10px] text-green-100/60 mt-4 flex items-center justify-center gap-1">
                            <CheckCircle className="w-3 h-3" /> Get Verified in 24 Hours
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
