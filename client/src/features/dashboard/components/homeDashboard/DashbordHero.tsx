import { ListOrdered, Banknote, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; 

function DashbordHero() {
  return (
   
    <div className="w-full p-4 sm:p-6 lg:p-8 font-sans">
      
    
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-primary dark:text-brand-highlight mb-6">
          Account Overview
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       
          <Card className="bg-brand-accent text-brand-primary dark:bg-brand-secondary dark:text-brand-highlight rounded-xl shadow-soft-lg p-6 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-semibold text-brand-primary dark:text-brand-highlight">
                Orders
              </CardTitle>
              <ListOrdered className="h-6 w-6 text-brand-secondary dark:text-brand-highlight/80" /> 
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold mb-1">0</div>
              <p className="text-sm text-brand-secondary dark:text-brand-highlight/70"> 
                0% from last month
              </p>
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
              <p className="text-sm text-brand-accent dark:text-brand-highlight/70"> 
                0% from last month
              </p>
            </CardContent>
          </Card>
          
         
          <Card className="bg-white text-gray-800 dark:bg-card dark:text-foreground rounded-xl shadow-soft-lg p-6 flex flex-col justify-center items-center text-center transition-all duration-300 hover:scale-[1.01] hover:shadow-xl border border-brand-accent/30 dark:border-brand-primary/30">
            <CardTitle className="text-xl font-semibold text-brand-primary dark:text-brand-highlight mb-2">
              Coming Soon
            </CardTitle>
            <p className="text-sm text-gray-600 dark:text-muted-foreground">
              More insights to help you grow!
            </p>
          </Card>
        </div>
      </div>

      <div className="bg-brand-highlight dark:bg-brand-accent rounded-3xl shadow-soft-lg border border-brand-accent/30 p-8 sm:p-10 lg:p-12 max-w-4xl mx-auto text-center flex flex-col items-center justify-center gap-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-primary dark:text-brand-secondary"> 
          No Landing Pages Yet
        </h2>
        <p className="text-lg text-brand-secondary dark:text-brand-primary max-w-2xl leading-relaxed"> 
          Get started by creating your first landing page to attract more customers and boost your sales!
        </p>
        <Button 
          className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-xl shadow-soft hover:from-brand-secondary hover:to-brand-primary transition-all duration-300 group"
        >
          <PlusCircle className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform duration-300" />
          Create Landing Page
        </Button>
      </div>
    </div>
  );
}

export default DashbordHero;