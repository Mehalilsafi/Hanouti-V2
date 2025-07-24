import React, { useState } from "react";
import { ArrowLeft, ArrowUpFromLine, SquarePen, Trash2, Search, Plus, ListOrdered } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NavLink } from "react-router-dom";
// Custom Table Components
const Table = ({ children, className = "" }) => (
  <table className={`w-full ${className}`}>{children}</table>
);

const TableHeader = ({ children }) => (
  <thead>{children}</thead>
);

const TableBody = ({ children }) => (
  <tbody>{children}</tbody>
);

const TableRow = ({ children, className = "" }) => (
  <tr className={`border-b border-gray-200 ${className}`}>{children}</tr>
);

const TableHead = ({ children, className = "" }) => (
  <th className={`px-4 py-3 text-left ${className}`}>{children}</th>
);

const TableCell = ({ children, className = "" }) => (
  <td className={`px-4 py-4 ${className}`}>{children}</td>
);

function OrdersTable() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Sample data for orders
  const orders = [
    {
      id: 101,
      customerName: "Alice Smith",
      orderDate: "2025-07-20",
      totalAmount: 150.00,
      currency: "DZD",
      status: "Pending",
      deliveryType: "Home Delivery",
    },
    {
      id: 102,
      customerName: "Bob Johnson",
      orderDate: "2025-07-19",
      totalAmount: 75.50,
      currency: "DZD",
      status: "Shipped",
      deliveryType: "Store Pickup",
    },
    {
      id: 103,
      customerName: "Charlie Brown",
      orderDate: "2025-07-18",
      totalAmount: 220.00,
      currency: "DZD",
      status: "Delivered",
      deliveryType: "Express Delivery",
    },
    {
      id: 104,
      customerName: "Diana Miller",
      orderDate: "2025-07-17",
      totalAmount: 50.00,
      currency: "DZD",
      status: "Cancelled",
      deliveryType: "Home Delivery",
    },
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'shipped': return 'bg-blue-100 text-blue-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getFilterCount = (filterKey) => {
    if (filterKey === "all") {
      return orders.length;
    }
    return orders.filter(order => order.status.toLowerCase() === filterKey).length;
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          order.id.toString().includes(searchQuery);
    const matchesFilter = activeFilter === "all" || order.status.toLowerCase() === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8" style={{ backgroundColor: '#F5F0CD' }}>
      <div className="max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold" style={{ color: '#3674B5' }}>
              Order Management
            </h1>
            <p className="text-gray-600 text-sm mt-1">View and manage customer orders</p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <button 
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all hover:shadow-md border-2"
              style={{ 
                borderColor: '#578FCA',
                color: '#578FCA',
                backgroundColor: 'transparent'
              }}
            >
              <ArrowUpFromLine className="w-4 h-4" />
              <span>Export CSV</span>
            </button>
            <NavLink to="/dashboard/orders/create">

            <Button 
              className="text-white hover:shadow-lg transition-all"
              style={{ backgroundColor: '#3674B5' }}
              >
              <Plus className="w-4 h-4 mr-2" />
              Create Order
            </Button>
              </NavLink>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 mb-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {[
                { key: 'all', label: 'All Orders', icon: ListOrdered },
                { key: 'pending', label: 'Pending', icon: ListOrdered },
                { key: 'shipped', label: 'Shipped', icon: ListOrdered },
                { key: 'delivered', label: 'Delivered', icon: ListOrdered },
                { key: 'cancelled', label: 'Cancelled', icon: ListOrdered }
              ].map((filter) => {
                const Icon = filter.icon;
                return (
                  <button
                    key={filter.key}
                    onClick={() => setActiveFilter(filter.key)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                      activeFilter === filter.key
                        ? 'text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    style={activeFilter === filter.key ? { backgroundColor: '#3674B5' } : {}}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{filter.label}</span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      activeFilter === filter.key 
                        ? 'bg-white/20 text-white' 
                        : 'bg-brand-accent text-brand-primary' // This class needs to be defined or replaced with inline styles
                    }`}
                    style={activeFilter !== filter.key ? {backgroundColor: '#F5F0CD', color: '#3674B5'} : {}}
                    >
                      {getFilterCount(filter.key)}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search orders by name or ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="font-semibold" style={{ color: '#3674B5' }}>Order ID</TableHead>
                  <TableHead className="font-semibold" style={{ color: '#3674B5' }}>Customer Name</TableHead>
                  <TableHead className="font-semibold" style={{ color: '#3674B5' }}>Order Date</TableHead>
                  <TableHead className="font-semibold" style={{ color: '#3674B5' }}>Total Amount</TableHead>
                  <TableHead className="font-semibold" style={{ color: '#3674B5' }}>Status</TableHead>
                  <TableHead className="font-semibold" style={{ color: '#3674B5' }}>Delivery Type</TableHead>
                  <TableHead className="font-semibold text-center" style={{ color: '#3674B5' }}>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredOrders.length > 0 ? (
                  filteredOrders.map((order) => (
                    <TableRow key={order.id} className="hover:bg-gray-50 transition-colors">
                      <TableCell className="font-medium" style={{ color: '#3674B5' }}>
                        #{order.id.toString().padStart(4, '0')}
                      </TableCell>
                      
                      <TableCell>
                        <span className="font-medium text-gray-900">{order.customerName}</span>
                      </TableCell>
                      
                      <TableCell>
                        <span className="text-sm text-gray-700">{order.orderDate}</span>
                      </TableCell>
                      
                      <TableCell>
                        <span className="font-medium text-gray-900">{order.totalAmount.toFixed(2)} {order.currency}</span>
                      </TableCell>
                      
                      <TableCell>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                      </TableCell>

                      <TableCell>
                        <span className="text-sm text-gray-700">{order.deliveryType}</span>
                      </TableCell>
                      
                      <TableCell>
                        <div className="flex items-center justify-center gap-2">
                          <button className="p-2 rounded-lg hover:bg-blue-50" style={{ color: '#578FCA' }}>
                            <SquarePen className="w-4 h-4" />
                          </button>
                          <button className="p-2 rounded-lg hover:bg-red-50 text-red-500 hover:text-red-700 transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan="7" className="text-center py-8 text-gray-500">
                      No orders found matching your criteria.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          
          {/* Table Footer */}
          <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-600">
                Showing <span className="font-medium">1-{filteredOrders.length}</span> of <span className="font-medium">{orders.length}</span> orders
              </p>
              <div className="flex items-center gap-2">
                <Button variant="outline" className="text-sm px-3 py-1" style={{ borderColor: '#578FCA', color: '#578FCA' }}>
                  Previous
                </Button>
                <div className="flex items-center gap-1">
                  <button className="px-3 py-1 rounded text-white text-sm" style={{ backgroundColor: '#3674B5' }}>1</button>
                  <button className="px-3 py-1 rounded hover:bg-gray-100 text-gray-700 text-sm">2</button>
                  <button className="px-3 py-1 rounded hover:bg-gray-100 text-gray-700 text-sm">3</button>
                </div>
                <Button variant="outline" className="text-sm px-3 py-1" style={{ borderColor: '#578FCA', color: '#578FCA' }}>
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrdersTable;