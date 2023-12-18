export enum MaterialType {
  wood = "WD",
  steel = "ST",
  papercard = "PC",
  other = "OT",
  plastic = "PL",
}
export enum ProducerType {
  brandOwner = "BO",
  packerFiller = "PF",
  importer = "IM",
  distributor = "DI",
  serviceProvider = "SP",
  onlineMarketplace = "OL",
}
export enum WasteType {
  household = "HH",
  streetBin = "SB",
  reUsablePackaging = "RU",
  wasteOffsetting = "SO",
  wasteBackhauling = "SM",
  totalEprPackaging = "TP",
  nonHousehold = "NH",
  drinksContainer = "DC",
  other = "OT",
}
export enum HomeNation {
  NorthernIreland = "NI",
  Wales = "WS",
  Scotland = "SC",
  England = "EN",
}

export interface pom {
  Sequence: number;
  ProducerID: string;
  ProducerType: ProducerType;
  WasteType: WasteType;
  PackagingCategory: string;
  MaterialType: MaterialType;
  MaterialSubType: string;
  From: string;
  To: string;
  Quantitykg: number;
  Quantityunits: number;
}

// create class for above interface pom
export class producer_pom {
  Sequence: number;
  ProducerID: string;
  ProducerType: ProducerType;
  WasteType: WasteType;
  PackagingCategory: string;
  MaterialType: MaterialType;
  MaterialSubType: string;
  From: string;
  To: string;
  Quantitykg: number;
  Quantityunits: number;
  constructor(
    Sequence: number,
    ProducerID: string,
    ProducerType: ProducerType,
    WasteType: WasteType,
    PackagingCategory: string,
    MaterialType: MaterialType,
    MaterialSubType: string,
    From: string,
    To: string,
    Quantitykg: number,
    Quantityunits: number
  ) {
    this.Sequence = Sequence;
    this.ProducerID = ProducerID;
    this.ProducerType = ProducerType;
    this.WasteType = WasteType;
    this.PackagingCategory = PackagingCategory;
    this.MaterialType = MaterialType;
    this.MaterialSubType = MaterialSubType;
    this.From = From;
    this.To = To;
    this.Quantitykg = Quantitykg;
    this.Quantityunits = Quantityunits;
  }
}

let pomArray: producer_pom[] = [];

// create class for pomESBHeder
export class pomESBContent {
  ScenarioName: String;
  SubmissionId: String;
  Payload: String;
  constructor(ScenarioName: String, SubmissionId: String, Payload: String) {
    this.ScenarioName = ScenarioName;
    this.SubmissionId = SubmissionId;
    this.Payload = Payload;
  }
}
// createPomArrayAsync("invalid_pt").then((data) => {
//   pomArray = data;
//   pomArray.forEach((pom) => {
//     pom.ProducerID = "ABCDEF";
//   });

//   console.log(pomArray);
// });

// console.log("=-------");
// createPomArrayAsync("valid_pt").then((data) => {
//   pomArray = data;
//   pomArray.forEach((pom) => {
//     pom.ProducerID = "123456789";
//   });
//   console.log(pomArray);
// });

// read csv file and create an array of objects
// const pomArray: producer_pom[] = createPomArray();

// write async main function
async () => {
  console.log("hello");
};
