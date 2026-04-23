import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

export class DataProvider {

    static getTestDataFromJson() {
        const absolutePath = path.join(__dirname, '../testdata/logindata.json');

        console.log('Reading JSON from:', absolutePath);

        const data = JSON.parse(fs.readFileSync(absolutePath, 'utf8'));
        return data;
    }

    static getTestDataFromCsv() {
        const absolutePath = path.join(__dirname, '../testdata/logindata.csv');

        console.log('Reading CSV from:', absolutePath);

        const data = parse(fs.readFileSync(absolutePath), {
            columns: true,
            skip_empty_lines: true
        });

        return data;
    }
}