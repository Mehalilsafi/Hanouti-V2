import React, { useState } from "react";
import { Flag } from "lucide-react";
import { Input } from "@/components/ui/input";
import { fr } from "date-fns/locale";

function LandingDetails() {
  interface FormData {
  title: string;
  landing: string;
  delivery: string;
  metaKey: string;
  tiktokKey: string;
}
  type Language = {
    flag: React.ReactNode;
    languageName: string;
    isSelected: boolean;
  };
  const [formData, setFormData] = useState<FormData>({
    title: "",
    landing: "",
    delivery: "",
    metaKey: "",
    tiktokKey: "",
  });
  const [arrayLanguage, setArrayLanguage] = useState<Language[]>([
    {
      flag: <Flag />,
      languageName: "English",
      isSelected: false,
    },
    {
      flag: <Flag />,
      languageName: "French",
      isSelected: false,
    },
    {
      flag: <Flag />,
      languageName: "Arabic",
      isSelected: false,
    },
  ]);

  function handleClick(value: number) {
    setArrayLanguage((prev) =>
      prev.map((ele, i) =>
        i === value ? { ...ele, isSelected: !ele.isSelected } : ele
      )
    );
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
}
  return (
      <div className="min-h-screen p-4 sm:p-6 lg:p-8 bg-brand-accent">
        <div className="max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-brand-primary mb-2">
              Landing Page Details
            </h1>
            <p className="text-gray-600 text-lg">
              Simple customization for your unique touch!
            </p>
          </div>

          <div className="space-y-8">
            {/* Language Selection Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-semibold text-brand-primary mb-2">
                  Choose the Default Language
                </h2>
                <p className="text-gray-600">
                  The end-user can't change the language anytime later
                </p>
              </div>
              
              <div className="flex flex-wrap items-center justify-center gap-4">
                {arrayLanguage.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className={`relative p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 flex flex-col items-center gap-2 min-w-[120px] ${
                        ele.isSelected
                          ? "bg-brand-secondary border-brand-primary text-white shadow-md"
                          : "bg-white border-gray-200 hover:border-brand-secondary hover:shadow-sm"
                      }`}
                      onClick={() => handleClick(index)}
                    >
                      <input
                        type="radio"
                        checked={ele.isSelected}
                        onChange={() => handleClick(index)}
                        className="absolute top-2 right-2 w-4 h-4 text-brand-primary focus:ring-brand-primary"
                      />
                      <span className="text-2xl">{ele.flag}</span>
                      <p className={`font-medium text-sm ${
                        ele.isSelected ? "text-white" : "text-gray-700"
                      }`}>
                        {ele.languageName}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Form Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-2xl font-semibold text-brand-primary mb-6">
                Page Configuration
              </h2>
              
              <div className="space-y-6">
                {/* Title Field */}
                <div className="space-y-2">
                  <label 
                    htmlFor="title" 
                    className="block text-sm font-medium text-gray-700"
                  >
                    Page Title
                  </label>
                  <Input
                    id="title"
                    type="text"
                    placeholder="Enter your page title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="focus:ring-brand-primary focus:border-brand-primary"
                  />
                </div>

                {/* Landing Page Slug Field */}
                <div className="space-y-2">
                  <label 
                    htmlFor="landing" 
                    className="block text-sm font-medium text-gray-700"
                  >
                    Landing Page Slug
                  </label>
                  <Input
                    id="landing"
                    type="text"
                    placeholder="your-landing-page-url"
                    name="landing"
                    onChange={handleChange}
                    value={formData.landing}
                    className="focus:ring-brand-primary focus:border-brand-primary"
                  />
                  <p className="text-xs text-gray-500">
                    This will be part of your page URL
                  </p>
                </div>

                {/* Delivery Price Field */}
                <div className="space-y-2">
                  <label 
                    htmlFor="delivery-price" 
                    className="block text-sm font-medium text-gray-700"
                  >
                    Delivery Price
                  </label>
                  <Input
                    id="delivery-price"
                    type="text"
                    placeholder="0.00"
                    name="delivery"
                    value={formData.delivery}
                    onChange={handleChange}
                    className="focus:ring-brand-primary focus:border-brand-primary"
                  />
                </div>

                {/* Tracking Pixels Section */}
                <div className="space-y-6 pt-4 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Tracking Pixels
                  </h3>
                  
                  {/* Meta Pixel */}
                  <div className="space-y-2">
                    <label 
                      htmlFor="meta-pixel" 
                      className="block text-sm font-medium text-gray-700"
                    >
                      Meta Pixel Key
                    </label>
                    <Input
                      id="meta-pixel"
                      type="text"
                      placeholder="Enter your Meta Pixel Key"
                      name="metaKey"
                      value={formData.metaKey}
                      onChange={handleChange}
                      className="focus:ring-brand-primary focus:border-brand-primary"
                    />
                    <p className="text-xs text-gray-500">
                      Used for Facebook and Instagram advertising tracking
                    </p>
                  </div>

                  {/* TikTok Pixel */}
                  <div className="space-y-2">
                    <label 
                      htmlFor="tiktok-pixel" 
                      className="block text-sm font-medium text-gray-700"
                    >
                      TikTok Pixel Key
                    </label>
                    <Input
                      id="tiktok-pixel"
                      type="text"
                      placeholder="Enter your TikTok Pixel Key"
                      name="tiktokKey"
                      onChange={handleChange}
                      value={formData.tiktokKey}
                      className="focus:ring-brand-primary focus:border-brand-primary"
                    />
                    <p className="text-xs text-gray-500">
                      Used for TikTok advertising tracking and analytics
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default LandingDetails;
