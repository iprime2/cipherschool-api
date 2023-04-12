const Details = require('../models/Details')
const { StatusCodes } = require('http-status-codes')

const create = async (req, res) => {
  try {
    const userDetails = new Details({
      userId: req.body.userId,
      aboutMe: req.body.aboutMe,
      currently: req.body.currently,
      education: req.body.education,
      interests: req.body.interests,
      links: req.body.links,
    })

    const details = await userDetails.save()
    res.status(201).json(details)
  } catch (error) {
    res.status(500).json(error)
  }
}

const update = async (req, res) => {}

module.exports = {
  create,
  update,
}
