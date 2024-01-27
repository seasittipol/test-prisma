const express = require('express')

const notFoundHandler = require('./error/not-found')
const errorHandler = require('./error/error')

const accountRouter = require('./router/accountRouter')
const transactionRouter = require('./router/transactionRouter')

const registerController = require('./controller/register-controller')
const loginController = require('./controller/login-controller')


const app = express()

app.use(express.json())


app.post('/register', registerController.register)
app.post('/login', loginController.login)
app.use('/account', accountRouter.router)
app.use('/transaction', transactionRouter.router)

app.use(notFoundHandler)
app.use(errorHandler)

app.listen(8002, () => console.log('server running on port: 8002'))