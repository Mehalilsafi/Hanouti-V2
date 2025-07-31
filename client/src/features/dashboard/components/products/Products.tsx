
import EmptyProduct from "./EmptyProduct";
import ProductTable from "./ProductTable";
function Products() {
  const porudcts:string[]=[""]
  return (
    <div className="">
      {
        porudcts.length > 0 ?  <ProductTable/>:  <EmptyProduct/>
      }
    </div>
  );
}

export default Products;
