const mongoose = require('mongoose');
const Category = require('../models/Category');

//create category
let createCategory = function (name,desc,url){
  Category.create({
    name: name,
    desc: desc,
    url: url
  })
}
//get category
let getCategory = async function(catName){
  let catObj = await Category.findOne({name: catName});
  return catObj;
}
//get all categories
let getAllCategories = async function(catName){
  let catObjArr = await Category.find({});
  return catObjArr;
}
//update category
let updateCategory = async function(catName,catInput){
  await Category.findOneAndUpdate({name: catName},{
    name: catInput.name,
    desc: catInput.desc,
    url: catInput.url,
  })
}
//delete category
let deleteCategory = async function(catName){
  await Category.deleteOne({name: catName});
}
module.exports = {createCategory,getCategory,getAllCategories,updateCategory,deleteCategory};