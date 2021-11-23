var mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
	name : {type: String, required: true},
	age: {type: Number, required: true},
	group: {type: String, required: true}
});

var Student = mongoose.model('Student', studentSchema);
module.exports = Student;