const bcrypt=require('bcryptjs');
const db=require('../config/db.js');
class User{
    static async createNew(name,email,password){
        let passwordEnc=await bcrypt.hash(password,10);
        console.log(passwordEnc);
        const query=`INSERT INTO users(name,email,password) VALUES('${name}','${email}','${passwordEnc}')`;
        const newRecord=await db.execute(query)
        return newRecord;  
    }
    static async getUserByEmail(email){
        const query=`SELECT * FROM users where email='${email}'`;
        let result=await db.execute(query);
        result=result[0][0];
        console.log(result);
        return result;
    }
}
module.exports=User;