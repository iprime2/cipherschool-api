const router = require('express').Router()

const { create, update } = require('../controllers/details')

const { verifyToken } = require('../verifyToken')

router.post('/', verifyToken, create)
router.put('/:userId', verifyToken, update)

module.exports = router
