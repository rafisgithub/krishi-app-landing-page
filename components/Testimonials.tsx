import { Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            quote: "Krishi App helped me save my rice crop from blast disease. The pesticide recommendation worked perfectly!",
            author: "Farmer from Dinajpur",
            image: "/images/mobile-app-features-for-customer/customer-home-screen.jpg" // Placeholder for avatar
        },
        {
            quote: "As a vendor, I've doubled my sales by joining this platform. Farmers trust the recommendations.",
            author: "Agro-supplier, Rajshahi",
            image: "/images/mobile-app-features-for-customer/seller-details.jpg" // Placeholder
        }
    ];

    const stats = [
        { label: "Farmers Registered", value: "1,000+" },
        { label: "Verified Vendors", value: "50+" },
        { label: "Disease Detections", value: "10,000+" },
        { label: "User Satisfaction", value: "92%" }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-[#2e7d32]">Transforming Agriculture</h2>
                    <p className="text-gray-600">Stories of impact from across Bangladesh.</p>
                </div>

                {/* Testimonials Carousel (Simplified) */}
                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-green-50 p-8 rounded-3xl relative" data-aos="fade-up" data-aos-delay={i * 100}>
                            <Quote className="absolute top-6 right-6 w-12 h-12 text-green-200" />
                            <p className="text-lg italic text-gray-700 mb-6 relative z-10 font-quote">
                                "{t.quote}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
                                    {/* Placeholder for actual farmer image if available */}
                                </div>
                                <p className="font-bold text-gray-800">{t.author}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Statistics Bar */}
                <div className="bg-[#2e7d32] rounded-[2rem] p-8 md:p-12 text-white shadow-xl" data-aos="zoom-in">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {stats.map((stat, i) => (
                            <div key={i}>
                                <p className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</p>
                                <p className="text-green-100 text-sm">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
