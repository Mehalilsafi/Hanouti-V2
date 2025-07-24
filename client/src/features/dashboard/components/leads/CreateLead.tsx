import {
  ArrowLeft,
  User,
  Mail,
  MapPin,
  Phone,
  FileText,
  UserPlus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NavLink } from "react-router-dom";

function CreateLead() {
  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8 bg-brand-accent">
      <div className="max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
      
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-lg hover:bg-white/50 transition-colors">
              <ArrowLeft className="w-5 h-5 text-brand-primary" />
            </button>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-brand-primary">
                Create New Lead
              </h1>
              <p className="text-gray-600 text-sm mt-1">
                Add prospect information and contact details
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button
              variant="outline"
              className="flex-1 sm:flex-none border-2 font-medium hover:bg-brand-secondary transition-all border-brand-secondary text-brand-secondary"
            >
              Cancel
            </Button>
            <NavLink to="/dashboard/leads">
              <Button className="flex-1 sm:flex-none font-medium text-white hover:bg-brand-secondary transition-all bg-brand-primary">
                Save Lead
              </Button>
            </NavLink>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-brand-accent">
                <UserPlus className="w-6 h-6 text-brand-primary" />
              </div>
              <h2 className="text-xl font-semibold text-brand-primary">
                Personal Information
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-1">
                <div className="flex items-center gap-2 mb-2">
                  <User className="w-4 h-4 text-brand-secondary" />
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                </div>
                <Input
                  type="text"
                  placeholder="Enter lead full name"
                  className="w-full focus:ring-2 focus:ring-brand-secondary focus:border-transparent"
                />
              </div>

              <div className="md:col-span-1">
                <div className="flex items-center gap-2 mb-2">
                  <Mail className="w-4 h-4 text-brand-secondary" />
                  <label className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                </div>
                <Input
                  type="email"
                  placeholder="Enter lead email address"
                  className="w-full focus:ring-2 focus:ring-brand-secondary focus:border-transparent"
                />
              </div>

              <div className="md:col-span-1">
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="w-4 h-4 text-brand-secondary" />
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                </div>
                <Input
                  type="tel"
                  placeholder="Enter lead phone number"
                  className="w-full focus:ring-2 focus:ring-brand-secondary focus:border-transparent"
                />
              </div>

              <div className="md:col-span-1">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-brand-secondary" />
                  <label className="block text-sm font-medium text-gray-700">
                    Shipping Address
                  </label>
                </div>
                <Input
                  type="text"
                  placeholder="Enter shipping address"
                  className="w-full focus:ring-2 focus:ring-brand-secondary focus:border-transparent"
                />
              </div>

              <div className="md:col-span-1">
                <div className="flex items-center gap-2 mb-2">
                  <User className="w-4 h-4 text-brand-secondary" />
                  <label className="block text-sm font-medium text-gray-700">
                    Company <span className="text-gray-400">(Optional)</span>
                  </label>
                </div>
                <Input
                  type="text"
                  placeholder="Enter company name"
                  className="w-full focus:ring-2 focus:ring-brand-secondary focus:border-transparent"
                />
              </div>

              <div className="md:col-span-1">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-4 h-4 text-brand-secondary" />
                  <label className="block text-sm font-medium text-gray-700">
                    Lead Source
                  </label>
                </div>
                <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-secondary focus:border-transparent">
                  <option value="">Select source</option>
                  <option value="website">Website</option>
                  <option value="social-media">Social Media</option>
                  <option value="referral">Referral</option>
                  <option value="advertisement">Advertisement</option>
                  <option value="cold-call">Cold Call</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-brand-accent">
                  <FileText className="w-5 h-5 text-brand-primary" />
                </div>
                <h3 className="text-lg font-semibold text-brand-primary">
                  Notes
                </h3>
              </div>
              <textarea
                placeholder="Enter any additional notes about this lead..."
                className="w-full min-h-[120px] p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-secondary focus:border-transparent resize-none"
                rows="5"
              />
            </div>

            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-brand-accent">
                  <User className="w-5 h-5 text-brand-primary" />
                </div>
                <h3 className="text-lg font-semibold text-brand-primary">
                  Lead Priority
                </h3>
              </div>
              <div className="space-y-3">
                <label className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="priority"
                    value="high"
                    className="text-brand-primary focus:ring-brand-secondary"
                  />
                  <span className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    High Priority
                  </span>
                </label>
                <label className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="priority"
                    value="medium"
                    className="text-brand-primary focus:ring-brand-secondary"
                    defaultChecked
                  />
                  <span className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-brand-highlight rounded-full"></div>
                    Medium Priority
                  </span>
                </label>
                <label className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="priority"
                    value="low"
                    className="text-brand-primary focus:ring-brand-secondary"
                  />
                  <span className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    Low Priority
                  </span>
                </label>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-brand-accent">
                  <FileText className="w-5 h-5 text-brand-primary" />
                </div>
                <h3 className="text-lg font-semibold text-brand-primary">
                  Status
                </h3>
              </div>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-secondary focus:border-transparent">
                <option value="new">New Lead</option>
                <option value="contacted">Contacted</option>
                <option value="qualified">Qualified</option>
                <option value="proposal">Proposal Sent</option>
                <option value="negotiation">In Negotiation</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateLead;
