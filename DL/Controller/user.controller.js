
const userModel = require('../models/user.model')

// CRUD
async function create(data) {
    return await userModel.create(data)
}
async function read(filter) {
    return await userModel.find({ ...filter, isActive: true })
}
async function readOne(filter, populate={}) {

    let data = await userModel.findOne({ ...filter, isActive: true })
    if(populate.chats) data=await data.populate('chats.chat')
    if(populate.users) data=await data.populate('chats.chat.to')
    
    return data//.toObject()
}
async function update(id, data) {
    // return await userModel.findOneAndUpdate({_id:id}, data,{new : true})
    return await userModel.findByIdAndUpdate(id, data, { new: true })
}
async function del(id) {
    return await update(id, { isActive: false })
}

module.exports = { create, read, readOne, update, del }

// const userModel = require("../Models/user.model");

// const create = async(data)=>{
//     return await userModel.create(data);
// }
// const read = async(filter , isPopulate)=>{
//     return await userModel.find({...filter, isActive:true}).populate(isPopulate ? "emails" : "");
// }
// const readOn = async(filter , isPopulate)=>{
//     return await userModel.findOne({...filter, isActive:true}).populate(isPopulate ? "emails" : "");
// }
// const update = async(id , data)=>{
//     return await userModel.findByIdAndUpdate(id, {...+data} , {new:true});

// }
// const del = async(id)=>{
//     return await update(id , {isActive:false})
// }

