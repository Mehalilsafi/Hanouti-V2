import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { SquareMousePointer, ChevronDown, BarChart3, CalendarDays } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import OrdersAnlaytics from "./OrdersAnlaytics";
import OverviewAnlytics from "./OverviewAnlytics";
import LandingAnlaytics from "./LandingAnlaytics";

function AnalyticsHero() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const dateArray: string[] = [
    "Today",
    "LastDay",
    "Last 7 Days",
    "Last 30 Days",
    "All times",
  ];
  const filterArray: string[] = ["Overview", "Orders", "Landing page"];
  const [selectedValue, SetSelectedValue] = useState<string>("Overview");
  const [selectedDateFilter, setSelectedDateFilter] = useState<string>("Today");
  const [showCalendar, setShowCalendar] = useState<boolean>(false);

  function handleDropDpwnFilter(value: string): void {
    SetSelectedValue(value);
  }

  return (
    <div className="min-h-screen  p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 bg-white rounded-2xl p-8 shadow-soft-lg border border-slate-200">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-xl">
              <BarChart3 className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Analytics
              </h1>
              <p className="text-slate-600 text-lg mt-1">Track your performance metrics</p>
            </div>
          </div>
          <div className="flex items-center gap-4">         
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-primary rounded-xl text-white font-semibold transition-all duration-200 shadow-soft-lg hover:shadow-soft transform hover:-translate-y-1">
                <span className="capitalize">{selectedValue.toLowerCase()}</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white rounded-xl shadow-xl border border-slate-200">
                <DropdownMenuLabel className="text-slate-600 font-semibold px-4 py-2">
                  Select View
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {filterArray.map((ele, index) => {
                  return (
                    <DropdownMenuItem
                      key={index}
                      onClick={() => handleDropDpwnFilter(ele)}
                      className={`mx-2 my-1 px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 ${
                        selectedValue === ele 
                          ? 'bg-brand-accent text-brand-primary font-semibold' 
                          : 'hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      {ele}
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>

           
            <button
              onClick={() => setShowCalendar(!showCalendar)}
              className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-slate-200 hover:border-brand-primary rounded-xl text-slate-700 font-semibold transition-all duration-200 shadow-soft hover:shadow-soft-lg"
            >
              <CalendarDays className="h-4 w-4" />
              <span>Calendar</span>
            </button>
          </div>
        </div>

        
        {showCalendar && (
          <div className="bg-white rounded-2xl p-6 shadow-soft-lg border border-slate-200 transition-all duration-300">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-lg border-0 mx-auto"
            />
          </div>
        )}

     
        <div className="bg-white rounded-2xl p-6 shadow-soft-lg border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Time Range</h3>
          <div className="flex flex-wrap gap-3">
            {dateArray.map((ele, index) => {
              const isSelected = selectedDateFilter === ele;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedDateFilter(ele)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:-translate-y-1 ${
                    isSelected
                      ? 'bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-soft-lg'
                      : 'bg-brand-accent hover:bg-brand-highlight text-brand-primary shadow-soft hover:shadow-soft-lg'
                  }`}
                >
                  {ele}
                </button>
              );
            })}
          </div>
        </div>

    
        <div className="bg-white rounded-2xl shadow-soft-lg border border-slate-200 min-h-96">
          <div className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-12 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full"></div>
              <h2 className="text-2xl font-bold text-slate-800">
                {selectedValue} Analytics
              </h2>
            </div>
            
            <div className="bg-gradient-to-r from-brand-accent to-brand-highlight rounded-xl p-6">
              {selectedValue === "Overview" && <OverviewAnlytics />}
              {selectedValue === "Orders" && <OrdersAnlaytics />}
              {selectedValue === "Landing page" && <LandingAnlaytics />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsHero;