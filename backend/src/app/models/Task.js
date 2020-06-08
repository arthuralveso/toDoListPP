const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },

});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
