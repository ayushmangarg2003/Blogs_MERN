import Post from "../models/postModel.cjs"

export const getPosts = async (req, res) => {
  const post = req.query.cat ? await Post.find({cat:req.query.cat}) : await Post.find({})
  res.status(200).json(post)
};

export const getPost = async(req, res) => {
  const post = await Post.findById(req.params.id)
  res.status(200).json(post)
};

export const addPost = async (req, res) => {
  const { title, descr, img, uid, date, cat } = req.body
  try {
    const newpost = await Post.post(title, descr, img, uid, date, cat)
    res.status(200).json({ newpost })
  } catch (error) {
    res.status(400).json({ error: "Dikkat" })
  }
};

export const deletePost = (req, res) => {
  const postId = req.params._id;

  Post.findByIdAndDelete(req.params.id).then(()=>{
    res.json("Post has been deleted!");
  })
};

