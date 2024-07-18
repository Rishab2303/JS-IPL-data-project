import fs from 'fs'
import readline from 'readline'

const path = "C:/Users/Rishab/Desktop/learning webdevelopment/assesment/Assessment_4/src/data/matches.csv";

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
            const [headers, ...data] = output;

            // const 
            const formattedData = data.map(match => {
                return headers.reduce((acc, current, index) => {
                    acc[current] = match[index];

                    return acc
                }, {})
            });

            // console.log(formattedData)

            resolve(formattedData)

            console.log(formattedData[0])


        });

        readInterface.on("error", (err) => {
            reject("Error reading the CSV file: " + err);
        });
    });
}

matches_summary()


