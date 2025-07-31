import  { useState } from "react";
import {
  
  Home,
  Warehouse,
  
  DollarSign,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";

import HomeDelivery from "./HomeDelivery";
import StopDeskDelivery from "./StopDeskDelivery";
function DeliveryHero() {
  const [switchValue, setSwitchValue] = useState<string>("Home");
  function handleSwitch(value: string): void {
    setSwitchValue(value);
  }
  function handleSave() {}

  return (
    <div className="min-h-screen flex items-center justify-center   font-sans">
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-soft-lg border border-brand-accent/30 p-8 sm:p-10 lg:p-12 w-full max-w-lg mx-auto text-center flex flex-col items-center justify-center gap-6">
        <h3 className="font-extrabold text-3xl sm:text-4xl text-brand-primary dark:text-brand-highlight">
          no delivery options set up yet!
        </h3>

        <p className="text-lg text-brand-secondary dark:text-brand-primary max-w-md leading-relaxed">
          You haven't set up any delivery options yet.
        </p>

        <Dialog>
          <DialogTrigger className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-xl shadow-soft hover:from-brand-secondary hover:to-brand-primary transition-all duration-300 transform hover:-translate-y-1 hover:shadow-soft-lg">
            Create Pricing Option
          </DialogTrigger>
          <DialogContent className="p-4">
            <DialogHeader className="pb-6 border-b border-brand-accent/20">
              <DialogTitle className="text-2xl font-bold text-brand-primary flex items-center gap-3">
                <Settings className="w-6 h-6" />
                Create Pricing Option
              </DialogTitle>
            </DialogHeader>
            <div>
              <Input
                type="text"
                placeholder="pricing option name (Aid pricing)"
              />
            </div>

            <div className="my-6">
              <h4 className="text-lg font-semibold text-brand-primary mb-4">
                Select Delivery Type
              </h4>
              <div className="flex rounded-xl overflow-hidden border-2 border-brand-accent shadow-soft">
                <div
                  className={`flex-1 flex justify-center items-center p-4 gap-3 cursor-pointer transition-all duration-200 ${
                    switchValue === "Home"
                      ? "bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-soft"
                      : "bg-brand-accent hover:bg-brand-highlight text-brand-primary"
                  }`}
                  onClick={() => handleSwitch("Home")}
                >
                  <Home className="w-5 h-5" />
                  <span className="font-semibold">Home Delivery</span>
                </div>
                <div
                  className={`flex-1 flex justify-center items-center p-4 gap-3 cursor-pointer transition-all duration-200 ${
                    switchValue === "Stop Desk"
                      ? "bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-soft"
                      : "bg-brand-accent hover:bg-brand-highlight text-brand-primary"
                  }`}
                  onClick={() => handleSwitch("Stop Desk")}
                >
                  
                  <Warehouse className="w-5 h-5" />
                  <span className="font-semibold">Stop Desk</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-brand-accent to-brand-highlight rounded-xl p-6 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <DollarSign className="w-5 h-5 text-brand-primary" />
                  <span className="font-semibold text-brand-primary">
                    Apply for all as default
                  </span>
                </div>
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="800"
                    className="w-32 text-center font-semibold border-brand-primary/20 focus:border-brand-primary"
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-brand-secondary text-sm">
                    DA
                  </span>
                </div>
              </div>
            </div>
            {switchValue === "Home" && <HomeDelivery />}
            {switchValue === "Stop Desk" && <StopDeskDelivery />}
            <div className="flex items-center justify-end gap-3 pt-6 border-t border-brand-accent/20">
              <Button
                variant="outline"
                className="px-6 py-2 border-brand-primary/20 text-brand-primary hover:bg-brand-accent hover:border-brand-primary"
              >
                Cancel
              </Button>
              <Button
                className="px-6 py-2 bg-gradient-to-r from-brand-primary to-brand-secondary text-white hover:from-brand-secondary hover:to-brand-primary shadow-soft"
                onClick={handleSave}
              >
                Save Changes
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default DeliveryHero;
