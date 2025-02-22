export type CountyProperties = {
  geo_point_2d: {
    lon: number;
    lat: number;
  };
  GEO_ID: string;
  NAME: string;
  LSAD: string;
  CENSUSAREA: number;
  OBJECTID: string;
  NRI_ID: string;
  STATE: string;
  STATEABBRV: string;
  COUNTY: string;
  STCOFIPS: string;
  CFLD_EALT: string;
  CFLD_EALR: string;
  CFLD_RISKV: number;
  CFLD_RISKR: string;
  CFLD_RISKS: number;
  CFLD_MID_LOWER_HM: number;
  CFLD_MID_LOWER_PRISKS: number;
  CFLD_MID_LOWER_PRISKR: string;
  CFLD_MID_LOWER_PALR: string;
  CFLD_MID_LOWER_DELTAR: string;
  CFLD_MID_HIGHER_HM: number;
  CFLD_MID_HIGHER_PRISKS: number;
  CFLD_MID_HIGHER_PRISKR: string;
  CFLD_MID_HIGHER_PALR: string;
  CFLD_MID_HIGHER_DELTAR: string;
  CFLD_LATE_LOWER_HM: number;
  CFLD_LATE_LOWER_PRISKS: number;
  CFLD_LATE_LOWER_PRISKR: string;
  CFLD_LATE_LOWER_PALR: string;
  CFLD_LATE_LOWER_DELTAR: string;
  CFLD_LATE_HIGHER_HM: number;
  CFLD_LATE_HIGHER_PRISKS: number;
  CFLD_LATE_HIGHER_PRISKR: string;
  CFLD_LATE_HIGHER_PALR: string;
  CFLD_LATE_HIGHER_DELTAR: string;
  DRGT_EALT: number;
  DRGT_EALR: string;
  DRGT_RISKV: number;
  DRGT_RISKR: string;
  DRGT_RISKS: number;
  DRGT_MID_LOWER_HM: number;
  DRGT_MID_LOWER_PRISKS: number;
  DRGT_MID_LOWER_PRISKR: string;
  DRGT_MID_LOWER_PALR: string;
  DRGT_MID_LOWER_DELTAR: string;
  DRGT_MID_HIGHER_HM: number;
  DRGT_MID_HIGHER_PRISKS: number;
  DRGT_MID_HIGHER_PRISKR: string;
  DRGT_MID_HIGHER_PALR: string;
  DRGT_MID_HIGHER_DELTAR: string;
  DRGT_LATE_LOWER_HM: number;
  DRGT_LATE_LOWER_PRISKS: number;
  DRGT_LATE_LOWER_PRISKR: string;
  DRGT_LATE_LOWER_PALR: string;
  DRGT_LATE_LOWER_DELTAR: string;
  DRGT_LATE_HIGHER_HM: number;
  DRGT_LATE_HIGHER_PRISKS: number;
  DRGT_LATE_HIGHER_PRISKR: string;
  DRGT_LATE_HIGHER_PALR: string;
  DRGT_LATE_HIGHER_DELTAR: string;
  EXHT_EALT: number;
  EXHT_EALR: string;
  EXHT_RISKV: number;
  EXHT_RISKR: string;
  EXHT_RISKS: number;
  EXHT_L95_MID_LOWER_HM: number;
  EXHT_L95_MID_LOWER_PRISKS: number;
  EXHT_L95_MID_LOWER_PRISKR: string;
  EXHT_L95_MID_LOWER_PALR: string;
  EXHT_L95_MID_LOWER_DELTAR: string;
  EXHT_L95_MID_HIGHER_HM: number;
  EXHT_L95_MID_HIGHER_PRISKS: number;
  EXHT_L95_MID_HIGHER_PRISKR: string;
  EXHT_L95_MID_HIGHER_PALR: string;
  EXHT_L95_MID_HIGHER_DELTAR: string;
  EXHT_L95_LATE_LOWER_HM: number;
  EXHT_L95_LATE_LOWER_PRISKS: number;
  EXHT_L95_LATE_LOWER_PRISKR: string;
  EXHT_L95_LATE_LOWER_PALR: string;
  EXHT_L95_LATE_LOWER_DELTAR: string;
  EXHT_L95_LATE_HIGHER_HM: number;
  EXHT_L95_LATE_HIGHER_PRISKS: number;
  EXHT_L95_LATE_HIGHER_PRISKR: string;
  EXHT_L95_LATE_HIGHER_PALR: string;
  EXHT_L95_LATE_HIGHER_DELTAR: string;
  EXHT_L99_MID_LOWER_HM: number;
  EXHT_L99_MID_LOWER_PRISKS: number;
  EXHT_L99_MID_LOWER_PRISKR: string;
  EXHT_L99_MID_LOWER_PALR: string;
  EXHT_L99_MID_LOWER_DELTAR: string;
  EXHT_L99_MID_HIGHER_HM: number;
  EXHT_L99_MID_HIGHER_PRISKS: number;
  EXHT_L99_MID_HIGHER_PRISKR: string;
  EXHT_L99_MID_HIGHER_PALR: string;
  EXHT_L99_MID_HIGHER_DELTAR: string;
  EXHT_L99_LATE_LOWER_HM: number;
  EXHT_L99_LATE_LOWER_PRISKS: number;
  EXHT_L99_LATE_LOWER_PRISKR: string;
  EXHT_L99_LATE_LOWER_PALR: string;
  EXHT_L99_LATE_LOWER_DELTAR: string;
  EXHT_L99_LATE_HIGHER_HM: number;
  EXHT_L99_LATE_HIGHER_PRISKS: number;
  EXHT_L99_LATE_HIGHER_PRISKR: string;
  EXHT_L99_LATE_HIGHER_PALR: string;
  EXHT_L99_LATE_HIGHER_DELTAR: string;
  EXHT_N95_MID_LOWER_HM: number;
  EXHT_N95_MID_LOWER_PRISKS: number;
  EXHT_N95_MID_LOWER_PRISKR: string;
  EXHT_N95_MID_LOWER_PALR: string;
  EXHT_N95_MID_LOWER_DELTAR: string;
  EXHT_N95_MID_HIGHER_HM: number;
  EXHT_N95_MID_HIGHER_PRISKS: number;
  EXHT_N95_MID_HIGHER_PRISKR: string;
  EXHT_N95_MID_HIGHER_PALR: string;
  EXHT_N95_MID_HIGHER_DELTAR: string;
  EXHT_N95_LATE_LOWER_HM: number;
  EXHT_N95_LATE_LOWER_PRISKS: number;
  EXHT_N95_LATE_LOWER_PRISKR: string;
  EXHT_N95_LATE_LOWER_PALR: string;
  EXHT_N95_LATE_LOWER_DELTAR: string;
  EXHT_N95_LATE_HIGHER_HM: number;
  EXHT_N95_LATE_HIGHER_PRISKS: number;
  EXHT_N95_LATE_HIGHER_PRISKR: string;
  EXHT_N95_LATE_HIGHER_PALR: string;
  EXHT_N95_LATE_HIGHER_DELTAR: string;
  EXHT_N99_MID_LOWER_HM: number;
  EXHT_N99_MID_LOWER_PRISKS: number;
  EXHT_N99_MID_LOWER_PRISKR: string;
  EXHT_N99_MID_LOWER_PALR: string;
  EXHT_N99_MID_LOWER_DELTAR: string;
  EXHT_N99_MID_HIGHER_HM: number;
  EXHT_N99_MID_HIGHER_PRISKS: number;
  EXHT_N99_MID_HIGHER_PRISKR: string;
  EXHT_N99_MID_HIGHER_PALR: string;
  EXHT_N99_MID_HIGHER_DELTAR: string;
  EXHT_N99_LATE_LOWER_HM: number;
  EXHT_N99_LATE_LOWER_PRISKS: number;
  EXHT_N99_LATE_LOWER_PRISKR: string;
  EXHT_N99_LATE_LOWER_PALR: string;
  EXHT_N99_LATE_LOWER_DELTAR: string;
  EXHT_N99_LATE_HIGHER_HM: number;
  EXHT_N99_LATE_HIGHER_PRISKS: number;
  EXHT_N99_LATE_HIGHER_PRISKR: string;
  EXHT_N99_LATE_HIGHER_PALR: string;
  EXHT_N99_LATE_HIGHER_DELTAR: string;
  HRCN_EALT: number;
  HRCN_EALR: string;
  HRCN_RISKV: number;
  HRCN_RISKR: string;
  HRCN_RISKS: number;
  HRCN_MID_LOWER_HM: number;
  HRCN_MID_LOWER_PRISKS: number;
  HRCN_MID_LOWER_PRISKR: string;
  HRCN_MID_LOWER_PALR: string;
  HRCN_MID_LOWER_DELTAR: string;
  HRCN_MID_HIGHER_HM: number;
  HRCN_MID_HIGHER_PRISKS: number;
  HRCN_MID_HIGHER_PRISKR: string;
  HRCN_MID_HIGHER_PALR: string;
  HRCN_MID_HIGHER_DELTAR: string;
  HRCN_LATE_LOWER_HM: number;
  HRCN_LATE_LOWER_PRISKS: number;
  HRCN_LATE_LOWER_PRISKR: string;
  HRCN_LATE_LOWER_PALR: string;
  HRCN_LATE_LOWER_DELTAR: string;
  HRCN_LATE_HIGHER_HM: number;
  HRCN_LATE_HIGHER_PRISKS: number;
  HRCN_LATE_HIGHER_PRISKR: string;
  HRCN_LATE_HIGHER_PALR: string;
  HRCN_LATE_HIGHER_DELTAR: string;
  WFIR_EALT: number;
  WFIR_EALR: string;
  WFIR_RISKV: number;
  WFIR_RISKR: string;
  WFIR_RISKS: number;
  WFIR_MID_LOWER_HM: number;
  WFIR_MID_LOWER_PRISKS: number;
  WFIR_MID_LOWER_PRISKR: string;
  WFIR_MID_LOWER_PALR: string;
  WFIR_MID_LOWER_DELTAR: string;
  WFIR_MID_HIGHER_HM: number;
  WFIR_MID_HIGHER_PRISKS: number;
  WFIR_MID_HIGHER_PRISKR: string;
  WFIR_MID_HIGHER_PALR: string;
  WFIR_MID_HIGHER_DELTAR: string;
  WFIR_LATE_LOWER_HM: number;
  WFIR_LATE_LOWER_PRISKS: number;
  WFIR_LATE_LOWER_PRISKR: string;
  WFIR_LATE_LOWER_PALR: string;
  WFIR_LATE_LOWER_DELTAR: string;
  WFIR_LATE_HIGHER_HM: number;
  WFIR_LATE_HIGHER_PRISKS: number;
  WFIR_LATE_HIGHER_PRISKR: string;
  WFIR_LATE_HIGHER_PALR: string;
  WFIR_LATE_HIGHER_DELTAR: string;
};