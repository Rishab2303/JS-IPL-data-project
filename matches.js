import fs from 'fs'
import readline from 'readline'

const path = "matches.csv"

export const matches_summary = () => {
    return new Promise((resolve, reject) => {
        const readStream = fs.createReadStream(path);
        const readInterface = readline.createInterface({
            input: readStream
        });

        const output = [];

        readInterface.on("line", (line) => {
            const row = line.split(",");
            output.push(row);
        });

        readInterface.on("close", () => {
            resolve(output);
        });

        readInterface.on("error", (err) => {
            reject("Error reading the CSV file: " + err);
        });
    });
}


