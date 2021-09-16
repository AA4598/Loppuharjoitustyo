const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const dataSchema = mongoose.Schema({
  id: {
    type: Number

  },
  user: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  repeat: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  }

})

dataSchema.plugin(uniqueValidator)
module.exports = mongoose.model('Data', dataSchema)
