import { ReactElement, useState } from "react";
export function useMultiStepForm(steps: ReactElement[]) {
  const [currentStep, setCurrentStep] = useState(0);
  function goTo(index: number) {
    setCurrentStep(index);
  }
  function next() {
    setCurrentStep((prev: number) => {
      if (prev < steps.length-1) {
        return prev + 1;
      } else {
        return currentStep ;
      }
    });
  }
  function back() {
    setCurrentStep((prev) => prev - 1);
  }
  return {
    currentStep,
    step: steps[currentStep],
    goTo,
    next,
    back,
    isFirst: currentStep > 0,
    isLast: currentStep === steps.length - 1,
  };
}
