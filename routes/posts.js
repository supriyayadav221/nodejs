

const express = require('express');
const controller = require("../controller/posts")
const router = express.Router();
const Post = require('../models/Post');




//GET
router.get('/',controller.getPosts);

//POST
router.post('/',controller.postPosts);

//GET POST BY ID
router.get('/:postId',controller.getPostById);

//Delete
router.delete('/:postId', controller.deletePostByPostId)

//update
router.patch('/:postId',controller.updatePostById);


module.exports=router;

