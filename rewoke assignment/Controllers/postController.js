const postModel=require('../Models/Post.js');
const createPost=async(req,res,next) => {
   try{
   const newPost=await postModel.createNew(req.body.title,req.body.description);
   res.status(201).json({
       status:"success",
       data:{
           newPost,
           title:req.body.title,
           description:req.body.description,
           createdAt:new Date()
       }
   })
}
catch(e){
    console.log(e);
}
}
const getAllPost=async(req,res,next) => {
    try{
        const posts=await postModel.getAll();
        res.status(201).json({
            status:"success",
            data:{
                posts
            }
        })
    }
    catch(e){
        console.log(e);
    }
   
}
const getSinglePost=async(req,res,next) => {
    try{
        const post=await postModel.getOneById(req.params.id);
        res.status(201).json({
            status:"success",
            data:{
                post
            }
        })
    }
    catch(e){
        console.log(e);
    }
}
exports.createPost=createPost;
exports.getAllPost=getAllPost;
exports.getSinglePost=getSinglePost;
