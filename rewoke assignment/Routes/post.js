const express=require('express');
const router=express.Router();
const commentRouter=require('../Routes/comment')
const userController=require('../Controllers/userController.js');
const postController=require('../Controllers/postController.js');
router.route('/').get(userController.authenticate,postController.getAllPost).post(userController.authenticate,postController.createPost);
router.route('/:id').get(userController.authenticate,postController.getSinglePost);
//mounting this route to commentRputer to getcomments of specific posts
// api/post/:postId/comments
router.use('/:id/comments',commentRouter);
module.exports=router;