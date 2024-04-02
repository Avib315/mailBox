const messageModel = require("../Models/message.model");

const create = async(data)=>{
    return await messageModel.create(data);
}
const read = async(data)=>{}
const update = async(data)=>{}
const del = async(data)=>{}

module.exports = {create , read , update , del}