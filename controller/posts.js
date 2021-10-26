
const Post = require('../models/Post');

 const getPosts = async (req,res) =>{
    try{
        const posts = await Post.find();
        res.json(posts);
  
    }
    catch (err)
    {
       res.json({message:err});
    }
  }
  

  const postPosts= async (req,res) => {

    const post=new Post({
        title:req.body.title,
        description:req.body.description
    });
    
    try{ const savedPost=await  post.save();
        res.json(savedPost);}
        catch(err)
        {
            res.json({message:err});
        }
    
    }
  
 const getPostById = async (req,res) => {
    try {
      const post= await Post.findById(req.params.postId);
      res.json(post);
    } catch (err) {
      res.json({message:err});
    }
  }

 const deletePostByPostId= async (req,res) => {
    try {
      const removedPost= await Post.remove({_id: req.params.postId});
      res.json(removedPost);
    } catch (err) {
      res.json({message:err});
    }
  }

  
 const updatePostById = async (req,res)=>{
    try {
      const updatedPost= await  Post.updateOne(
          { _id:req.params.postId},
          { $set: {title: req.body.title}}
          );
      res.json(updatedPost);
  
    } catch (err) {
      res.json({message:err});
    }
  }

module.exports = {getPostById, postPosts,getPosts,deletePostByPostId,updatePostById}