import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Trash } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

type ArrayType = {
  name: string;
  isActive: boolean;
  required: boolean;
};

function DefaultSettingsForm() {
  const [ctaText, setCta] = useState("Buy Now");
  const [array, setArray] = useState<ArrayType[]>([
    { name: "Full Name", isActive: true, required: false },
    { name: "Phone Number", isActive: true, required: false },
  ]);
  const [newFieldName, setNewFieldName] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  function handleSwitch(index: number, checked: boolean) {
    setArray((prevArray) =>
      prevArray.map((item, i) =>
        i === index
          ? {
              ...item,
              isActive: checked,
              required: checked ? item.required : false,
            }
          : item
      )
    );
  }

  function handleRequired(index: number) {
    setArray((prevArray) =>
      prevArray.map((item, i) =>
        i === index ? { ...item, required: !item.required } : item
      )
    );
  }

  function removeField(index: number) {
    setArray((prevArray) => prevArray.filter((_, i) => i !== index));
  }

  function handleAddField() {
    if (newFieldName.trim()) {
      setArray((prev) => [
        ...prev,
        {
          name: newFieldName.trim(),
          isActive: true,
          required: false,
        },
      ]);
      setNewFieldName("");
      setIsDialogOpen(false);
    }
  }

  function handleCancel() {
    setNewFieldName("");
    setIsDialogOpen(false);
  }

  return (
    <>
      
      <div className="flex flex-col gap-5 mt-5">
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">CTA Button</h2>
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="text"
              placeholder="Enter your CTA button text"
              value={ctaText}
              onChange={(e) => setCta(e.target.value)}
              className="flex-1"
            />
            <Button className="bg-brand-primary hover:bg-brand-secondary text-white px-6 py-2 transition-colors duration-200">
              {ctaText}
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Form Fields
          </h2>
          <div className="space-y-3">
            {array.map((ele, index) => (
              <div key={index} className="group">
                <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center p-4 border border-gray-200 rounded-lg hover:border-brand-secondary transition-colors duration-200">
                  {/* Left section - Switch and name */}
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <Switch
                      checked={ele.isActive}
                      onCheckedChange={(checked) => handleSwitch(index, checked)}
                      className="data-[state=checked]:bg-brand-primary"
                    />
                    <span
                      className={`font-medium transition-colors duration-200 ${
                        ele.isActive ? "text-gray-800" : "text-gray-400"
                      }`}
                    >
                      {ele.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <span
                        className={`text-sm ${
                          ele.isActive ? "text-gray-600" : "text-gray-400"
                        }`}
                      >
                        Required
                      </span>
                      <input
                        type="checkbox"
                        checked={ele.required}
                        onChange={() => handleRequired(index)}
                        disabled={!ele.isActive}
                        className={`w-4 h-4 rounded border-gray-300 transition-colors duration-200 ${
                          ele.isActive
                            ? "text-brand-primary focus:ring-brand-primary cursor-pointer"
                            : "text-gray-300 cursor-not-allowed"
                        }`}
                      />
                    </label>

                    <button
                      onClick={() => removeField(index)}
                      className="p-1 text-gray-400 hover:text-red-500 transition-colors duration-200 opacity-0 group-hover:opacity-100"
                      aria-label="Remove field"
                    >
                      <Trash size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {array.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <p>No form fields configured</p>
            </div>
          )}
        </div>

        <div className="bg-brand-accent rounded-xl border border-brand-highlight p-4">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button
                className="w-full bg-brand-primary hover:bg-brand-secondary text-white transition-colors duration-200"
                onClick={() => setIsDialogOpen(true)}
              >
                Add New Field
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="text-brand-primary">Add a custom field</DialogTitle>
                <DialogDescription>
                  Enter a name for your new form field. You can configure its settings after adding it.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <label htmlFor="field-title" className="text-sm font-medium text-gray-700">
                    Field Title
                  </label>
                  <Input
                    id="field-title"
                    type="text"
                    placeholder="Enter field title"
                    value={newFieldName}
                    onChange={(e) => setNewFieldName(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleAddField();
                      }
                    }}
                    className="focus:ring-brand-primary focus:border-brand-primary"
                  />
                </div>
              </div>
              <DialogFooter>
                <div className="flex items-center justify-end gap-3">
                  <Button 
                    variant="outline" 
                    onClick={handleCancel}
                    className="border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </Button>
                  <Button 
                    onClick={handleAddField}
                    disabled={!newFieldName.trim()}
                    className="bg-brand-primary hover:bg-brand-secondary text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Save Field
                  </Button>
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
}

export default DefaultSettingsForm;