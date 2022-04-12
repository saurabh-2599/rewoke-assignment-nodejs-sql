//importing Router
const postRouter=require('./Routes/post');
const commentRouter=require('./Routes/comment');
const userRouter=require('./Routes/user');
const express=require('express');
//creating express server
const app=express();
//using body parser middleware so that we can get data in req.body
app.use(express.json());
//mounting
app.use('/api/posts',postRouter);
app.use('/api/comments',commentRouter);
app.use('/api',userRouter);
module.exports=app;