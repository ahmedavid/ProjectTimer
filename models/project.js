const mongoose = require('mongoose');
const Record = require('./record');
const Schema = mongoose.Schema;
const projectSchema = Schema({
    title:{type:String,unique:true,required:true},
    is_active:{type:Boolean,required:true},
    created_date:{type:String,required:true},
    timer_records:[Record]
});

module.exports = mongoose.model('Project',projectSchema);