const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    tweet:{
        type: String,
        required:true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = Post = mongoose.model('Post', PostSchema);