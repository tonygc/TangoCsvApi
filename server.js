const express = require('express')
const sqlite3 = require('sqlite3')
const cors = require('cors')
const app = express()
const initRoutes = require("./routers/vehicleRouter");
const apiPort = 3000

global.__basedir = __dirname + "/";

app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.get('/', (req, res) => {
    res.json({data:"HELLO WORLD", success:true});
})

initRoutes(app);

const db = new sqlite3.Database('./database/database.db', (err) => {
    if (err) {
        //console.error("Erro opening database " + err.message);
    } else {

        db.run('CREATE TABLE vehicles( \
            id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,\
            UUID NVARCHAR(100)  NOT NULL,\
            VIN NVARCHAR(100)  NOT NULL,\
            MAKE NVARCHAR(100),\
            MODEL NVARCHAR(100),\
            MILEAGE NVARCHAR(100),\
            YEAR NVARCHAR(100),\
            PRICE NVARCHAR(100),\
            ZIPCODE NVARCHAR(100),\
            CREATEDATE NVARCHAR(100),\
            UPDATEDATE NVARCHAR(100)\
        )', (err) => {
            if (err) {
                //console.log("Table already exists.");
            }
            // let insert = 'INSERT INTO employees (last_name, first_name, title, address, country_code) VALUES (?,?,?,?,?)';
            // db.run(insert, ["Chandan", "Praveen", "SE", "Address 1", 1]);
            // db.run(insert, ["Samanta", "Mohim", "SSE", "Address 2", 1]);
            // db.run(insert, ["Gupta", "Pinky", "TL", "Address 3", 1]);
        });
    }
});

module.exports = app.listen(apiPort);