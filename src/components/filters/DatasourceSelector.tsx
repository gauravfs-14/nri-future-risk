import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Datasource } from "@/schema/risk";

import { useFiltersStore } from "@/state/filters";

const DatasourceSelector = () => {
  const { datasource, setDatasource } = useFiltersStore();

  return (
    <div className="flex-1">
      <label className="block text-sm  font-semibold mb-2">Datasource</label>
      <Select onValueChange={setDatasource} value={datasource}>
        <SelectTrigger>
          <SelectValue placeholder="Select Datasource" />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(Datasource).map(([key, value]) => (
            <SelectItem key={key} value={value}>
              {value}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default DatasourceSelector;
