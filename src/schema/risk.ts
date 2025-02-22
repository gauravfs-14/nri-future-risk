export enum Rating {
  PALR = "Projected Annual Loss",
  PRISK = "Projected Risk Rating",
  HM = "Hazard Multiplier",
}

export enum Hazard {
  WFIR = "Wildfire",
  HRCN = "Hurricane",
  EXHT = "Extreme Heat",
  DRGT = "Drought",
  CFLD = "Coastal Flooding",
}

export enum Scenario {
  BASE = "Base",
  MID_LOWER = "Mid-Century Lower",
  LATE_LOWER = "Late-Century Lower",
  MID_HIGHER = "Mid-Century Higher",
  LATE_HIGHER = "Late-Century Higher",
}

export enum Datasource {
  L95 = "LOCA 95th",
  L99 = "LOCA 99th",
  N95 = "NEX 95th",
  N99 = "NEX 99th",
}
