const router = require('express').Router()

const {
  getOne,
  getAll,
  update,
  deleteOne,
  userStats,
  changePassword,
} = require('../controllers/users')
const { verifyToken } = require('../verifyToken')

router.get('/', verifyToken, getAll)
router.get('/find/:id', verifyToken, getOne)
router.put('/:id', verifyToken, update)
router.put('/changePassword/:id', verifyToken, changePassword)
router.delete('/:id', verifyToken, deleteOne)
router.get('/stats', userStats)

module.exports = router
