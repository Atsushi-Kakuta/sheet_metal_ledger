import {createRequire} from 'module';
import {DATABASE_HOST, USER, PASSWORD, DATABASE} from "../../../.env";
const require = createRequire(import.meta.url);
const mysql = require('mysql');

const client = mysql.createConnection({
    host: DATABASE_HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE
});

client.connect((err) => {
    if (err) throw err;
    console.log('接続完了');

    client.query('CREATE TABLE car_in_stock ()', (err, result) => {
        if (err) throw err;
        console.log('テーブルが作成されました');
        console.log(result);
    });
});

