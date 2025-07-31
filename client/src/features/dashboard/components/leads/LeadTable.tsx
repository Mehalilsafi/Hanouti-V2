import { useState } from "react";
import {
  ArrowUpFromLine,
  SquarePen,
  Trash2,
  Search,
  Users,
  UserCheck,
  Heart,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { NavLink } from "react-router-dom";

function LeadTable() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Sample data
  const leads = [
    {
      id: 1,
      name: "Mehalil Safi",
      email: "safiou102003@gmail.com",
      phone: "+213 555 123 456",
      source: "Website",
      status: "New",
      priority: "High",
    },
    {
      id: 2,
      name: "Ahmed Benali",
      email: "ahmed.benali@email.com",
      phone: "+213 555 789 012",
      source: "Social Media",
      status: "Contacted",
      priority: "Medium",
    },
    {
      id: 3,
      name: "Fatima Khadra",
      email: "fatima.khadra@email.com",
      phone: "+213 555 345 678",
      source: "Referral",
      status: "Qualified",
      priority: "High",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "new":
        return "bg-blue-100 text-blue-800";
      case "contacted":
        return "bg-yellow-100 text-yellow-800";
      case "qualified":
        return "bg-green-100 text-green-800";
      case "proposal":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case "high":
        return "bg-red-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8 bg-brand-accent">
      <div className="max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-brand-primary">
              Lead Management
            </h1>
            <p className="text-gray-600 text-sm mt-1">
              Manage and track your sales prospects
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all hover:shadow-md border-2 border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-white">
              <ArrowUpFromLine className="w-4 h-4" />
              <span>Export CSV</span>
            </button>
            <NavLink to="/dashboard/leads/create">
              <Button className="bg-brand-primary text-white hover:bg-brand-secondary transition-all">
                <Plus className="w-4 h-4 mr-2" />
                Create Lead
              </Button>
            </NavLink>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 mb-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
           
            <div className="flex flex-wrap gap-2">
              {[
                { key: "all", label: "All Leads", icon: Users, count: 156 },
                {
                  key: "customer",
                  label: "Customers",
                  icon: UserCheck,
                  count: 89,
                },
                { key: "loyal", label: "Loyal", icon: Heart, count: 23 },
              ].map((filter) => {
                const Icon = filter.icon;
                return (
                  <button
                    key={filter.key}
                    onClick={() => setActiveFilter(filter.key)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                      activeFilter === filter.key
                        ? "bg-brand-primary text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{filter.label}</span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        activeFilter === filter.key
                          ? "bg-white/20 text-white"
                          : "bg-brand-accent text-brand-primary"
                      }`}
                    >
                      {filter.count}
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
                placeholder="Search name, number or email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 focus:ring-2 focus:ring-brand-secondary focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50 border-b border-gray-200">
                  <TableHead className="font-semibold text-brand-primary px-4 py-3 text-left">
                    ID
                  </TableHead>
                  <TableHead className="font-semibold text-brand-primary px-4 py-3 text-left">
                    Lead Information
                  </TableHead>
                  <TableHead className="font-semibold text-brand-primary px-4 py-3 text-left">
                    Contact Details
                  </TableHead>
                  <TableHead className="font-semibold text-brand-primary px-4 py-3 text-left">
                    Source
                  </TableHead>
                  <TableHead className="font-semibold text-brand-primary px-4 py-3 text-left">
                    Status
                  </TableHead>
                  <TableHead className="font-semibold text-brand-primary px-4 py-3 text-left">
                    Priority
                  </TableHead>
                  <TableHead className="font-semibold text-brand-primary px-4 py-3 text-left text-center">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leads.map((lead) => (
                  <TableRow
                    key={lead.id}
                    className="hover:bg-gray-50 transition-colors border-b border-gray-200"
                  >
                    <TableCell className="font-medium text-brand-primary px-4 py-4">
                      #{lead.id.toString().padStart(3, "0")}
                    </TableCell>

                    <TableCell className="px-4 py-4">
                      <div className="flex flex-col">
                        <span className="font-medium text-gray-900">
                          {lead.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          Lead #{lead.id}
                        </span>
                      </div>
                    </TableCell>

                    <TableCell className="px-4 py-4">
                      <div className="flex flex-col space-y-1">
                        <span className="text-sm text-gray-900">
                          {lead.email}
                        </span>
                        <span className="text-sm text-gray-500">
                          {lead.phone}
                        </span>
                      </div>
                    </TableCell>

                    <TableCell className="px-4 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-accent text-brand-primary">
                        {lead.source}
                      </span>
                    </TableCell>

                    <TableCell className="px-4 py-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                          lead.status
                        )}`}
                      >
                        {lead.status}
                      </span>
                    </TableCell>

                    <TableCell className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-3 h-3 rounded-full ${getPriorityColor(
                            lead.priority
                          )}`}
                        ></div>
                        <span className="text-sm text-gray-700">
                          {lead.priority}
                        </span>
                      </div>
                    </TableCell>

                    <TableCell className="px-4 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button className="p-2 rounded-lg hover:bg-blue-50 text-brand-secondary hover:text-brand-primary transition-colors">
                          <SquarePen className="w-4 h-4" />
                        </button>
                        <button className="p-2 rounded-lg hover:bg-red-50 text-red-500 hover:text-red-700 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Table Footer */}
          <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-600">
                Showing <span className="font-medium">1-3</span> of{" "}
                <span className="font-medium">156</span> leads
              </p>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  className="border-brand-secondary text-brand-secondary text-sm px-3 py-1"
                >
                  Previous
                </Button>
                <div className="flex items-center gap-1">
                  <button className="px-3 py-1 rounded bg-brand-primary text-white text-sm">
                    1
                  </button>
                  <button className="px-3 py-1 rounded hover:bg-gray-100 text-gray-700 text-sm">
                    2
                  </button>
                  <button className="px-3 py-1 rounded hover:bg-gray-100 text-gray-700 text-sm">
                    3
                  </button>
                </div>
                <Button
                  variant="outline"
                  className="border-brand-secondary text-brand-secondary text-sm px-3 py-1"
                >
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

export default LeadTable;
