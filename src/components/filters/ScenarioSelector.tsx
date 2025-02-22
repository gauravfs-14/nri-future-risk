import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Scenario } from "@/schema/risk";

import { useFiltersStore } from "@/state/filters";

const ScenarioSelector = () => {
  const { scenario, setScenario } = useFiltersStore();

  return (
    <div className="flex-1">
      <label className="block text-sm  font-semibold mb-2">Scenario</label>
      <Select onValueChange={setScenario} value={scenario}>
        <SelectTrigger>
          <SelectValue placeholder="Select Scenario" />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(Scenario).map(([key, value]) => (
            <SelectItem key={key} value={value}>
              {value}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default ScenarioSelector;
