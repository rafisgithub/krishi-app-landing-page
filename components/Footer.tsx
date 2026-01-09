import { Facebook, Twitter, Instagram, Github, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-[#1a1a1a] text-white pt-20 pb-10 border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    {/* Contact info */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold font-heading">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors cursor-pointer">
                                <Mail className="w-5 h-5 text-[#2e7d32]" />
                                <span>support@krishiapp.com</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors cursor-pointer">
                                <Phone className="w-5 h-5 text-[#2e7d32]" />
                                <span>+880 XXX-XXXXXXX</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="w-5 h-5 text-[#2e7d32] mt-1" />
                                <span>Department of CSE,<br />Sonargaon University, Dhaka</span>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold font-heading">Quick Links</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                "About Project", "Research Paper", "Privacy Policy",
                                "Terms of Service", "Vendor Agreement", "Contact Team"
                            ].map((link) => (
                                <Link key={link} href="#" className="text-gray-400 hover:text-[#2e7d32] transition-colors text-sm">
                                    {link}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Social & Academic */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold font-heading">Social & Academic</h3>
                        <div className="flex gap-4 mb-6">
                            <div className="p-3 bg-white/5 rounded-full hover:bg-[#2e7d32] transition-colors cursor-pointer">
                                <Facebook className="w-5 h-5" />
                            </div>
                            <div className="p-3 bg-white/5 rounded-full hover:bg-[#2e7d32] transition-colors cursor-pointer">
                                <Twitter className="w-5 h-5" />
                            </div>
                            <div className="p-3 bg-white/5 rounded-full hover:bg-[#2e7d32] transition-colors cursor-pointer">
                                <Instagram className="w-5 h-5" />
                            </div>
                            <div className="p-3 bg-white/5 rounded-full hover:bg-[#2e7d32] transition-colors cursor-pointer">
                                <Github className="w-5 h-5" />
                            </div>
                        </div>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                                    University Website <ExternalLink className="w-3 h-3" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                                    Project Documentation <ExternalLink className="w-3 h-3" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
                    <p>© 2026 Krishi App - Final Year Project, Sonargaon University. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
