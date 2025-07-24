import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { Plus, ImageUp, Package } from "lucide-react";
import { NavLink } from "react-router-dom";
function CreateProduct() {
  const [toggleValue, setToggleValue] = useState(true);
  
  function handleToggle() {
    setToggleValue(!toggleValue);
  }
  
  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8" style={{ backgroundColor: '#F5F0CD' }}>
      <div className="max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg" style={{ backgroundColor: '#3674B5' }}>
              <Package className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold" style={{ color: '#3674B5' }}>
              Add New Product
            </h1>
          </div>
          <p className="text-gray-600">Create and configure your product details</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* Product Information */}
          <div className="lg:col-span-2 xl:col-span-2 bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-4" style={{ color: '#3674B5' }}>
              Product Information
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Title
                </label>
                <Input 
                  type="text" 
                  placeholder="Enter product name" 
                  className="w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea 
                  placeholder="Describe your product..."
                  className="w-full min-h-[100px] p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  style={{ '--tw-ring-color': '#578FCA' }}
                />
              </div>
            </div>
          </div>

          {/* Media Upload */}
          <div className="xl:row-span-2 bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-4" style={{ color: '#3674B5' }}>
              Product Media
            </h2>
            <div 
              className="border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all hover:border-solid"
              style={{ 
                borderColor: '#578FCA',
                backgroundColor: '#F5F0CD10'
              }}
            >
              <div className="flex flex-col items-center gap-3">
                <div className="p-3 rounded-full" style={{ backgroundColor: '#FADA7A' }}>
                  <ImageUp className="w-8 h-8" style={{ color: '#3674B5' }} />
                </div>
                <div>
                  <p className="font-medium" style={{ color: '#3674B5' }}>
                    Upload Product Images
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Drag and drop or click to browse
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-4" style={{ color: '#3674B5' }}>
              Pricing
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Regular Price
                </label>
                <Input 
                  type="number" 
                  placeholder="0.00" 
                  className="focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sale Price
                </label>
                <Input 
                  type="number" 
                  placeholder="0.00" 
                  className="focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Stock Management */}
          <div className="lg:col-span-1 bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold" style={{ color: '#3674B5' }}>
                Stock Management
              </h2>
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-700">
                  Track inventory
                </span>
                <Switch 
                  checked={toggleValue}
                  onCheckedChange={handleToggle}
                  className="data-[state=checked]:bg-blue-600"
                />
              </div>
            </div>
            
            {toggleValue && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    SKU
                  </label>
                  <Input 
                    type="text" 
                    placeholder="Enter SKU" 
                    className="focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Stock Quantity
                  </label>
                  <Input 
                    type="number" 
                    placeholder="0" 
                    className="focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Variants */}
          <div className="lg:col-span-2 xl:col-span-3 bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold" style={{ color: '#3674B5' }}>
                Product Variants
              </h2>
              <button 
                className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all hover:shadow-md"
                style={{ 
                  backgroundColor: '#FADA7A',
                  color: '#3674B5'
                }}
              >
                <Plus className="w-4 h-4" />
                Add Option
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-2">
              Add variants like size, color, or material
            </p>
          </div>

          {/* Action Buttons */}
          <div className="lg:col-span-2 xl:col-span-3 flex flex-col sm:flex-row gap-4 pt-4">
            <NavLink to='/dashboard/products'>
            <button 
              className="flex-1 py-3 px-6 rounded-lg font-semibold text-white transition-all hover:shadow-lg hover:scale-[1.02] min-w-[200px]"
              style={{ backgroundColor: '#3674B5' }}
              >
              Create Product
            </button>
              </NavLink>
            <button 
              className="flex-1 sm:flex-none px-6 py-3 rounded-lg font-semibold border-2 transition-all hover:shadow-lg min-w-[150px]"
              style={{ 
                borderColor: '#578FCA',
                color: '#578FCA'
              }}
            >
              Save Draft
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProduct;