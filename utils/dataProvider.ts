import fs from 'fs';
import path from 'path';

export class DataProvider {

    static getTestDataFromJson() {
        const absolutePath = path.join(__dirname, '../testdata/logindata.json');

        console.log('Reading JSON from:', absolutePath);

        const data = JSON.parse(fs.readFileSync(absolutePath, 'utf8'));
        return data;
    }
}