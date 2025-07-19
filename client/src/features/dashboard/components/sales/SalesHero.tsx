
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

function SalesHero() {
  return (
    <div className="min-h-screen flex items-center justify-center  font-sans">
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-soft-lg border border-brand-accent/30 p-8 sm:p-10 lg:p-12 w-full max-w-lg mx-auto text-center flex flex-col items-center justify-center gap-6">
        <h3 className="font-extrabold text-3xl sm:text-4xl text-brand-primary dark:text-brand-highlight">
      No bundles created yet
        </h3>

        <p className="text-lg text-brand-secondary dark:text-brand-primary max-w-md leading-relaxed">
    Get started by creating your first bundle!
        </p>

        <Button className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-xl shadow-soft hover:from-brand-secondary hover:to-brand-primary transition-all duration-300 group">
          <PlusCircle className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform duration-300" />
         Create New Bundle
        </Button>
      </div>
    </div>
  )
}

export default SalesHero