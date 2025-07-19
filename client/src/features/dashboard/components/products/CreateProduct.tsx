import { Input } from "@/components/ui/input";

import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { Plus, ImageUp } from "lucide-react";
function CreateProduct() {
  const [toggelValue, setTggelValue] = useState(true);

  function HandleToggle() {
    setTggelValue(!toggelValue);
  }
  return (
    <div className="p-5 flex flex-col gap-4">
      <h1>Add product </h1>
      <div className="p-3 flex flex-col gap-3 bg-gray-200">
        <h1>titel </h1>
        <Input type="text" placeholder="product name" />
        <h1>descreptoon</h1>

        
      </div>
      <div className="p-3 flex flex-col gap-3 bg-gray-200">
        <h1>media </h1>
        <div className="flex justify-center items-center">
          <ImageUp />
          <p>Add Media</p>
        </div>
      </div>
      <div className="p-3 flex flex-col gap-3 bg-gray-200">
        <h1>pricing </h1>
        <div className="flex gap-3">
          <Input type="text" placeholder="price here " />
          <Input type="text" placeholder="reduced price here " />
        </div>
      </div>
      <div className="p-3 flex flex-col gap-3 bg-gray-200">
        <div className="flex justify-between">
          <h1>stock mangmant </h1>
          <Switch onClick={HandleToggle} />
        </div>
        {toggelValue && (
          <div className="flex gap-3 items-center ">
            <Input type="text" placeholder="SKU here " />
            <Input type="text" placeholder=" Stock Quantity  here " />
          </div>
        )}
      </div>
      <div className="p-3 flex flex-col gap-3 bg-gray-200">
        <div className="flex justify-between">
          <h1>Variants</h1>
          <div className="flex items-center gap-2">
            <Plus />
            <p> Add option like size or color </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProduct;
