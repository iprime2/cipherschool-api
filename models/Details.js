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
    githubLink: {
      type: String,
    },
    linkedinLink: {
      type: String,
    },
    facebookLink: {
      type: String,
    },
    twitterLink: {
      type: String,
    },
    instagramLink: {
      type: String,
    },
    websiteLink: {
      type: String,
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
