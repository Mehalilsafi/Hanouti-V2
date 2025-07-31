


import EmptyLead from "./EmptyLead";
import LeadTable from "./LeadTable";

function LeadsHero() {
  const Leads:string[]=[""]
  return (
    <div className="">
      {
        Leads.length > 0 ? <LeadTable/> : <EmptyLead/> 
      }
    
    </div>
  );
}

export default LeadsHero;
