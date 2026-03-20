import type { PhotoListing } from "./PhotoListing";

export interface PhotoClassification {
  label: string;
  confidence: number;
}

export interface ClassifiedPhotoListing extends PhotoListing {
  classification: PhotoClassification;
}