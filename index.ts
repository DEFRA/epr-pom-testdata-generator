#!/usr/bin/env node

import { createPomArrayAsync, getUniqueScenarioNames } from "./src/pomActor";
import { pomESBFormat, ipomESBFormat } from "./dataType/file_header";

import { writePomCsvFile, writeEsbCsvFile } from "./src/writeCsv";
import { producer_pom, pomESBContent } from "./dataType/pom_enum";
import { randomUUID } from "crypto";

(async () => {
  console.log("------------------------------------");
  console.log("Generating POM files for all scenarios...");
  let scenarioNames = await getUniqueScenarioNames();
  console.log("Scenario Names " + scenarioNames);
  scenarioNames.forEach(async (scenarioName) => {
    await writePomCsvFile(
      "./output/" + scenarioName + ".csv",
      await createPomArrayAsync(scenarioName)
    );
  });

  console.log("------------------------------------");
  console.log("Generate ESB Bus Payloads for specific scenarios...");
  let pomArray: producer_pom[] = [];
  pomArray = await createPomArrayAsync("valid_MT");
  let esbBus: ipomESBFormat = {
    OrganisationId: "0c8e3368-80de-46e0-9a71-f5a64e5b8c33",
    UserId: "2f4ec7ed-58c2-43e0-8c9d-744e66075f8b",
    UserType: 1,
    SubmissionId: randomUUID(),
    ProducerId: "a27bed93-990f-4547-8673-7c050a24d531",
    Lines: pomArray,
  };
  console.log(JSON.stringify(esbBus));

  console.log("Generate ESB Bus Payloads for All scenarios...");
  // create a new array of pomESBCOntent
  let esbBusArray: pomESBContent[] = [];

  // write a for loop to iterate through the scenarioNames array
  for (let i = 0; i < scenarioNames.length; i++) {
    let pomArray: producer_pom[] = [];
    pomArray = await createPomArrayAsync(scenarioNames[i]);
    let sName: String = scenarioNames[i];
    let uId = randomUUID();
    let esbBus: ipomESBFormat = {
      OrganisationId: "0c8e3368-80de-46e0-9a71-f5a64e5b8c33",
      UserId: "2f4ec7ed-58c2-43e0-8c9d-744e66075f8b",
      UserType: 1,
      SubmissionId: uId,
      ProducerId: "a27bed93-990f-4547-8673-7c050a24d531",
      Lines: pomArray,
    };
    esbBusArray.push(new pomESBContent(sName, uId, JSON.stringify(esbBus)));
  }
  console.log({ esbBusArray });
  await writeEsbCsvFile("./output/esbBus.csv", esbBusArray);
})();
