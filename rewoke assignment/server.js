const app=require('./app.js');
const dotenv=require('dotenv');
dotenv.config({path:__dirname+'./config/config.env'});
app.listen(8000,() => console.log("server has been started"));