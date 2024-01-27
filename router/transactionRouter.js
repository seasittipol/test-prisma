const express = require('express')

const router = express.Router()

router.post('/', (req, res, next) => { })
router.get('/:accountId', (req, res, next) => { })
router.put('/:transactionId', (req, res, next) => { })
router.delete('/:transactionId', (req, res, next) => { })

module.exports = {
    router
}