import  { useState } from "react";
import {
  ListCollapse,
  BookText,
} from "lucide-react";

import DefaultSettingsForm from "./DefaultSettingsForm";
import DefaultSettingsDetails from "./DefaultSettingsDetails";
function DefaultSettings() {
  const [switchValue, setSwitchValue] = useState<string>("Details");
  function handleSwitch(value: string): void {
    setSwitchValue(value);
  }
  return (
    <div className="max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto  mt-4">
      <h1 className="text-center">Default Settings</h1>
      <p className="text-center">To speed things up, set a default settings for each store.</p>
      <div className="p-4 bg-amber-100 mt-4">
        <div className="flex rounded-xl overflow-hidden border-2 border-brand-accent shadow-soft">
          <div
            className={`flex-1 flex justify-center items-center p-4 gap-3 cursor-pointer transition-all duration-200 ${
              switchValue === "Details"
                ? "bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-soft"
                : "bg-brand-accent hover:bg-brand-highlight text-brand-primary"
            }`}
            onClick={() => handleSwitch("Details")}
          >
            <ListCollapse className="w-5 h-5" />
            <span className="font-semibold">Details</span>
          </div>
          <div
            className={`flex-1 flex justify-center items-center p-4 gap-3 cursor-pointer transition-all duration-200 ${
              switchValue === "Form"
                ? "bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-soft"
                : "bg-brand-accent hover:bg-brand-highlight text-brand-primary"
            }`}
            onClick={() => handleSwitch("Form")}
          >
            <BookText className="w-5 h-5" />
            <span className="font-semibold">Form</span>
          </div>
        </div>
        {switchValue === "Details" ? (
           <DefaultSettingsDetails />
        
        ) : (
         <DefaultSettingsForm />
        )}
      </div>
    </div>
  );
}

export default DefaultSettings;
