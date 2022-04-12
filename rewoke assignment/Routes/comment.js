const commentController=require('../Controllers/commentController');
const userController=require('../Controllers/userController')
const express=require('express');

const router=express.Router({'mergeParams':true});//to get access of other router parameter 
router.route('/').post(userController.authenticate,commentController.createComment).get(userController.authenticate,commentController.getAllCommentsOfPost);
module.exports=router;