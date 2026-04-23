import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

export class DataProvider {

    static getTestDataFromJson(filePath: string) {
        const absolutePath = path.resolve(process.cwd(), filePath);
        let data: any = JSON.parse(fs.readFileSync(absolutePath, 'utf8'));
        return data;
    }

    static getTestDataFromCsv(filePath: string) {
        const absolutePath = path.resolve(process.cwd(), filePath);
        let data: any = parse(fs.readFileSync(absolutePath), { columns: true, skip_empty_lines: true });
        return data;
    }

}