const express = require('express')
//const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const initRoutes = require("./routers/vehicleRouter");
const apiPort = 3000

global.__basedir = __dirname + "/";

app.use(express.urlencoded({ extended: true }));
//app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
//app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({data:"HELLO WORLD", success:true});
})

initRoutes(app);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))