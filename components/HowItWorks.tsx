import { Camera, Brain, Pill, ShoppingCart } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            icon: <Camera className="w-8 h-8" />,
            title: "Capture",
            desc: "Take photo of affected leaf",
            color: "bg-blue-100 text-blue-600"
        },
        {
            icon: <Brain className="w-8 h-8" />,
            title: "Detect",
            desc: "AI analyzes & identifies disease",
            color: "bg-purple-100 text-purple-600"
        },
        {
            icon: <Pill className="w-8 h-8" />,
            title: "Recommend",
            desc: "Get pesticide recommendations",
            color: "bg-orange-100 text-orange-600"
        },
        {
            icon: <ShoppingCart className="w-8 h-8" />,
            title: "Connect",
            desc: "Purchase from vendors or chat",
            color: "bg-green-100 text-green-600"
        }
    ];

    return (
        <section className="py-20 bg-[#f9fdf9]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-[#2e7d32]">From Detection to Solution</h2>
                    <p className="text-gray-600">Simple 4-step process to save your crops.</p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 transform -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-lg md:shadow-none md:bg-transparent" data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className={`w-20 h-20 rounded-full flex items-center justify-center ${step.color} mb-4 shadow-md transition-transform hover:scale-110`}>
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                                <p className="text-gray-500 text-sm">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
