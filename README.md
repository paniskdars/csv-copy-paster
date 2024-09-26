# CSV Row Replication Tool

This Node.js tool reads a CSV file, extracts the second row, and replicates it a specified number of times into a new CSV file. It uses the `fast-csv` library for efficient parsing and writing of CSV files, handling complex cases like quoted fields and multi-line values.

## Prerequisites

Before using this tool, ensure you have the following installed on your machine:

1. **Node.js**: You need Node.js installed to run the JavaScript code.
   - [Download Node.js](https://nodejs.org/)

2. **fast-csv Library**: The tool uses the `fast-csv` library for handling CSV files. You will install it using `npm` (Node's package manager).

## Installation Steps

1. **Clone or Download the Project**: Clone the repository or download the project files to your local machine.

2. **Install Dependencies**:
   - Open your terminal or command prompt.
   - Navigate to the project directory where the script is located.
   - Run the following command to install the required `fast-csv` package:
     ```bash
     npm install fast-csv
     ```

## How to Use

### 1. Prepare Your CSV File

- Ensure your CSV file is properly formatted with headers in the first row and the data starting from the second row onward.
- The second row will be the one that gets replicated in the output CSV.

### 2. Update the Script (Optional)

- In the script, there are two variables that you might want to modify based on your requirements:

   - **`inputFilePath`**: Set the path to your input CSV file.
   - **`outputFilePath`**: Set the path where the output CSV file will be saved.
   - **`N`**: Set the number of times the second row will be replicated.

   ```javascript
   const inputFilePath = path.join(__dirname, 'importer_data1.csv');  // Input CSV file path
   const outputFilePath = path.join(__dirname, 'importer_data1000.csv'); // Output CSV file path
   const N = 10; // Number of times to replicate the second row
   
#### 3. Run the script

- Open the terminal or command prompt.
- Navigate to the directory where the script is located.
- Run the script with the following command:

  ```bash
  node replicate_csv.js

#### 4. Output 

- After running the script, the output CSV file will be generated with the replicated rows at the specified path. For example, if you set the output file to importer_data1000.csv, check that file in your project directory for the results.
- The console will log a message like this when the file is successfully written:

  ```bash
  File written successfully with 10 replicated rows.
