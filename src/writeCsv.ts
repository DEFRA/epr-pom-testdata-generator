import * as ft from "csv-writer";
import { pomCsvHeader, pomESBHeader } from "../dataType/file_header";
const createCsvWriter = ft.createObjectCsvWriter;

export async function writePomCsvFile(fileName: any, data: any) {
  const csvWriter = createCsvWriter({
    path: fileName,
    header: pomCsvHeader,
  });
  csvWriter.writeRecords(data);
}

export async function writeEsbCsvFile(fileName: any, data: any) {
  const csvWriter = createCsvWriter({
    path: fileName,
    header: pomESBHeader,
  });
  csvWriter.writeRecords(data);
}
