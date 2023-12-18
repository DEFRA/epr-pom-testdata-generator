import { producer_pom } from "../dataType/pom_enum";

const sourceFileName = "./pom_scenarios.csv";

export async function createPomArrayAsync(
  scenarioName: String
): Promise<producer_pom[]> {
  const pomArray: producer_pom[] = [];
  const csv = require("csv-parser");
  const fs = require("fs");
  const fileStream = fs.createReadStream(sourceFileName);
  const csvStream = csv();
  fileStream.pipe(csvStream);
  const filteredStream = csvStream.filter(
    (row: any) => row.ScenarioName === scenarioName
  );
  let i = 0;
  for await (const row of filteredStream) {
    i = i + 1;
    pomArray.push(
      new producer_pom(
        i,
        row.ProducerID,
        row.ProducerType,
        row.WasteType,
        row.PackagingCategory,
        row.MaterialType,
        row.MaterialSubType,
        row.From,
        row.To,
        row.Quantitykg,
        row.Quantityunits
      )
    );
  }
  return pomArray;
}

export async function getUniqueScenarioNames(): Promise<String[]> {
  const scenarioNames: String[] = [];
  const csv = require("csv-parser");
  const fs = require("fs");
  const fileStream = fs.createReadStream(sourceFileName);
  const csvStream = csv();
  fileStream.pipe(csvStream);

  for await (const row of csvStream) {
    if (
      row.ScenarioName !== undefined &&
      !row.ScenarioName.startsWith("#") &&
      !scenarioNames.includes(row.ScenarioName)
    ) {
      scenarioNames.push(row.ScenarioName);
    }
  }
  return scenarioNames;
}
