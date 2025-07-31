import { useState } from "react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import Monthlyoffers from "./Monthlyoffers";
import Yearly from "./Yearly";
import { Sparkles } from "lucide-react";

function Hero() {
  type plan = "monthly" | "yearly";
  const [billingPlan, setBillingPlan] = useState<plan>("monthly");
  
  function handleBillingPlan(val: plan) {
    if (val === "monthly") {
      setBillingPlan("monthly");
      console.log("value is :", billingPlan);
    } else {
      setBillingPlan("yearly");
      console.log("value is :", billingPlan);
    }
  }
 
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F0CD] via-white to-[#FADA7A] py-12 px-4 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col justify-start items-center gap-8 w-full mb-12">
          {/* Special offer badge */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-2 bg-gradient-to-r from-[#FADA7A] to-[#F5F0CD] text-[#3674B5] px-6 py-3 rounded-full text-sm font-semibold border border-[#FADA7A] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
              <Sparkles className="w-4 h-4" />
              Special Launch Pricing
            </div>
          </div>
          
          {/* Main heading */}
          <h1 className="font-semibold text-3xl sm:text-4xl md:font-bold md:text-6xl lg:text-7xl flex flex-col items-center justify-center text-center leading-tight">
            <span className="block text-[#3674B5] mb-2">Start for free, then</span>
            <span className="block bg-gradient-to-r from-[#3674B5] via-[#578FCA] to-[#3674B5] bg-clip-text text-transparent font-extrabold">
              fly to the moon
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="font-medium text-lg sm:text-xl md:text-2xl text-center text-[#578FCA] max-w-4xl leading-relaxed">
            Choose the best plan for your business. Change plans as you grow.
          </p>
        </div>

        {/* Toggle Section */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-2 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1),0_20px_25px_-5px_rgba(0,0,0,0.04)] border border-[#F5F0CD]/30">
            <ToggleGroup
              type="single"
              className="p-1 rounded-xl w-fit mx-auto flex gap-1"
            >
              <ToggleGroupItem
                value="yearly"
                className={`
                  px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 ease-in-out relative
                  ${billingPlan === "yearly"
                    ? "bg-gradient-to-r from-[#3674B5] to-[#578FCA] text-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] transform scale-105"
                    : "bg-transparent text-[#3674B5] hover:bg-[#F5F0CD]/50 hover:text-[#3674B5]"
                  }
                `}
                onClick={() => handleBillingPlan("yearly")}
              >
                Yearly
                {billingPlan === "yearly" && (
                  <span className="absolute -top-2 -right-2 bg-[#FADA7A] text-[#3674B5] text-xs px-2 py-1 rounded-full animate-pulse font-bold">
                    Save 20%
                  </span>
                )}
              </ToggleGroupItem>
              
              <ToggleGroupItem
                value="monthly"
                className={`
                  px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 ease-in-out
                  ${billingPlan === "monthly"
                    ? "bg-gradient-to-r from-[#3674B5] to-[#578FCA] text-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] transform scale-105"
                    : "bg-transparent text-[#3674B5] hover:bg-[#F5F0CD]/50 hover:text-[#3674B5]"
                  }
                `}
                onClick={() => handleBillingPlan("monthly")}
              >
                Monthly
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>

        {/* Plans Section with smooth transition */}
        <div className="transition-all duration-500 ease-in-out">
          {billingPlan === "monthly" ? <Monthlyoffers /> : <Yearly />}
        </div>
      </div>
    </div>
  );
}

export default Hero;