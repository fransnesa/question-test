
const {verifyToken} = require('../helper/getToken')

function authentication(req,res,next){
    try {
        const decoded = verifyToken(req.headers.token)
        req.decode = decoded
        next()
      } catch(err) {
        next({httpStatus:401,message:err.message})
      }
}

module.exports = authentication