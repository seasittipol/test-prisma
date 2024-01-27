const { authenticate } = require('../model/prisma')

const login = async (req, res, next) => {
    try {

        const bodyObj = {
            email: req.body.email
        }

        const response = await authenticate(bodyObj)
        res.status(200).json(response)
    } catch (err) {
        next(err)
    }
}

module.exports = {
    login
}