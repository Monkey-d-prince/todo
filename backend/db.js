const mongoose = require('mongoose');
const { string } = require('zod');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL)
const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});


// const todoSchema2 = new mongoose.Schema({
//     title:string,
//     description:string,
//     completed:Boolean,
// });

const todo = mongoose.model('Todo', todoSchema);

module.exports = {
    todo
};