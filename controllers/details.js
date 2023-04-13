const Details = require('../models/Details')
const { StatusCodes } = require('http-status-codes')

const create = async (req, res) => {
  try {
    const userDetails = new Details(req.body)

    const details = await userDetails.save()
    res.status(201).json(details)
  } catch (error) {
    res.status(500).json(error)
  }
}

const get = async (req, res) => {
  try {
    const userDetails = await Details.findOne({ userId: req.params.userId })
    if (!userDetails) {
      res.status(StatusCodes.NOT_FOUND).json({ msg: 'Not Found !' })
      return
    }

    res.status(200).json(userDetails)
  } catch (error) {
    res.status(500).json(error)
  }
}

const update = async (req, res) => {
  try {
    const updateDetails = await Details.findOneAndUpdate(
      { userId: req.params.userId },
      {
        $set: req.body,
      },
      { new: true }
    )
    res
      .status(StatusCodes.OK)
      .json({ msg: 'User details updated', updateDetails })
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json(error)
  }
}

const updateInterests = async (req, res) => {
  console.log(req.body)
  try {
    const interests = req.body
    const details = await Details.findOne({ userId: req.params.userId })

    details.interests = []

    await details.save()

    let updateDetails
    for (let i = 0; i < interests.length; i++) {
      updateDetails = await Details.findOneAndUpdate(
        { userId: req.params.userId },
        { $push: { interests: interests[i] } },
        { new: true }
      )
    }

    res
      .status(StatusCodes.OK)
      .json({ msg: 'User details updated', updateDetails })
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json(error)
  }
}

module.exports = {
  create,
  update,
  get,
  updateInterests,
}
