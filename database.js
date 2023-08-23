const mongoose = require('mongoose')

const uri = "mongodb+srv://administrator:adminpasscode@cluster1.l735omn.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
mongoose.connect(uri);

const Schema = mongoose.Schema


const blogSchema = new Schema({
  title: String,
  content: String,
  author: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  }
})


module.exports = mongoose.model('Blog',blogSchema)