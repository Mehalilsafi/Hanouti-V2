
import { ListOrdered, Banknote, Users } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
function OverviewAnlytics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-6">
      <Card className="bg-brand-accent text-brand-primary dark:bg-brand-secondary dark:text-brand-highlight rounded-xl shadow-soft-lg p-6 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-xl font-semibold text-brand-primary dark:text-brand-highlight">
            Orders
          </CardTitle>
          <ListOrdered className="h-6 w-6 text-brand-secondary dark:text-brand-highlight/80" />
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold mb-1">0</p>
        </CardContent>
      </Card>

      <Card className="bg-brand-primary text-brand-highlight dark:bg-brand-secondary dark:text-brand-highlight rounded-xl shadow-soft-lg p-6 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-xl font-semibold text-brand-highlight dark:text-brand-highlight">
            Revenue
          </CardTitle>
          <Banknote className="h-6 w-6 text-brand-accent dark:text-brand-highlight/80" />
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold mb-1">
            0 <span className="text-xl font-normal">DZD</span>
          </div>
        </CardContent>
      </Card>
      <Card className="bg-brand-primary text-brand-highlight dark:bg-brand-secondary dark:text-brand-highlight rounded-xl shadow-soft-lg p-6 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-xl font-semibold text-brand-highlight dark:text-brand-highlight">
            Total Traffic
          </CardTitle>
          <Users className="h-6 w-6 text-brand-accent dark:text-brand-highlight/80" />
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold mb-1">0</div>
        </CardContent>
      </Card>
    </div>
  );
}

export default OverviewAnlytics;
