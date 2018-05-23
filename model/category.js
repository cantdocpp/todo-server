const mongoose = require('mongoose')
const Schema = mongoose.Schema

let categorySchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  userId: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

let Tasks = mongoose.model('Category', categorySchema)

module.exports = Tasks
