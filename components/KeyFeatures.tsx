import { Search, Store, MessageCircle, ClipboardCheck, TrendingUp, Globe } from 'lucide-react';

const KeyFeatures = () => {
    const features = [
        {
            icon: <Search className="w-8 h-8" />,
            title: "AI Disease Detection",
            points: ["CNN-powered TensorFlow model", "92% accuracy rate", "Supports multiple crops"],
            color: "text-blue-600 bg-blue-50"
        },
        {
            icon: <Store className="w-8 h-8" />,
            title: "Multi-Vendor Marketplace",
            points: ["Verified agro-product suppliers", "Competitive pricing", "Secure transactions"],
            color: "text-green-600 bg-green-50"
        },
        {
            icon: <MessageCircle className="w-8 h-8" />,
            title: "Real-Time Expert Chat",
            points: ["Instant consultation", "WebSocket technology", "Chat history saved"],
            color: "text-purple-600 bg-purple-50"
        },
        {
            icon: <ClipboardCheck className="w-8 h-8" />,
            title: "Pesticide Recommendations",
            points: ["Science-backed suggestions", "Dosage guidance", "Safety precautions"],
            color: "text-orange-600 bg-orange-50"
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "Crop Management",
            points: ["Disease history tracking", "Prevention tips", "Seasonal alerts"],
            color: "text-teal-600 bg-teal-50"
        },
        {
            icon: <Globe className="w-8 h-8" />,
            title: "Multi-Language Support",
            points: ["Bangla & English interface", "Voice input support", "Simple navigation"],
            color: "text-indigo-600 bg-indigo-50"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-[#2e7d32]">Everything Farmers Need</h2>
                    <p className="text-gray-600">Comprehensive tools for modern agriculture.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300 group bg-white"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${feature.color} group-hover:scale-110 transition-transform`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                            <ul className="space-y-3">
                                {feature.points.map((point, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KeyFeatures;
