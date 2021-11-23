const express = require('express');
const router = express.Router();
const Student = require('./models/student');
const sanitize = require('mongo-sanitize');

router.get('/students', (req, res) => {
    Student.find({}, null, {limit: 50, sort: {'_id': -1}}, (err, students) => {
        if(err)
            res.send(err);
        
        res.json(students);
    });
});

router.get('/students/:id', (req, res) =>{
    Student.findById(sanitize(req.params.id), (err, student) => {
        if(err)
            res.send(err);

        res.json(student);
    });
});

router.get('/groups/:group', (req, res) =>{
    let cleanParam = sanitize(req.params.group);
    Student.find({group: {"$eq": cleanParam}}, (err, student) => {
        if(err)
            res.send(err);

        res.json(student);
    });
});

router.get('/groups', (req, res) =>{
    Student.find().distinct('group', function(err, groups) {
        if(err)
          res.send(err);
       
        res.json(groups);
    });
});

router.post('/students', (req, res) => {
    let student = new Student({
        name: req.body.name,
        age: req.body.age,
        group: req.body.group
    });

    student.save((err, student) => {
        if(err)
            res.send(err);

        res.json(student);
    });
});

module.exports = router;
