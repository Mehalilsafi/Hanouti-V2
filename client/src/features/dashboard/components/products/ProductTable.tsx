import  { useState } from "react";
import { ArrowUpFromLine, SquarePen, Trash2, Search, Package, Eye, Plus, Archive, ShoppingCart, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NavLink } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function ProductTable() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      sku: "WH-001",
      category: "Electronics",
      price: 12500,
      salePrice: 9500,
      stock: 45,
      status: "Active",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop"
    },
    {
      id: 2,
      name: "Organic Cotton T-Shirt",
      sku: "TS-002",
      category: "Clothing",
      price: 3500,
      salePrice: null,
      stock: 128,
      status: "Active",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&h=100&fit=crop"
    },
    {
      id: 3,
      name: "Smart Fitness Watch",
      sku: "SW-003",
      category: "Electronics",
      price: 25000,
      salePrice: 18000,
      stock: 12,
      status: "Low Stock",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop"
    },
    {
      id: 4,
      name: "Handcrafted Leather Wallet",
      sku: "LW-004",
      category: "Accessories",
      price: 8500,
      salePrice: null,
      stock: 0,
      status: "Out of Stock",
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=100&h=100&fit=crop"
    },
    {
      id: 5,
      name: "Professional Camera Lens",
      sku: "CL-005",
      category: "Photography",
      price: 45000,
      salePrice: null,
      stock: 8,
      status: "Draft",
      image: "https://images.unsplash.com/photo-1606983340077-7bd9fda44806?w=100&h=100&fit=crop"
    }
  ];

  const getStatusColor = (status:string) => {
    switch (status.toLowerCase()) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'low stock': return 'bg-yellow-100 text-yellow-800';
      case 'out of stock': return 'bg-red-100 text-red-800';
      case 'draft': return 'bg-gray-100 text-gray-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  const formatPrice = (price:number) => {
    return new Intl.NumberFormat('en-DZ', {
      style: 'currency',
      currency: 'DZD',
      minimumFractionDigits: 0
    }).format(price);
  };

  const getStockStatus = (stock:number) => {
    if (stock === 0) return { label: 'Out of Stock', color: 'text-red-600' };
    if (stock < 20) return { label: 'Low Stock', color: 'text-yellow-600' };
    return { label: 'In Stock', color: 'text-green-600' };
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === "all" || product.status.toLowerCase().replace(" ", "-") === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8 bg-brand-accent">
      <div className="max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-brand-primary">
              Product Management
            </h1>
            <p className="text-gray-600 text-sm mt-1">Manage your product catalog and inventory</p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all hover:shadow-md border-2 border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-white">
              <ArrowUpFromLine className="w-4 h-4" />
              <span>Export CSV</span>
            </button>
            <NavLink to='/dashboard/products/create'>
              <Button className="bg-brand-primary text-white hover:bg-brand-secondary transition-all">
                <Plus className="w-4 h-4 mr-2" />
                Add Product
              </Button>
            </NavLink>
          </div>
        </div>

      
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 mb-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            
            <div className="flex flex-wrap gap-2">
              {[
                { key: 'all', label: 'All Products', icon: Package, count: 248 },
                { key: 'active', label: 'Active', icon: ShoppingCart, count: 195 },
                { key: 'draft', label: 'Draft', icon: Archive, count: 32 },
                { key: 'low-stock', label: 'Low Stock', icon: Tag, count: 21 }
              ].map((filter) => {
                const Icon = filter.icon;
                return (
                  <button
                    key={filter.key}
                    onClick={() => setActiveFilter(filter.key)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                      activeFilter === filter.key
                        ? 'bg-brand-primary text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{filter.label}</span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      activeFilter === filter.key 
                        ? 'bg-white/20 text-white' 
                        : 'bg-brand-accent text-brand-primary'
                    }`}>
                      {filter.count}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search products, SKU, or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 focus:ring-2 focus:ring-brand-secondary focus:border-transparent"
              />
            </div>
          </div>
        </div>

      
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <Table className="w-full">
              <TableHeader>
                <TableRow className="bg-gray-50 hover:bg-gray-50 border-b border-gray-200">
                  <TableHead className="px-4 py-3 text-left font-semibold text-brand-primary">Product</TableHead>
                  <TableHead className="px-4 py-3 text-left font-semibold text-brand-primary">SKU</TableHead>
                  <TableHead className="px-4 py-3 text-left font-semibold text-brand-primary">Category</TableHead>
                  <TableHead className="px-4 py-3 text-left font-semibold text-brand-primary">Price</TableHead>
                  <TableHead className="px-4 py-3 text-left font-semibold text-brand-primary">Stock</TableHead>
                  <TableHead className="px-4 py-3 text-left font-semibold text-brand-primary">Status</TableHead>
                  <TableHead className="px-4 py-3 text-center font-semibold text-brand-primary">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProducts.map((product) => {
                  const stockStatus = getStockStatus(product.stock);
                  return (
                    <TableRow key={product.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <TableCell className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="font-medium text-gray-900 truncate">{product.name}</span>
                            <span className="text-sm text-gray-500">ID: #{product.id.toString().padStart(3, '0')}</span>
                          </div>
                        </div>
                      </TableCell>
                      
                      <TableCell className="px-4 py-4">
                        <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">
                          {product.sku}
                        </span>
                      </TableCell>
                      
                      <TableCell className="px-4 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-accent text-brand-primary">
                          {product.category}
                        </span>
                      </TableCell>
                      
                      <TableCell className="px-4 py-4">
                        <div className="flex flex-col">
                          {product.salePrice ? (
                            <>
                              <span className="font-medium text-green-600">
                                {formatPrice(product.salePrice)}
                              </span>
                              <span className="text-sm text-gray-500 line-through">
                                {formatPrice(product.price)}
                              </span>
                            </>
                          ) : (
                            <span className="font-medium text-gray-900">
                              {formatPrice(product.price)}
                            </span>
                          )}
                        </div>
                      </TableCell>
                      
                      <TableCell className="px-4 py-4">
                        <div className="flex flex-col">
                          <span className="font-medium text-gray-900">{product.stock} units</span>
                          <span className={`text-xs ${stockStatus.color}`}>
                            {stockStatus.label}
                          </span>
                        </div>
                      </TableCell>
                      
                      <TableCell className="px-4 py-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
                          {product.status}
                        </span>
                      </TableCell>
                      
                      <TableCell className="px-4 py-4">
                        <div className="flex items-center justify-center gap-2">
                          <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 hover:text-brand-primary transition-colors">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-2 rounded-lg hover:bg-blue-50 text-brand-secondary hover:text-brand-primary transition-colors">
                            <SquarePen className="w-4 h-4" />
                          </button>
                          <button className="p-2 rounded-lg hover:bg-red-50 text-red-500 hover:text-red-700 transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
          
        
          <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-600">
                Showing <span className="font-medium">1-5</span> of <span className="font-medium">248</span> products
              </p>
              <div className="flex items-center gap-2">
                <Button variant="outline" className="border-brand-secondary text-brand-secondary text-sm px-3 py-1">
                  Previous
                </Button>
                <div className="flex items-center gap-1">
                  <button className="px-3 py-1 rounded bg-brand-primary text-white text-sm">1</button>
                  <button className="px-3 py-1 rounded hover:bg-gray-100 text-gray-700 text-sm">2</button>
                  <button className="px-3 py-1 rounded hover:bg-gray-100 text-gray-700 text-sm">3</button>
                  <span className="px-2 text-gray-400">...</span>
                  <button className="px-3 py-1 rounded hover:bg-gray-100 text-gray-700 text-sm">25</button>
                </div>
                <Button variant="outline" className="border-brand-secondary text-brand-secondary text-sm px-3 py-1">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-green-100">
                <Package className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Products</p>
                <p className="text-xl font-bold text-brand-primary">248</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-100">
                <ShoppingCart className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Active Products</p>
                <p className="text-xl font-bold text-brand-primary">195</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-yellow-100">
                <Tag className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Low Stock</p>
                <p className="text-xl font-bold text-brand-primary">21</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gray-100">
                <Archive className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Draft Products</p>
                <p className="text-xl font-bold text-brand-primary">32</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductTable;