const fs = require('fs');
const path = require('path');
const fastCsv = require('fast-csv');

// Function to replicate second row N times
function replicateSecondRow(inputFile, outputFile, N) {
  const results = [];

  // Read the CSV file with fast-csv
  fs.createReadStream(inputFile)
    .pipe(fastCsv.parse({ headers: true, ignoreEmpty: true, skipRows: 0, trim: true }))
    .on('error', error => console.error(error))
    .on('data', row => {
      results.push(row);
    })
    .on('end', rowCount => {
      if (results.length > 1) {
        // Get the second row
        const secondRow = results[1];

        console.log('Second Row:', secondRow);

        // Prepare the rows to be written
        const dataToWrite = [];
        for (let i = 0; i < N; i++) {
          dataToWrite.push(secondRow);
        }

        // Write the rows to a new CSV file
        const ws = fs.createWriteStream(outputFile);
        fastCsv
          .write(dataToWrite, { headers: Object.keys(secondRow) })
          .pipe(ws)
          .on('finish', () => {
            console.log(`File written successfully with ${N} replicated rows.`);
          })
          .on('error', err => {
            console.error('Error writing to file:', err);
          });
      } else {
        console.error('CSV must contain at least two rows.');
      }
    });
}

// const list_of_files = [1000, 2000, 3500, 5000, 7000, 10000, 15000, 20000, 35000, 40000]; 
const list_of_files = [70000, 90000, 120000, 140000, 170000, 200000]; 

for(let i = 0; i < list_of_files.length; i++){
    const inputFilePath = path.join(__dirname, 'invoice_data.csv');  // Replace with your actual file path
    const outputFilePath = path.join(__dirname, `invoice_data${list_of_files[i]}.csv`); // Replace with your actual output path
    
    replicateSecondRow(inputFilePath, outputFilePath, list_of_files[i]);
}


