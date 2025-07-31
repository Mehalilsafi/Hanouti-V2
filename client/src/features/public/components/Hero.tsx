import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
 import { NavLink } from "react-router-dom"; 
import { Sparkles } from "lucide-react";

function Hero() {
  return (
   
    <div className="min-h-screen bg-gradient-to-br from-[#F5F0CD] via-white to-[#FADA7A] py-12 px-4 font-sans flex flex-col justify-center items-center gap-12">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center gap-12 w-full">
        
      
        <div className="flex justify-center">
          <div className="flex items-center gap-2 bg-gradient-to-r from-[#FADA7A] to-[#F5F0CD] text-[#3674B5] px-6 py-3 rounded-full text-sm font-semibold border border-[#FADA7A] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            <Sparkles className="w-4 h-4" />
            Your Success Starts Here
          </div>
        </div>

     
        <h1 className="font-semibold text-4xl sm:text-5xl md:font-bold md:text-6xl lg:text-7xl flex flex-col items-center justify-center text-center leading-tight">
          <span className="block text-[#3674B5] mb-2">Your journey to success</span>
          <span className="block bg-gradient-to-r from-[#3674B5] via-[#578FCA] to-[#3674B5] bg-clip-text text-transparent font-extrabold">
            begins now
          </span>
        </h1>


        <p className="font-medium text-lg sm:text-xl md:text-2xl text-center text-[#578FCA] max-w-4xl leading-relaxed">
          Make your first sale. Hit your first million. Build your business without limits.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
          <NavLink to="/register"  className="font-semibold text-lg px-8 py-4 rounded-xl bg-gradient-to-r from-[#3674B5] to-[#578FCA] text-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_-3px_rgba(0,0,0,0.1),0_15px_30px_-5px_rgba(0,0,0,0.06)] transform hover:scale-105 transition-all duration-300 ease-in-out">

          Start free trial
          </NavLink>

       <NavLink to='/about'className="font-semibold text-lg px-8 py-4 rounded-xl bg-white/90 backdrop-blur-sm text-[#3674B5] border border-[#F5F0CD]/50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:bg-[#F5F0CD]/50 hover:shadow-[0_4px_20px_-3px_rgba(0,0,0,0.1),0_15px_30px_-5px_rgba(0,0,0,0.06)] transform hover:scale-105 transition-all duration-300 ease-in-out"
             >
        learn more
         
            </NavLink>
        </div>

      
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1),0_20px_25px_-5px_rgba(0,0,0,0.04)] border border-[#F5F0CD]/30 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
          
            <div className="flex flex-row items-center gap-3 -space-x-3">
              <Avatar className="ring-2 ring-[#FADA7A]/50">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback className="bg-gradient-to-r from-[#3674B5] to-[#578FCA] text-white">CN</AvatarFallback>
              </Avatar>
              <Avatar className="ring-2 ring-[#FADA7A]/50">
                <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
                <AvatarFallback className="bg-gradient-to-r from-[#3674B5] to-[#578FCA] text-white">LR</AvatarFallback>
              </Avatar>
              <Avatar className="ring-2 ring-[#FADA7A]/50">
                <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
                <AvatarFallback className="bg-gradient-to-r from-[#3674B5] to-[#578FCA] text-white">ER</AvatarFallback>
              </Avatar>
              <Avatar className="bg-gradient-to-r from-[#FADA7A] to-[#F5F0CD] text-[#3674B5] text-sm font-bold ring-2 ring-[#FADA7A]/50">
                <AvatarFallback className="bg-gradient-to-r from-[#FADA7A] to-[#F5F0CD] text-[#3674B5]">+2K</AvatarFallback>
              </Avatar>
            </div>
            
         
            <p className="text-lg sm:text-xl font-medium text-[#578FCA] max-w-2xl text-center md:text-left">
              Join thousands of entrepreneurs simplifying their online sales.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;