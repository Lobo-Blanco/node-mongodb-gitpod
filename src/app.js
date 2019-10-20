const express = require("express");
const app = express();
const task = require("./model/task");

// setting
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// middelwares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', async (req, res) => {
    const tareas = await task.find();
    console.log(tareas);
    res.render('index', {tasks: tareas});
})

// Create Task
app.post('/create', async (req, res) => {
    const newTask = new task({
        task: req.body.task,
        description: req.body.description
    });
    await newTask.save();
    res.redirect('/');
})

// Static Files
app.use(express.static(__dirname + "/public"));

module.exports = app;