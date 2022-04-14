const express = require('express');
const { links } = require('express/lib/response');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const blog = express();
blog.use(express.static('public'));

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  snippet: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;