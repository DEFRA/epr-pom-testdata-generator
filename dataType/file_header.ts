import { producer_pom } from "./pom_enum";

export const pomCsvHeader = [
  { id: "Sequence", title: "Sequence" },
  { id: "ProducerID", title: "Producer ID" },
  { id: "ProducerType", title: "Producer Type" },
  { id: "WasteType", title: "Waste type" },
  { id: "PackagingCategory", title: "Packaging Category" },
  { id: "MaterialType", title: "Material Type" },
  { id: "MaterialSubType", title: "Material Sub-Type" },
  { id: "From", title: "From (country in UK)" },
  { id: "To", title: "To (country in UK)" },
  { id: "Quantitykg", title: "Quantity (kg)" },
  { id: "Quantityunits", title: "Quantity (units)" },
];

export const pomESBHeader = [
  { id: "ScenarioName", title: "Scenario Name" },
  { id: "SubmissionId", title: "Submission Id" },
  { id: "Payload", title: "ESB Payload" },
];

export const pomESBFormat = {
  OrganisationId: "0c8e3368-80de-46e0-9a71-f5a64e5b8c33",
  UserId: "2f4ec7ed-58c2-43e0-8c9d-744e66075f8b",
  UserType: 1,
  SubmissionId: "a0aacc43-4ac9-4cb6-b4b0-7f837c1623e7",
  ProducerId: "a27bed93-990f-4547-8673-7c050a24d531",
  Lines: "",
};
// create and export class for pomESBFormat
export interface ipomESBFormat {
  OrganisationId: string;
  UserId: string;
  UserType: number;
  SubmissionId: string;
  ProducerId: string;
  Lines: producer_pom[];
}
