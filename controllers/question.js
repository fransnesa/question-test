const {question} = require('../models/index')
const { v4: uuidv4 } = require('uuid');

class questionController{
    static loadAll(req,res,next){
        question
          .findAll({
            limit: Number(req.query.limit),
            offset: Number(req.query.offset)
          })
          .then(datas=>{
              res.status(200).json(datas)
          })
          .catch(next)
      }

      static findOne(req,res,next){
        let id = req.params.id
        question.findOne({
            where : {
                'uuid' : id
            }
        })
        .then(question=>{
            if (question === null){
                next({status : 404, message:"Your question data not found"})
            }
            else{
                res.status(200).json(question)
            } 
        })
        .catch(err=>{
            next (err)
        })
      }

      static create(req,res,next){
          question.create({
              question: req.body.question,
              uuid: uuidv4(),
              createdBy: req.decode.username,
              updatedBy : req.decode.username
          })
          .then(created=>{
              res.status(201).json(created)
          })
          .catch(next)

      }

      static delete(req,res,next){
        let id = req.params.id
        question.destroy({
            where :{
                'uuid':id
            }
        })
        .then (success =>{
            // res.send('delete successfully')
            res.status(200).json({
                message : 'data successfully deleted'
            })
        })
        .catch(err =>{
          
            next(err)
        })
      }

      static edit(req,res,next){
        const id = req.params.id
        let newdata = {}

        req.body.question && (newdata.question = req.body.question)
        newdata.updatedBy = req.decode.username

        question.findOne({
            where : {
                'uuid' : id
            }
        })
        .then(todo=>{
            return todo.update(newdata)
        })
        .then(success =>{
            res.status(200).json({
                message : 'update success'
            })
        })
        .catch (err => {
            next(err)
        })
      }
    
}

module.exports = {
    questionController
}