const express = require('express');
const app = express();
const { createTodoSchema, updateTodoSchema } = require('./types');
const mongodb = require('mongodb');
const { todo } = require('./db');
require('dotenv').config();

app.use(express.json());

// const clint = new mongodb.MongoClient(process.env.MONGODB_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// let todoCollection;

// async function connect_to_mongodb() {
//     try {
//         await client.connect();
//         const db = client.db();
//         todoCollection = db.collection('todo');

//         app.listen(3000, () => {
//             console.log('Server running on port 3000');
//         });
//     } catch (err) {
//         console.error('MongoDB connection failed:', err);
//     }
// }
// connect_to_mongodb();

app.post('/todo', async(req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodoSchema.safeParse(createPayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: 'Invalid payload',
            error: parsedPayload.error.errors
        });
        return;
    }
    await todo.create({
        title: parsedPayload.data.title,
        description: parsedPayload.data.description,
        completed: parsedPayload.data.completed || false
    })

    res.status(201).json({
        msg: 'Todo created successfully',
        data: parsedPayload.data
    });

});

app.get('/todos', async(req, res) => {
    const todos = await todo.find({});
    res.status(200).json({
        msg: 'Todos fetched successfully',
        data: todos
    });
});

app.put('/completed', async(req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodoSchema.safeParse(updatePayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: 'Invalid payload',
            error: parsedPayload.error.errors
        });
        return;
    }
    await todo.update({
        _id:req.body.id
    },{
        completed: true
    })

    res.status(200).json({
        msg: 'Todo updated successfully',
        data: parsedPayload.data
    });

});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});