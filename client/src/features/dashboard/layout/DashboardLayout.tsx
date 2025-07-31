
import { Outlet } from "react-router-dom";
import DashboardNav from "@/shared/components/layout/DashboardNav";
import Sidebar from "@/shared/components/layout/Sidebar";
function DashboardLayout() {
  return (
    <div>
      <DashboardNav />

      <div className="flex flex-1">

      <Sidebar />
      <main className="flex-1 overflow-x-auto bg-gradient-to-br from-slate-50 via-brand-accent to-brand-highlight ">
        <Outlet />
      </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
