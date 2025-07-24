import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { Nav } from "react-day-picker";
import EmptyProduct from "./EmptyProduct";
import ProductTable from "./ProductTable";
function Products() {
  const porudcts:string=[""]
  return (
    <div className="">
      {
        porudcts.length > 0 ?  <ProductTable/>:  <EmptyProduct/>
      }
    </div>
  );
}

export default Products;
