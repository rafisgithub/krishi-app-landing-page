import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import HowItWorks from "@/components/HowItWorks";
import KeyFeatures from "@/components/KeyFeatures";
import TechStack from "@/components/TechStack";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { AOSInit } from "@/components/AOSInit";

export default function Home() {
  return (
    <main className="min-h-screen">
      <AOSInit />

      {/* Navigation (Transparent) */}
      <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#2e7d32] rounded-lg"></div>
            <span className="font-bold text-white text-xl">Krishi App</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-white/80 text-sm font-medium">
            <a href="#" className="hover:text-white transition-colors">Features</a>
            <a href="#" className="hover:text-white transition-colors">How it Works</a>
            <a href="#" className="hover:text-white transition-colors">The Team</a>
            <button className="bg-[#2e7d32] text-white px-5 py-2 rounded-full hover:bg-[#1b5e20] transition-colors">
              Download Now
            </button>
          </div>
        </div>
      </nav>

      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <KeyFeatures />
      <TechStack />
      <Team />
      <Testimonials />
      <CTA />
      <FAQ />
      <Footer />
    </main>
  );
}
