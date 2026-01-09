import { Code, Database, Server, Cpu, Radio, Box } from 'lucide-react';

const TechStack = () => {
    const techs = [
        { name: "Flutter", role: "Cross-platform mobile app", icon: <Code /> },
        { name: "Django", role: "REST API & authentication", icon: <Server /> },
        { name: "TensorFlow", role: "CNN model for AI", icon: <Cpu /> },
        { name: "PostgreSQL", role: "Secure data storage", icon: <Database /> },
        { name: "WebSocket", role: "Real-time communication", icon: <Radio /> },
        { name: "Docker", role: "Containerized deployment", icon: <Box /> },
    ];

    return (
        <section className="py-20 bg-[#1a1a1a] text-white overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                backgroundSize: '30px 30px'
            }}></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Built with Cutting-Edge Technology</h2>
                    <p className="text-gray-400">Robust, scalable, and secure architecture.</p>
                </div>

                <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                    {techs.map((tech, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col items-center justify-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all w-32 h-32 md:w-40 md:h-40 cursor-pointer"
                            data-aos="zoom-in"
                            data-aos-delay={index * 100}
                        >
                            <div className="text-gray-300 group-hover:text-white transition-colors mb-3">
                                {/* Placeholder for Logos - using oversized icons or text */}
                                <div className="w-10 h-10 mx-auto mb-2 flex items-center justify-center">
                                    {tech.icon}
                                </div>
                            </div>
                            <h3 className="font-bold text-sm md:text-base">{tech.name}</h3>

                            {/* Tooltip */}
                            <div className="absolute -bottom-16 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black text-xs font-semibold py-2 px-4 rounded shadow-lg whitespace-nowrap z-20 pointer-events-none">
                                {tech.role}
                                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rotate-45"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
