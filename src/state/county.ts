import { create } from 'zustand';

import { CountyProperties } from '@/schema/county';

interface HazardStore {
  selectedHazard: string;
  setHazard: (hazard: string) => void;
}

export const useHazardStore = create<HazardStore>((set) => ({
  selectedHazard: "CFLD",
  setHazard: (selectedHazard) => set({ selectedHazard }),
}));

interface ScenarioStore {
  selectedScenario: string;
  setScenario: (setScenario: string) => void;
}

export const useScenarioStore = create<ScenarioStore>((set) => ({
  selectedScenario: "MID",
  setScenario: (selectedScenario) => set({ selectedScenario }),
}));

interface MultiplierStore {
  selectedMultiplier: string;
  setMultiplier: (multiplier: string) => void;
}

export const useMultiplierStore = create<MultiplierStore>((set) => ({
  selectedMultiplier: "HIGH",
  setMultiplier: (selectedMultiplier) => set({ selectedMultiplier }),
}));


interface CountyState {
  selectedCounty: CountyProperties | undefined;
  setSelectedCounty: (selectedCounty: CountyProperties | undefined) => void;
};

export const useCountyStore = create<CountyState>((set) => ({
  selectedCounty: undefined,
  setSelectedCounty: (selectedCounty) => set({ selectedCounty }),
}));
