const mongoose = require('mongoose')

const FollowingSchema = new mongoose.Schema({}, { timestamps: true })

module.exports = mongoose.model('Following', FollowingSchema)
