import {createRequire} from 'module';

const require = createRequire(import.meta.url);
const mysql = require('mysql');

const client = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "sheet_metal_ledger"
});

client.connect((err) => {

    if (err) throw err;
    console.log('接続完了');

    client.query('CREATE TABLE car_in_stock (id int, entry_person VARCHAR (60), customer VARCHAR (60), receipt_date DATE , delivery_date DATE, car_model VARCHAR (60), plate_no VARCHAR (60), repair_point VARCHAR (60),created_at DATE , updated_at Date , PRIMARY KEY (id))', (err, result) => {
        if (err) throw err;
        console.log('テーブルが作成されました');
        console.log(result);
    });
});