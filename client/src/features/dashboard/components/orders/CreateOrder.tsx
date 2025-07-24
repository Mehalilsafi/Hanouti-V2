import { ArrowLeft } from "lucide-react";
import { Plus, PoundSterling, Truck, Package, Landmark, Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { NavLink } from "react-router-dom";

function CreateOrder() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8" style={{ backgroundColor: '#F5F0CD' }}>
      <div className="max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
        
   
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-lg hover:bg-white/50 transition-colors">
              <ArrowLeft className="w-5 h-5" style={{ color: '#3674B5' }} />
            </button>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold" style={{ color: '#3674B5' }}>
                Create New Order
              </h1>
              <p className="text-gray-600 text-sm mt-1">Add products and configure order details</p>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button 
              variant="outline" 
              className="flex-1 sm:flex-none border-2 font-medium hover:shadow-md transition-all"
              style={{ 
                borderColor: '#578FCA',
                color: '#578FCA'
              }}
            >
              Cancel
            </Button>
            <NavLink to='/dashboard/orders'>

            <Button 
              className="flex-1 sm:flex-none font-medium text-white  hover:bg-brand-highlight transition-all"
              style={{ backgroundColor: '#3674B5' }}
              >
              Save Order
            </Button>
              </NavLink>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
        
          <div className="lg:col-span-2 bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold" style={{ color: '#3674B5' }}>
                Order Products
              </h2>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <button 
                    className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all hover:shadow-md"
                    style={{ 
                      backgroundColor: '#FADA7A',
                      color: '#3674B5'
                    }}
                  >
                    <Plus className="w-4 h-4" />
                    Add Products
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle style={{ color: '#3674B5' }}>Add Products to Order</DialogTitle>
                    <DialogDescription>
                      Search and select products to add to this order
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input 
                        type="text" 
                        placeholder="Search your products..." 
                        className="pl-10 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div className="border rounded-lg p-4 max-h-60 overflow-y-auto">
                      <p className="text-gray-500 text-center">No products found</p>
                    </div>
                  </div>
                  <div className="flex gap-3 pt-4">
                    <Button 
                      variant="outline" 
                      onClick={() => setIsDialogOpen(false)}
                      className="flex-1"
                    >
                      Cancel
                    </Button>
                    <Button 
                      onClick={() => setIsDialogOpen(false)}
                      className="flex-1 text-white"
                      style={{ backgroundColor: '#3674B5' }}
                    >
                      Add Selected
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

          
            <div 
              className="border-2 border-dashed rounded-xl p-8 text-center"
              style={{ 
                borderColor: '#578FCA',
                backgroundColor: '#F5F0CD10'
              }}
            >
              <div className="flex flex-col items-center gap-3">
                <div className="p-3 rounded-full" style={{ backgroundColor: '#FADA7A' }}>
                  <ShoppingCart className="w-8 h-8" style={{ color: '#3674B5' }} />
                </div>
                <div>
                  <p className="font-medium" style={{ color: '#3674B5' }}>
                    No products added yet
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Click "Add Products" to start building your order
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            
       
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg" style={{ backgroundColor: '#F5F0CD' }}>
                  <PoundSterling className="w-5 h-5" style={{ color: '#3674B5' }} />
                </div>
                <h3 className="text-lg font-semibold" style={{ color: '#3674B5' }}>
                  Currency
                </h3>
              </div>
              <Select>
                <SelectTrigger className="w-full focus:ring-2 focus:ring-blue-500">
                  <SelectValue placeholder="Select currency" defaultValue="DZD" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="DZD">DZD - Algerian Dinar</SelectItem>
                  <SelectItem value="USD">USD - US Dollar</SelectItem>
                  <SelectItem value="EUR">EUR - Euro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg" style={{ backgroundColor: '#F5F0CD' }}>
                  <Truck className="w-5 h-5" style={{ color: '#3674B5' }} />
                </div>
                <h3 className="text-lg font-semibold" style={{ color: '#3674B5' }}>
                  Delivery Type
                </h3>
              </div>
              <Select>
                <SelectTrigger className="w-full focus:ring-2 focus:ring-blue-500">
                  <SelectValue placeholder="Select delivery type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="home-delivery">Home Delivery</SelectItem>
                  <SelectItem value="pickup">Store Pickup</SelectItem>
                  <SelectItem value="express">Express Delivery</SelectItem>
                </SelectContent>
              </Select>
            </div>

         
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg" style={{ backgroundColor: '#F5F0CD' }}>
                  <Landmark className="w-5 h-5" style={{ color: '#3674B5' }} />
                </div>
                <h3 className="text-lg font-semibold" style={{ color: '#3674B5' }}>
                  Delivery Fee
                </h3>
              </div>
              <div className="relative">
                <Input 
                  type="number" 
                  placeholder="0" 
                  className="pr-12 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">
                  DZD
                </span>
              </div>
            </div>

        
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg" style={{ backgroundColor: '#F5F0CD' }}>
                  <Package className="w-5 h-5" style={{ color: '#3674B5' }} />
                </div>
                <h3 className="text-lg font-semibold" style={{ color: '#3674B5' }}>
                  Order Summary
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-medium">0.00 DZD</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Delivery:</span>
                  <span className="font-medium">0.00 DZD</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between">
                    <span className="font-semibold" style={{ color: '#3674B5' }}>Total:</span>
                    <span className="font-bold text-lg" style={{ color: '#3674B5' }}>0.00 DZD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateOrder;