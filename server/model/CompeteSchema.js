const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const competeSchema =new Schema({
  department: String,
  compete: String,
},{ timestamps: true } );


module.exports =  mongoose.model('Compete', competeSchema)