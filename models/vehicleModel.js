createVehicles = (objs) => {
    let insert='INSERT INTO vehicles \
    (UUID,VIN,MAKE,MODEL,MILEAGE,YEAR,PRICE,ZIPCODE,CREATEDATE,UPDATEDATE) \
    VALUES (?,?,?,?,?,?,?,?,?,?)';
    const db = new sqlite3.Database('./database/database.db', (err) => {
        if (err) {
            console.error("Erro opening database " + err.message);
        } else {
        objs.forEach((item,index)=>{
            db.run(insert, [item.UUID, item.VIN,item.MAKE,item.MODEL,item.MILEAGE,
                            item.YEAR,item.PRICE,item.ZIPCODE,item.CREATEDATE,item.UPDATEDATE]);
            });
        }
    });
}
getAllVehicles = () => {
    let insert='Select * from vehicles';
    const db = new sqlite3.Database('./database/database.db', (err) => {
        if (err) {
            console.error("Erro opening database " + err.message);
        } else {
        objs.forEach((item,index)=>{
            db.run(insert, [item.UUID, item.VIN,item.MAKE,item.MODEL,item.MILEAGE,
                            item.YEAR,item.PRICE,item.ZIPCODE,item.CREATEDATE,item.UPDATEDATE]);
            });
        }
    });
}