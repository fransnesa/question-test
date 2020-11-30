const {User} = require('../models/index')
const {generateToken} = require('../helper/getToken')
const {hashPassword} = require('../helper/bcrypt')
const {checkPassword} = require('../helper/bcrypt')


class UserController{
      static signup(req,res,next){
          console.log(req.body)
          //console.log(req.body.username)
          User.create({
              username: req.body.username,
              password: req.body.password
          })
          .then(created=>{
              console.log(created)
              const payload = {
                  id: created.dataValues.id,
                  username: created.dataValues.username
              }
              //console.log(payload)
              const token = generateToken(payload)
              //console.log("masuk")
              res.status(201).json(token)
          })
          .catch(next)

      }

      static signin(req,res,next){
        User.findOne({
            where: {
                username: req.body.username
            }
        })
        .then(user=>{
            if(user){
                console.log(req.body.password)
                console.log(user.password)
                if(checkPassword(req.body.password,user.password)){
                    const payload = {
                        id: user.id,
                        username: user.username
                    }
                    const token = generateToken(payload)
                    res.status(200).json({
                        token: token
                    })
                } else {
                    res.status(404).json({
                        message: "Username/Password is wrong"
                    })
                }
            }
            else{
                res.status(404).json({
                    message : "User not found"
                })
            }
        })
        .catch(next)
      }


}

module.exports = {
    UserController
}