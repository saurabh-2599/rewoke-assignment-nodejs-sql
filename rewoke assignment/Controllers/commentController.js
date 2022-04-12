const commentModel=require('../Models/Comments.js');
const createComment=async(req,res,next) => {
    try{
     const newComment=commentModel.createNew(req.body.description,req.body.postId,req.body.userId);
     res.status(201).json({
         status:"success",
         data:{
             newComment,
             description:req.body.description
         }
     })
    }
    catch(e) {
        console.log(e)
    }
}
const getAllCommentsOfPost=async(req,res,next) => {
   try{
     const comments=await commentModel.getCommentOfPost(req.params.id);
     res.status(200).json({
         status:"success",
         data:{
             comments
         }
     })
   }
   catch(e){
       console.log(e);
   }
}
exports.createComment=createComment;
exports.getAllCommentsOfPost=getAllCommentsOfPost