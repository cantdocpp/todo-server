const mongoose = require('mongoose')
const Schema = mongoose.Schema

let taskSchema = mongoose.Schema({
  task: {
    type: String,
    required: true
  },
  status: {
    default: false,
    type: String
  },
  categoryId: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  userId: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

let Tasks = mongoose.model('Task', taskSchema)

module.exports = Tasks
