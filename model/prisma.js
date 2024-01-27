const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const createUser = async (bodyObj) => {
    const result = await prisma.user.create({
        data: bodyObj
    })
    console.log(result);
    return result
}

const authenticate = async (bodyObj) => {
    const result = await prisma.user.findFirst({
        where: {
            email: bodyObj.email
        }
    })
    console.log(result);
    return result
}

module.exports = {
    createUser,
    authenticate
}