const userModel = require("../Models/user.model");

const create = async(data)=>{
    return await userModel.create(data);
}
const read = async(filter , isPopulate)=>{
    return await userModel.find({...filter, isActive:true}).populate(isPopulate ? "emails" : "");
}
const readOn = async(filter , isPopulate)=>{
    return await userModel.findOne({...filter, isActive:true}).populate(isPopulate ? "emails" : "");
}
const update = async(id , data)=>{
    return await userModel.findByIdAndUpdate(id, {...+data} , {new:true});

}
const del = async(id)=>{
    return await update(id , {isActive:false})
}

module.exports = {create , read ,readOn , update , del}