const XLSX = require("xlsx");
var json2xls = require('json2xls');

const Post = require("../models/Post");

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    console.log(posts);
    var temp = JSON.stringify(posts);
    temp = JSON.parse(temp);
    const workSheet = XLSX.utils.json_to_sheet(temp);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, "posts");

    XLSX.write(workBook, { bookType: "xlsx", type: "buffer" });

    XLSX.write(workBook, { bookType: "xlsx", type: "binary" });

    XLSX.writeFile(workBook, "ss.xlsx");
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
};

const postPosts = async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
};

const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
};

const deletePostByPostId = async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.postId });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
};

const updatePostById = async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }
};

// const saveToExcel= async (req,res)=>{
//   try{
//     const posts = await Post.find();

//     const workSheet=XLSX.utils.json_to_sheet(posts)
//     console.log(posts)
//     const workBook=XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workBook,workSheet,"posts");

//     XLSX.write(workBook,{bookType:'xlsx',type:"buffer"})

//     XLSX.write(workBook,{bookType:'xlsx',type:"binary"})

//     const data= await XLSX.writeFile(workBook,"posts.xlsx")
//     res.send(data)

// }
// catch (err)
// {
//    res.json({message:err});
// }

// }

module.exports = {
  getPostById,
  postPosts,
  getPosts,
  deletePostByPostId,
  updatePostById
};
