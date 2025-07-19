import { Button } from "@/components/ui/button";


import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Search, AlignJustify, UserCircle2 } from "lucide-react"; 
import useStore from "@/shared/store/useSideBarStore"; 
function DashboardNav() {
  const toggleSideBar = useStore((state) => state.toggleSidebar);

  return (
    
    <div className="flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8 bg-brand-primary dark:bg-brand-secondary shadow-soft border-b border-brand-secondary dark:border-brand-primary">
      
      {/* Mobile Menu Toggle Button */}
      <Button 
        variant="ghost" 
        size="icon" 
        className="md:hidden text-brand-highlight hover:bg-brand-secondary hover:text-brand-highlight dark:text-brand-accent dark:hover:bg-brand-primary dark:hover:text-brand-highlight transition-colors duration-200" 
        onClick={toggleSideBar}
      >
        <AlignJustify className="w-6 h-6" />
      </Button>

      {/* Brand Name (Desktop Only) */}
      <p className="hidden md:block text-2xl font-extrabold text-brand-highlight dark:text-brand-accent">
        hanouti
      </p>

      {/* Search Input */}
      <div className="relative flex items-center flex-grow max-w-sm mx-4"> {/* Added flex-grow and max-w-sm */}
        <Search className="absolute left-3 text-gray-400 dark:text-gray-300" size={20} />
        <Input 
          type="text" 
          placeholder="Search..." 
          className="pl-10 pr-4 py-2 h-10 w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-card text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary transition-all duration-200" 
        />
      </div>

      {/* User Dropdown Menu */}
      <DropdownMenu>
        {/* Re-integrated Avatar as the DropdownMenuTrigger with asChild */}
        <DropdownMenuTrigger asChild> 
          <Avatar className="cursor-pointer w-10 h-10 rounded-full border-2 border-brand-highlight dark:border-brand-accent shadow-sm transition-all duration-200 hover:scale-105">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" /> {/* Example Avatar Image */}
            <AvatarFallback className="bg-brand-accent text-brand-primary text-lg font-bold">
              S
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56 bg-white dark:bg-card rounded-lg shadow-soft border border-gray-200 dark:border-gray-700 p-2">
          {/* User Info in Dropdown */}
          <DropdownMenuLabel className="flex items-center gap-3 p-2 text-brand-primary dark:text-brand-highlight">
            {/* User Icon or Avatar Fallback */}
            <Avatar className="w-9 h-9 rounded-full bg-brand-accent text-brand-primary text-base font-bold">
              <AvatarFallback>S</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="font-semibold">Safi Mehalil</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">safi@example.com</span> {/* Example email */}
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-gray-200 dark:bg-gray-700 my-2" />

          {/* Dropdown Menu Items */}
          <DropdownMenuItem className="flex items-center gap-2 p-2 rounded-md cursor-pointer text-gray-700 dark:text-gray-200 hover:bg-brand-accent/20 dark:hover:bg-brand-primary/20 hover:text-brand-primary dark:hover:text-brand-highlight transition-colors duration-150">
            Billing
          </DropdownMenuItem>

          <DropdownMenuItem className="flex items-center gap-2 p-2 rounded-md cursor-pointer text-gray-700 dark:text-gray-200 hover:bg-brand-accent/20 dark:hover:bg-brand-primary/20 hover:text-brand-primary dark:hover:text-brand-highlight transition-colors duration-150">
            Subscription
          </DropdownMenuItem>
          
          <DropdownMenuSeparator className="bg-gray-200 dark:bg-gray-700 my-2" />
          
          <DropdownMenuItem className="flex items-center gap-2 p-2 rounded-md cursor-pointer text-red-500 dark:text-red-400 hover:bg-red-500/10 dark:hover:bg-red-500/20 transition-colors duration-150">
            Log Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default DashboardNav;