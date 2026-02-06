const express = require('express');
const app = express();
const fs = require('fs');
const excel = require('exceljs');

// Serve the HTML form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Handle form submission
app.post('/submit-form', (req, res) => {
    const formData = req.body;

    // Write form data to Excel file
    const workbook = new excel.Workbook();
    const worksheet = workbook.addWorksheet('Data');

    // Add header row
    worksheet.addRow(['Name', 'Email']);

    // Add data row
    worksheet.addRow([formData.name, formData.email]);

    const filePath = __dirname + '/data.xlsx';

    workbook.xlsx.writeFile(filePath)
    .then(() => {
        console.log('Excel file created successfully.');
        res.json({ message: 'Form data submitted successfully.' });
    })
    .catch(error => {
        console.error('Error creating Excel file:', error);
        res.status(500).json({ error: 'Error submitting form data.' });
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});