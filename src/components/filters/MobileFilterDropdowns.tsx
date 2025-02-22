import * as React from "react";
import { ChevronsUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import HazardSelector from "@/components/filters/HazardSelector";
import DatasourceSelector from "@/components/filters/DatasourceSelector";
import ScenarioSelector from "@/components/filters/ScenarioSelector";
import RatingSelector from "@/components/filters/RatingSelector";
import Search from "@/components/filters/Search";

const MobileFilterDropdowns = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[350px] space-y-2"
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">Filters</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>

      <Search />

      <CollapsibleContent className="space-y-2">
        <ScenarioSelector />
        <HazardSelector />
        <DatasourceSelector />
        <RatingSelector />
      </CollapsibleContent>
    </Collapsible>
  );
};

export default MobileFilterDropdowns;
