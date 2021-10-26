const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

import {getPostById, postPosts,getPosts,deletePostByPostId,updatePostById} from '../controller/posts.js'


getPostById = require('../controller/posts.js')

//GET
router.get('/',getPosts);

//POST
router.post('/',postPosts);

//GET POST BY ID
router.get('/:postId',getPostById);

//Delete
router.delete('/:postId', deletePostByPostId)

//update
router.patch('/:postId',updatePostById);


module.exports=router;

