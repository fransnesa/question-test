require('dotenv').config()
const jwt = require('jsonwebtoken');
const secret = process.env.secret

function generateToken(payload){
    console.log(secret)
    return jwt.sign(payload,secret)
}

function verifyToken(token){
    return jwt.verify(token,secret)
}

module.exports = {
    generateToken,
    verifyToken
}