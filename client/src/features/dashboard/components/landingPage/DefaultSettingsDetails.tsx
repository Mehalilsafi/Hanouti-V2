
import {
  Link,
  Heart,
  Megaphone,
  Instagram,
  Facebook,
  ArrowUpFromLine, // Changed for semantic correctness for uploads
  
  MessageSquareText, // For custom thank you page message
  ExternalLink, // For Thank you page URL
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function DefaultSettingsDetails() {
  return (
 <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100 mt-5">
    
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {/* Logo Upload */}
        <div className="flex flex-col gap-3 p-4 border border-gray-200 rounded-lg bg-gray-50 shadow-sm">
          <div className="flex items-center gap-3 text-brand-primary">
            <Link className="w-5 h-5" />
            <p className="font-medium text-lg">Website Logo</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 border-2 border-dashed border-gray-300 rounded-md bg-white">
            <div className="flex items-center gap-3 text-gray-500">
              <ArrowUpFromLine className="w-6 h-6" />
              <p className="text-sm">Upload your store logo (PNG, JPG)</p>
            </div>
            <Button
              className="bg-brand-highlight text-brand-primary hover:bg-brand-secondary hover:text-white transition-all py-2 px-4 rounded-md font-semibold"
            >
              Add Logo
            </Button>
          </div>
        </div>

        {/* Favicon Upload */}
        <div className="flex flex-col gap-3 p-4 border border-gray-200 rounded-lg bg-gray-50 shadow-sm">
          <div className="flex items-center gap-3 text-brand-primary">
            <Heart className="w-5 h-5" />
            <p className="font-medium text-lg">Favicon</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 border-2 border-dashed border-gray-300 rounded-md bg-white">
            <div className="flex items-center gap-3 text-gray-500">
              <ArrowUpFromLine className="w-6 h-6" />
              <p className="text-sm">Upload your favicon (ICO, PNG)</p>
            </div>
            <Button
              className="bg-brand-highlight text-brand-primary hover:bg-brand-secondary hover:text-white transition-all py-2 px-4 rounded-md font-semibold"
            >
              Add Favicon
            </Button>
          </div>
        </div>

        {/* Announcement Bar */}
        <div className="flex flex-col gap-3 p-4 border border-gray-200 rounded-lg bg-gray-50 shadow-sm md:col-span-2">
          <div className="flex items-center gap-3 text-brand-primary">
            <Megaphone className="w-5 h-5" />
            <p className="font-medium text-lg">Announcement Bar Message</p>
          </div>
          <Input
            type="text"
            placeholder="Enter your announcement message here..."
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition-all"
          />
        </div>

        {/* Social Media Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:col-span-2">
          <div className="flex flex-col gap-3 p-4 border border-gray-200 rounded-lg bg-gray-50 shadow-sm">
            <div className="flex items-center gap-3 text-brand-primary">
              <Instagram className="w-5 h-5" />
              <p className="font-medium text-lg">Instagram Link</p>
            </div>
            <Input
              type="url"
              placeholder="https://instagram.com/yourprofile"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition-all"
            />
          </div>
          <div className="flex flex-col gap-3 p-4 border border-gray-200 rounded-lg bg-gray-50 shadow-sm">
            <div className="flex items-center gap-3 text-brand-primary">
              <Facebook className="w-5 h-5" />
              <p className="font-medium text-lg">Facebook Link</p>
            </div>
            <Input
              type="url"
              placeholder="https://facebook.com/yourpage"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition-all"
            />
          </div>
          <div className="flex flex-col gap-3 p-4 border border-gray-200 rounded-lg bg-gray-50 shadow-sm">
            <div className="flex items-center gap-3 text-brand-primary">
              {/* Using generic Link icon if Tiktok isn't available, or replace with actual Tiktok icon if imported */}
             
              <p className="font-medium text-lg">TikTok Link</p>
            </div>
            <Input
              type="url"
              placeholder="https://tiktok.com/@yourprofile"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Custom Thank You Message */}
        <div className="flex flex-col gap-3 p-4 border border-gray-200 rounded-lg bg-gray-50 shadow-sm md:col-span-2">
          <div className="flex items-center gap-3 text-brand-primary">
            <MessageSquareText className="w-5 h-5" />
            <p className="font-medium text-lg">Custom Thank You Page Message</p>
          </div>
          <Input
            type="text"
            placeholder="E.g., Your order is confirmed! We'll contact you soon."
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition-all"
          />
        </div>

        {/* Thank You Page URL */}
        <div className="flex flex-col gap-3 p-4 border border-gray-200 rounded-lg bg-gray-50 shadow-sm md:col-span-2">
          <div className="flex items-center gap-3 text-brand-primary">
            <ExternalLink className="w-5 h-5" />
            <h1 className="font-medium text-lg">Thank You Page URL</h1>
          </div>
          <p className="p-2 bg-gray-100 rounded-md text-gray-700 font-mono text-sm break-all">
            https://safi.a.hanouti/safi/thank-you
          </p>
        </div>
      </div>
    </div>
  )
}

export default DefaultSettingsDetails