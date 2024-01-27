const { createUser } = require('../model/prisma')
const bcrypt = require('bcryptjs')


const register = async (req, res, next) => {
    try {
        // console.log(req.body);
        const email = req.body.email
        if (email === '' || email.trim() === '' || email.indexOf('@') < 0) {
            return res.status(404).json({ message: 'invalid email' })
        }

        const password = req.body.password
        const confirmPassword = req.body.confirmPassword
        if (password === '' || password.trim().length < 8) return res.status(404).json({ message: 'password not match' })
        if (password !== confirmPassword) return res.status(404).json({ message: 'confirmp password not match' })
        const bodyObj = { ...req.body }
        delete bodyObj.confirmPassword
        bodyObj.password = await bcrypt.hash(req.body.password, 12)
        const response = await createUser(bodyObj)
        delete response.password
        res.status(201).json(response)
    } catch (err) {
        next(err)
    }
}



module.exports = {
    register
}