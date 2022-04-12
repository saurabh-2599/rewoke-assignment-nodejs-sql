const db=require('../config/db')
class Post{
    /*constructor(title,description){
        this.title=title;
        this.description=description
    }*/
    static async createNew(title,description){
        const date=new Date()
        const query=`INSERT INTO posts(Title,Description,CreatedAt) VALUES('${title}','${description}','2022/11/04')`;
        const [newPost,_]=await db.execute(query);
        return newPost
    }
    static async getAll(){
        const query="SELECT * from posts"
        let result=await db.execute(query);
        //just to get array of objects
        result=result[0];
        return result
    }
    static async getOneById(id){
        const query=`SELECT * from posts where id=${id}`;
        let result=await db.execute(query);
        //just wanted one object with that id otherwise will get array of array of single record if not used result[0][0]
        result=result[0][0]
        return result;
    }
}
module.exports=Post;