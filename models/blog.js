const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
    title:  {
        type:String,
        required:true,
    }, 
    desc:{
        type:String,
        required:true,
    }, 
    
  });

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;