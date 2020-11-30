module.exports = (err, req, res,next) =>{
    if(err.name=='JsonWebTokenError'){
        res.status(401).json({
          message : "invalid token"
        })
      }
      else {
        res.status(err.status || 500).json({
          message : err.message
        })
      }
} 