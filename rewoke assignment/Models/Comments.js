const db=require('../config/db')
class Post{
    /*constructor(title,description){
        this.title=title;
        this.description=description
    }*/
    static async createNew(description,postId,userId){
        const date=new Date()
        const query=`INSERT INTO comments(comment,postId,userId) VALUES('${description}','${postId}','${userId}')`;
        const [newPost,_]=await db.execute(query);
        return newPost
    }
    static async getCommentOfPost(postId){
        const query= `SELECT * from comments where postId=${postId}`;
        let result=await db.execute(query);
        result=result[0];
        return result;
    }
    static async getCommentOfPostBySpecificUser(UserId){
        const query= `SELECT * from comment where postId=${postId},userId=${UserId}`;
        let result=await db.execute(query);
        result=result[0];
        return result;
    }
}
module.exports=Post;