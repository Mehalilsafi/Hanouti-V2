
import {  Lightbulb, Rocket, HeartHandshake, Users, Sparkles, Wand2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

function AboutUsPage() {
  return (
    
    <section className="min-h-screen bg-gradient-to-br from-[#F5F0CD] via-white to-[#FADA7A] py-16 px-4 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* --- About Us Hero Section --- */}
        <div className="flex flex-col justify-center items-center text-center gap-8 mb-20 md:mb-24">
          {/* Subtle Sparkles badge */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-2 bg-gradient-to-r from-[#FADA7A] to-[#F5F0CD] text-[#3674B5] px-6 py-3 rounded-full text-sm font-semibold border border-[#FADA7A] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
              <Sparkles className="w-4 h-4" />
              Our Story, Our Passion
            </div>
          </div>

          {/* Main heading with gradient text */}
          <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
            <span className="block text-[#3674B5] mb-2">Empowering Your</span>
            <span className="block bg-gradient-to-r from-[#3674B5] via-[#578FCA] to-[#3674B5] bg-clip-text text-transparent">
              Digital Dream
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-medium text-lg sm:text-xl md:text-2xl text-center text-[#578FCA] max-w-4xl mx-auto leading-relaxed">
            At hanouti, we're not just building a platform; we're crafting the future for entrepreneurs, one successful online business at a time.
          </p>
        </div>

        {/* --- Our Mission & Vision --- */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 sm:p-12 lg:p-16 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1),0_20px_25px_-5px_rgba(0,0,0,0.04)] border border-[#F5F0CD]/30 mb-20 md:mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start text-center md:text-left">
            <div>
              <h2 className="font-extrabold text-3xl sm:text-4xl text-[#3674B5] mb-4 flex items-center justify-center md:justify-start gap-3">
                <Wand2 className="w-9 h-9 text-[#FADA7A]" /> Our Mission
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Our mission is to **democratize e-commerce**, making it simple, powerful, and accessible for everyone. We strive to provide an intuitive platform that equips aspiring and established entrepreneurs with the tools to effortlessly build, manage, and scale their online stores.
              </p>
            </div>
            <div>
              <h2 className="font-extrabold text-3xl sm:text-4xl text-[#3674B5] mb-4 flex items-center justify-center md:justify-start gap-3">
                <Rocket className="w-9 h-9 text-[#FADA7A]" /> Our Vision
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                We envision a future where **innovation knows no bounds** for online businesses. hanouti aims to be the indispensable partner for global digital commerce, constantly evolving to meet market demands and inspire a new generation of successful online sellers.
              </p>
            </div>
          </div>
        </div>

        {/* --- Our Story / History --- */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 sm:p-12 lg:p-16 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1),0_20px_25px_-5px_rgba(0,0,0,0.04)] border border-[#F5F0CD]/30 mb-20 md:mb-24">
          <h2 className="font-extrabold text-3xl sm:text-4xl text-center text-[#3674B5] mb-10">
            <Sparkles className="inline-block w-8 h-8 text-[#FADA7A] mr-3 align-middle" /> The Hanouti Story
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Born from a passion for empowering local businesses, hanouti started with a simple idea: **break down the barriers to online selling**. We saw talented entrepreneurs struggling with complex, expensive, and inflexible platforms. Our journey began with a commitment to create something different – a solution that was intuitive, affordable, and truly supportive.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              From our first lines of code to serving thousands of merchants today, every step has been guided by user feedback and a relentless pursuit of excellence. We've weathered challenges, celebrated successes, and continuously evolved, always with the goal of providing the best possible tools for your growth.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              We're more than just a platform; we're a community. Join the hanouti family and let's build something extraordinary, together.
            </p>
          </div>
        </div>

        {/* --- Our Core Values --- */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 sm:p-12 lg:p-16 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1),0_20px_25px_-5px_rgba(0,0,0,0.04)] border border-[#F5F0CD]/30 mb-20 md:mb-24">
          <h2 className="font-extrabold text-3xl sm:text-4xl text-center text-[#3674B5] mb-10">
            <HeartHandshake className="inline-block w-8 h-8 text-[#FADA7A] mr-3 align-middle" /> Guiding Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value Card 1: User-Centric */}
            <div className="flex flex-col items-center text-center p-6 bg-[#FADA7A]/20 rounded-xl shadow-sm">
              <Users className="w-12 h-12 text-[#3674B5] mb-4" />
              <h3 className="font-bold text-xl text-[#3674B5] mb-2">User First</h3>
              <p className="text-gray-700">
                Every decision we make, every feature we build, is driven by the needs and success of our users.
              </p>
            </div>
            {/* Value Card 2: Innovation */}
            <div className="flex flex-col items-center text-center p-6 bg-[#FADA7A]/20 rounded-xl shadow-sm">
              <Lightbulb className="w-12 h-12 text-[#3674B5] mb-4" />
              <h3 className="font-bold text-xl text-[#3674B5] mb-2">Constant Innovation</h3>
              <p className="text-gray-700">
                We embrace change and relentlessly pursue new ideas to keep our platform and your business at the forefront.
              </p>
            </div>
            {/* Value Card 3: Transparency */}
            <div className="flex flex-col items-center text-center p-6 bg-[#FADA7A]/20 rounded-xl shadow-sm">
              <Sparkles className="w-12 h-12 text-[#3674B5] mb-4" />
              <h3 className="font-bold text-xl text-[#3674B5] mb-2">Unwavering Integrity</h3>
              <p className="text-gray-700">
                We believe in honest communication, fair practices, and building trust with every interaction.
              </p>
            </div>
          </div>
        </div>

        {/* --- Call to Action --- */}
        <div className="bg-gradient-to-r from-[#3674B5] to-[#578FCA] rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] p-8 sm:p-12 lg:p-16 max-w-4xl mx-auto text-center">
          <h2 className="font-extrabold text-3xl sm:text-4xl text-white mb-6">
            Ready to Begin Your Success Story?
          </h2>
          <p className="text-white/90 leading-relaxed text-lg mb-8">
            Join the hanouti community today and experience the future of online selling. We're excited to help you fly to the moon!
          </p>
          <Button
            className="px-8 py-4 text-lg font-semibold bg-[#FADA7A] text-[#3674B5] hover:bg-[#F5F0CD] hover:text-[#3674B5] transition-colors duration-300 rounded-lg shadow-md group"
          >
            Start Your Free Journey 
          </Button>
        </div>

      </div>
    </section>
  );
}

export default AboutUsPage;