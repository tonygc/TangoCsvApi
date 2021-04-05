const fs = require("fs");
const csv = require("fast-csv");
const sqlite3 = require('sqlite3')

//action to upload records
const upload = async (req, res) => {
  try {
    if (req.file == undefined) {
      return res.status(400).json({message:"Please upload a CSV file!"});
    }

    let tutorials = [];
    let path = __basedir + "/resources/static/assets/uploads/" + req.file.filename;

    fs.createReadStream(path)
      .pipe(csv.parse({ headers: true }))
      .on("error", (error) => {
        throw error.message;
      })
      .on("data", (row) => {
        tutorials.push(row);
      })
      .on("end", () => {
        let insert='INSERT INTO vehicles \
        (UUID,VIN,MAKE,MODEL,MILEAGE,YEAR,PRICE,ZIPCODE,CREATEDATE,UPDATEDATE) \
        VALUES (?,?,?,?,?,?,?,?,?,?)';
        const db = new sqlite3.Database('./database/database.db', (err) => {
            if (err) {
                console.error("Erro opening database " + err.message);
            } else {
            tutorials.forEach((item,index)=>{
                db.run(insert, [item.UUID, item.VIN,item.MAKE,item.MODEL,item.MILEAGE,
                                item.YEAR,item.PRICE,item.ZIPCODE,item.CREATEDATE,item.UPDATEDATE]);
                });
                
                //delete file
                fs.unlinkSync(path);
                res.status(200).send({
                    recordsUpload:tutorials.length,
                    message:
                    "Uploaded the file successfully: " + req.file.originalname
                });
            }
        });
      });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Could not upload the file: " + req.file.originalname,
    });
  }
};

//action to get all records
const getTutorials = (req, res) => {
    const db = new sqlite3.Database('./database/database.db', (err) => {
        if (err) {
            res.status(400).json({"error":err.message});
        } else {
            db.all("SELECT * FROM vehicles ORDER BY ID DESC", [], (err, rows) => {
                if (err) {
                    res.status(400).json({"error":err.message});
                    return;
                }
                res.status(200).json({numberRecords:rows.length,data:rows});
            });
        }
    });
};

module.exports = {
  upload,
  getTutorials
};