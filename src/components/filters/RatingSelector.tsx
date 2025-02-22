import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Rating, Scenario } from "@/schema/risk";

import { useFiltersStore } from "@/state/filters";

const RatingSelector = () => {
  const { scenario, rating, setRating } = useFiltersStore();

  return (
    <div className="flex-1">
      <label className="block text-sm font-semibold mb-2">Rating</label>
      <Select onValueChange={setRating} value={rating}>
        <SelectTrigger>
          <SelectValue placeholder="Select Rating" />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(Rating)
            .filter(([key, value]) =>
              scenario === Scenario.BASE ? value !== Rating.HM : true
            )
            .map(([key, value]) => (
              <SelectItem key={key} value={value}>
                {value}
              </SelectItem>
            ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default RatingSelector;
