export interface PredictedRenovationResponse {
  result: PredictRenovationResult;
}
interface RenovationItem {
  name: string;
  renovated: boolean;
  details: string[];
  confidence: number;
}
interface PredictRenovationResult {
  items: RenovationItem[];
  summary: string[];
  raw_text: string;
  generated_at: string;
}
