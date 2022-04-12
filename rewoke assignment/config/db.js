const dotenv=require('dotenv');
dotenv.config({path:__dirname+'/config.env'})
const sql=require('mysql2');
const pool=sql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    database:process.env.DB_DATABASE,
    password:process.env.DB_PWD
})
console.log("hello");
console.log(process.env.DB_PWD);
module.exports=pool.promise();