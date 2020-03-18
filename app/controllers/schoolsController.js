const School = require('../models/school')

module.exports.list = (req,res) => {
    School.find()
    .then((schools) => {
        res.json(schools)
    })
    .catch(err => {
        res.json(err)
    })
}

module.exports.create = (req,res) => {
    const body = req.body
    const school = new School(body)
    school.save()
    .then((school)=>{
       res.json(school)
    })
    .catch(err => {
        res.json(err)
    })

}

module.exports.show = (req,res) => {
    const id = req.params.id
    console.log(id)
    School.findOne({_id:id})
    .then((school)=>{
        if(school){
            res.json(school)
        } else {
            res.json({})
        }
    })
    .catch(err => res.json(err))
}

module.exports.update = (req,res) => {
    const id = req.params.id
    const body = req.body
    School.findOneAndUpdate({_id:id},body,{new:true,runValidators:true})
    .then((school)=>{
        if(school){
            res.json(school)
        } else{
            res.json({})
        }
    })
    .catch((err)=> res.json(err))
}
module.exports.destroy = (req,res) => {
    const id = req.params.id
    School.findOneAndDelete({_id:id})
    .then((school)=>{
        if(school){
            res.json(school)
        } else{
            res.json({})
        }
    })
    .catch((err)=> res.json(err))
}