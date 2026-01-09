import { User } from 'lucide-react';
import Image from 'next/image';

const Team = () => {
    const members = [
        { name: "Rafi Ahmed", id: "CSE2202026150", role: "Team Lead" },
        { name: "Mahinoor Akter Mukta", id: "CSE2101022051", role: "Member" },
        { name: "Zafar Ahmed", id: "CSE2202026076", role: "Member" },
        { name: "Forhad uddin ahmed", id: "CSE2202026065", role: "Member" },
        { name: "Md Masud Rana", id: "CSE1903018035", role: "Member" },
        { name: "Muhibbul alam", id: "CSE1903018038", role: "Member" },
    ];

    return (
        <section className="py-20 bg-gray-50 border-t border-gray-200">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-[#2e7d32]">Academic Excellence</h2>
                    <p className="text-gray-600">Department of Computer Science & Engineering - Sonargaon University</p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {/* Left Column - University Info */}
                    <div className="bg-white p-8 rounded-3xl shadow-lg border-l-4 border-[#2e7d32]" data-aos="fade-right">
                        <div className="mb-6">
                            {/* Placeholder for University Logo */}
                            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mb-4 text-xs text-gray-500 font-bold mx-auto md:mx-0">
                                LOGO
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Final Year Project</h3>
                        <p className="text-gray-600 mb-4">Bachelor of Science in CSE</p>
                        <div className="space-y-2 text-sm text-gray-500 border-t pt-4">
                            <p>Session: January 2026</p>
                            <p>Subject: Advanced AI & Mobile Computing</p>
                        </div>
                    </div>

                    {/* Right Column - Team Grid */}
                    <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {members.map((member, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col items-center text-center"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4 text-gray-400">
                                    {/* Avatar Placeholder */}
                                    <User className="w-10 h-10" />
                                </div>
                                <h4 className="font-bold text-gray-800">{member.name}</h4>
                                <p className="text-xs text-[#2e7d32] font-semibold mb-1">{member.role}</p>
                                <p className="text-xs text-gray-500 font-mono tracking-wide">{member.id}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
