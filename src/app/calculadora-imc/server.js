//const express = require('express');
//const mysql = require('mysql2');
//const cors = require('cors');
//const bodyParser = require('body-parser');

//const app = express();
//const port = 3000;

//app.use(cors());
//app.use(bodyParser.json());

// Configurar la conexión a la base de datos MySQL
//const db = mysql.createConnection({
  //host: 'localhost',
  //user: 'root', // tu usuario de MySQL
  //password: '', // tu contraseña de MySQL (deja vacío si no tienes)
  //database: 'calculadora_imc'
//});

//db.connect(err => {
 // if (err) {
   // console.error('Error connecting to MySQL:', err);
   // return;
  //}
  //console.log('Connected to MySQL');
//});

// Endpoint para guardar el IMC en la base de datos
//app.post('/api/imc', (req, res) => {
  //const { firstName, lastName, gender, weight, height, bmi, status } = req.body;

  //const query = 'INSERT INTO imc_records (first_name, last_name, gender, weight, height, bmi, status) VALUES (?, ?, ?, ?, ?, ?, ?)';
  //db.query(query, [firstName, lastName, gender, weight, height, bmi, status], (err, result) => {
    //if (err) {
     // console.error('Error inserting data:', err);
     // res.status(500).send('Server Error');
   // } else {
    //  res.send('IMC record saved');
   // }
 // });
//});

// Iniciar el servidor
//app.listen(port, () => {
  //console.log(`Server running on http://localhost:${port}`);
//}); //