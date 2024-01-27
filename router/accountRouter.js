const express = require('express')

const router = express.Router()

router.post('/', (req, res, next) => { })
router.get('/', (req, res, next) => { })
router.patch('/:accountId', (req, res, next) => { })
router.delete('/:accountId', (req, res, next) => { })

module.exports = {
    router
}