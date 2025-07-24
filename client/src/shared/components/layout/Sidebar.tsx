import useStore from "@/shared/store/useSideBarStore";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  TrendingUp,
  AppWindow,
  Landmark,
  Truck,
  BarChart,
  Users,
  X, 
  Settings ,
} from "lucide-react";

function Sidebar() {
  const { isOpen, closeSidebar } = useStore();

  const links = [
    {
      path: "",
      name: "dashboard",
      icon: LayoutDashboard,
    },

    {
      path: "products",
      name: "Products",
      icon: Package,
    },
    {
      path: "orders",
      name: "Orders",
      icon: ShoppingCart,
    },
     {
      path: "leads",
      name: "Leads",
      icon: Users,
    },
     {
      path: "landing",
      name: "Landing",
      icon: Landmark,
    },
      {
      path: "analytics",
      name: "Analytics",
      icon: BarChart,
    },

    {
      path: "sales-boost",
      name: "Sales Boost",
      icon: TrendingUp,
    },
   
   
    {
      path: "delivery",
      name: "Delivery Price",
      icon: Truck,
    },
     {
      path: "apps",
      name: "Apps",
      icon: AppWindow,
    },
  
   
  ];

  return (
    <aside
      className={`fixed top-0 left-0 z-50 w-64 h-full 
                  bg-gradient-to-b from-brand-primary to-brand-secondary 
                  dark:from-brand-secondary dark:to-brand-primary 
                  text-white dark:text-brand-highlight 
                  shadow-soft-lg 
                  transition-transform duration-300 ease-in-out 
                  ${isOpen ? "translate-x-0" : "-translate-x-full"} 
                  md:translate-x-0 md:static md:h-svh `} 
    >
    
      <div className="p-4 flex justify-between items-center md:hidden h-16 border-b border-white/20">
        <p className="text-2xl font-extrabold">hanouti</p>
        <button 
          onClick={closeSidebar} 
          className="text-white hover:text-brand-highlight hover:bg-white/20 p-2 rounded-md transition-colors duration-200"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <nav className="p-4 flex flex-col gap-2 font-sans">
        {links.map((link) => {

          const Icon = link.icon; 
          const isDashboard = link.path === "";
          return (
            <NavLink
              key={link.path}
              to={`/dashboard/${link.path}`}
                end={isDashboard}
              onClick={closeSidebar} 
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg text-lg font-medium transition-all duration-200 
                ${
                  isActive
                    ? "bg-brand-highlight text-brand-primary shadow-sm" 
                    : "text-white hover:bg-white/10 hover:text-brand-highlight dark:text-brand-accent dark:hover:bg-black/20 dark:hover:text-brand-highlight" 
                }`
              }
            >
              <Icon className="w-6 h-6" /> 
              <span>{link.name}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;