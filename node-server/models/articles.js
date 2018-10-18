'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

let ArticleSchema = new mongoose.Schema(
    {
        text: String,
        title: String,
        description: String,
        thumbnail: String,
        likes: Number,
        author: {
            // type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        comments: [
            {
                author: {
                    // type: mongoose.Schema.Types.ObjectId,
                    ref: 'User'
                },
                text: String
            }
        ]
    }
);

module.exports = mongoose.model('Article', ArticleSchema)
