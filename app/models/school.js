const mongoose = require('mongoose')

const validator = require('validator')

const Schema = mongoose.Schema

const schoolSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required: true,
        validate: {
            validator: function(value){
                return validator.isEmail(value)
            },
            function(){
                return 'invalid email format'
            }
        }
    },
    address:{
        type: String,
        required: true,
    },
    mobile: {
        type: Number,
        required: true,
        minlength: 10,
        maxlength: 10
    },
    affiliationType : {
        type: String,
        required: true,
        enum: ['CBSE', 'State', 'ICSE']
    },
    feeMinRange:{
        type: Number,
        // required: true,
    },
    feeMaxRange:{
        type: Number,
        // required: true,
    },
    

    createdAt:{
        type: Date,
        default: Date.now
    }
})

const School = mongoose.model('School', schoolSchema)

module.exports = School