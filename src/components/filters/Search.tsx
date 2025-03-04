import { ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { Feature, Geometry } from "geojson";

import { CountyProperties } from "@/schema/county";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useCountyStore } from "@/state/county";
import { useCounties } from "@/clients/api";

const Search = () => {
  const [open, setOpen] = useState(false);

  const { selectedCounty, setSelectedCounty } = useCountyStore();
  const { data } = useCounties();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          {selectedCounty
            ? `${selectedCounty.COUNTY}, TX`
            : "Select Texas County"}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0" align="start">
        <Command className="rounded-lg border shadow-md lg:min-w-[450px]">
          <CommandInput placeholder="Search Texas Counties" />
          <CommandList>
            <CommandEmpty>No Texas counties found.</CommandEmpty>
            {data?.features && (
              <CommandGroup heading="Texas Counties">
                {data.features.map(
                  (feature: Feature<Geometry, CountyProperties>) => (
                    <CommandItem
                      key={feature.properties.STCOFIPS}
                      onSelect={() => {
                        setSelectedCounty(feature.properties);
                        setOpen(false);
                      }}
                    >
                      <span>{feature.properties.COUNTY}, TX</span>
                    </CommandItem>
                  )
                )}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default Search;
