const Blog = require('../models/blog') 

// create method for a single blog
exports.createNewBlog = async(req, res) => {
   try {
    const blogTitle = req.body.title;
    const blogDesc = req.body.desc;
    const blog = {
        title:blogTitle,
        desc:blogDesc
    } 
    const newBlog =  await Blog.create(blog);
    res.json({
      message:"blog created successfully",
      blog:newBlog
    });
   } catch (error) {
    res.json({
        message:'something went wrong'
    })
   } 
}  

// get method for all blogs
exports.getAllBlogs = async (req, res) => {
    try {
        const updatedBlog = await Blog.find({})
        res.status(200).json({message:"All blogs found successfully", blogs:updatedBlog})
    } catch (error) {
        res.status(404).json({error})
    }
}

// get method for a single blog by id
exports.getABlogById = async (req, res) => {
    try {
        const filterId = req.params.id; 
        const resultBlog = await Blog.findById(filterId)
        res.status(200).json({message:"Single blog found successfully", blog:resultBlog})
    } catch (error) {
        res.status(404).json({error})
    }
}

// put method for a single blog by id
exports.updateABlogById = async (req, res) => {
    try {
        const updateId = req.params.id; 
        const resultBlog = await Blog.findByIdAndUpdate(updateId,req.body,{
            new:true,
            runValidators:true,
        })
        res.status(200).json({message:"blog updated successfully", blog:resultBlog})
    } catch (error) {
        res.status(404).json({error})
    }
}

// delete method for a single blog by id
exports.deleteABlogById = async (req, res) => {
    try {
        const targetId = req.params.id; 
        const deletedBlog = await Blog.findByIdAndDelete(targetId) 
        res.status(200).json({message:`blog is deleted successfully`, deletedBlog})
    } catch (error) {
        res.status(404).json({error})
    }
}