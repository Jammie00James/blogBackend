const BlogModel = require('../database')

exports.create = async(req, res) => {
    try {
        const newPost = {
            title: req.body.title,
            content: req.body.content,
            author: req.body.author
          };
        if(newPost.author && newPost.content && newPost.title){
          const post = await BlogModel.create(newPost)
          res.status(200).json(post)
        }else{
          res.status(500).json({message:"Fields cannot be empty"})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({"Message":"An Error Ocoured"})
    }
}


exports.delete = async(req, res) => {
    try {
        const postId = req.params.id;
        await BlogModel.findByIdAndDelete(postId)
        res.status(200).json({"Message":"SUccess"})
    } catch (error) {
        console.log(error)
        res.status(500).json({"Message":"An Error Ocoured"})
    }
}
 
exports.update = async(req, res) => {
    try{
        const postId = req.params.id;
        const updatedFields = req.body;

        // List of fields that are allowed to be updated
        const allowedFields = ['title', 'content'];
      
        // Filter the updatedFields object to include only allowed fields
        const filteredFields = {};
        for (const field of allowedFields) {
          if (updatedFields.hasOwnProperty(field)) {
            filteredFields[field] = updatedFields[field];
          }
        }
        if(filteredFields){
            filteredFields.updatedAt = new Date();
        }

      const blog = await BlogModel.findByIdAndUpdate(postId, filteredFields)
      if(!blog){
        res.status(404).json({message:"Blog Post found"})
      }else{
        res.status(500).json({message:"success"})
      }    
    } catch (error){
        console.log(error)
        res.status(500).json({"Message":"An Error Ocoured"})
    }
}


exports.getAll = async(req, res) => {
    try{
      const posts = await BlogModel.find()
      res.status(200).json(posts)
    } catch (error){
        console.log(error)
        res.status(500).json({"Message":"An Error Ocoured"})
    }
}

exports.getOne = async(req, res) => {
    try{
        const postId = req.params.id;
        const blog = await BlogModel.findById(postId)
        res.status(200).json(blog)
    } catch (error){
        console.log(error)
        res.status(500).json({"Message":"An Error Ocoured"})
    }
}