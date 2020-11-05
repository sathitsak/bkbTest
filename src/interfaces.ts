export interface result {
  key: string;
  value: number[];
}
export interface value {
  result: string;
  value: number[];
}

export interface key {
  result: string;
  key: string;
}

export interface CalculateProps {
  data: result;
}
