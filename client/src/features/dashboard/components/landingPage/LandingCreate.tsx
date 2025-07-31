import React, { type ReactElement } from "react";
import { useMultiStepForm } from "../../hooks/useMultiStepForm";
import {
  SwatchBook,
  Box,
  MousePointerClick,
  CreditCard,
  Landmark,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ChooseTamplate from "./ChooseTamplate";
import SelectProduct from "./SelectProduct";
import DefaultSettings from "./DefaultSettings";
import Payment from "./Payment";
import LandingDetails from "./LandingDetails";

function LandingCreate() {
  const compnents: ReactElement[] = [
    <ChooseTamplate />,
    <SelectProduct />,
    <DefaultSettings />,
    <Payment />,
    <LandingDetails />,
  ];
  const { currentStep, step, next, back, isFirst, isLast } =
    useMultiStepForm(compnents);
  console.log("the value f steps :", currentStep);
  const stepIcons = [
    { icon: <SwatchBook />, label: "Choose Template" },
    { icon: <Box />, label: "Select Product" },
    { icon: <MousePointerClick />, label: "Default Settings" },
    { icon: <CreditCard />, label: "Payment" },
    { icon: <Landmark />, label: "Landing Details" },
  ];

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8 bg-brand-accent relative">
      <div className="max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
        <div className="flex items-center gap-7 justify-center">
          {stepIcons.map((stepItem, index) => (
            <React.Fragment key={index}>
              <div
                className={`
          flexIconElement font-bold lg:text-xl 
          ${index < currentStep ? "text-green-500" : ""}
          ${index === currentStep ? "text-brand-primary " : ""}
          ${index > currentStep ? "text-gray-400 " : ""}
        `}
              >
                {stepItem.icon}
                <p>{stepItem.label}</p>
              </div>

              {index < stepIcons.length - 1 && <ChevronRight />}
            </React.Fragment>
          ))}
        </div>

        <div>{step}</div>
        <div className="fixed bottom-0 left-0 md:left-[257px] right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
          <div className="flex items-center justify-between p-4 max-w-4xl mx-auto">
            {isFirst && (
              <Button
                onClick={back}
                variant="outline"
                className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-colors duration-200"
              >
                ← Back
              </Button>
            )}

            {!isLast && (
              <Button
                onClick={next}
                className="bg-brand-primary hover:bg-brand-secondary text-white px-8 py-2 font-medium transition-colors duration-200 shadow-sm"
              >
                Next →
              </Button>
            )}

            {isLast && (
              <Button
                onClick={next}
                className="bg-brand-primary hover:bg-brand-secondary text-white px-8 py-2 font-medium transition-colors duration-200 shadow-sm"
              >
                Finish
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingCreate;
