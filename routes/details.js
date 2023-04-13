const router = require('express').Router()

const {
  create,
  get,
  update,
  updateInterests,
} = require('../controllers/details')

const { verifyToken } = require('../verifyToken')

router.get('/:userId', verifyToken, get)
router.post('/', verifyToken, create)
router.put('/:userId', verifyToken, update)
router.put('/interests/:userId', verifyToken, updateInterests)

module.exports = router
