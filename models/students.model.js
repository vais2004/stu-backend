// const mongoose = require('mongoose');

// const studentSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
//   gender: String,
//   marks: Number,
//   attendance: Number,
//   grade: String,
// });

// const Student = mongoose.model("Student", studentSchema);


// module.exports = { Student };
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  grade: { type: String, required: true },
  gender: { type: String, default: '' },
  attendance: { type: Number, default: 0 },
  marks: { type: Number, default: 0 },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = { Student };