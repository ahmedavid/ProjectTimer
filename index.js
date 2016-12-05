const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const Project = require('./models/project');
const Record = require('./models/record');

// DB Setup
mongoose.connect('mongodb://ahmedavid:ahmedavid@ds113958.mlab.com:13958/projecttimer');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json({ type: '*/*' }));
app.use(cors());




app.get('/api',function (req, res) {
    Project.find({},function (err, projects) {
        if(err) return next(err);
        if(projects) return res.json(projects);
    })
});

app.post('/api',function (req, res,next) {
    const newProject = req.body.project;
    console.log('New Project:',newProject)
    if(newProject.title.length > 0){
        const project = new Project({
            title:newProject.title,
            created_date:newProject.created_date,
            is_active:false
        });

        //project.timer_records.push({startTime:newProject.created_date,endTime:newProject.created_date});

        project.save(function (err, response) {
            if(err) return next(err);
            console.log(response);
            Project.find({},function (err, projects) {
                if(err) return next(err);
                if(projects) return res.json(projects);
            })
        });
    }
});

app.post('/api/:id',function (req, res,next) {
    const id = req.params.id;
    Project.findOneAndUpdate({"_id":id},{$push:{timer_records:{startTime:new Date().toISOString(),endTime:new Date().toISOString()}}},{upsert:true}, function (err, response) {
        if(err) return next(err);
        Project.find({},function (err, projects) {
            if(err) return next(err);
            if(projects) return res.json(projects);
        })
    })
});

app.delete('/api/:id',function (req, res,next) {
    const id = req.params.id;

    Project.findByIdAndRemove({"_id":id},function (err, response) {
        if(err) return next(err);

        Project.find({},function (err, projects) {
            if(err) return next(err);
            if(projects) return res.json(projects);
        })
    });
});

var port = process.env.PORT || 3000;

app.listen(port,function () {
    console.log('Server starting on port '+port);
});