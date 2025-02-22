import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Hazard } from "@/schema/risk";

import { useFiltersStore } from "@/state/filters";

const HazardSelector = () => {
  const { hazard, setHazard } = useFiltersStore();

  return (
    <div className="flex-1">
      <label className="block text-sm  font-semibold mb-2">Hazard</label>
      <Select onValueChange={setHazard} value={hazard}>
        {/* <SelectTrigger className="w-[180px]"> */}
        <SelectTrigger>
          <SelectValue placeholder="Select Hazard" />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(Hazard).map(([key, value]) => (
            <SelectItem key={key} value={value}>
              {value}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default HazardSelector;
