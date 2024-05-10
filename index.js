 const readexcelfile = require('read-excel-file/node')
const fs = require('fs')

//Define variable to store Excel data
let excelData

// Readable Stream.
readexcelfile(fs.createReadStream('input.xlsx')).then((rows) => {
    excelData = rows
    console.log(excelData)
    excelData = excelData.map(innerArray => innerArray.filter(value => value !==null))
    console.log('Data with null values removed:',excelData)
  })

  