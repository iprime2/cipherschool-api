const mongoose = require('mongoose')

const DetailsSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    aboutMe: {
      type: String,
    },
    links: {
      type: Object,
      default: [],
    },
    currently: {
      type: String,
    },
    education: {
      type: String,
    },
    interests: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Details', DetailsSchema)
