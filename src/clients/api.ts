import useSWR from "swr";
import type { FeatureCollection, Geometry } from "geojson";
import { CountyProperties } from "@/schema/county";

export const fetchJSON = async (url: string) => {
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
};

export const useCounties = () => {
  const { data, ...rest } = useSWR<
    FeatureCollection<Geometry, CountyProperties>
  >("/combined_nri_counties_borders.json", fetchJSON, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  // Filter for Texas counties only
  const texasData = data
    ? {
        ...data,
        features: data.features.filter(
          (feature) => feature.properties.STATEABBRV === "TX"
        ),
      }
    : data;

  return { data: texasData, ...rest };
};
