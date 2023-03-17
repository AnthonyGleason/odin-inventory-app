const express = require('express');
const mongoose = require('mongoose');
const {catModel} = require('../models/Cat.js');

//create cat
let createCat = async function(catInput){
  const newCat = await catModel.create({
    name: catInput.name,
    desc: catInput.desc,
    url: catInput.url
  })
  return newCat;
};
//read cat querys by catName
let findCat = async function(catName){
  const cat = await catModel.findOne({name: catName});
  return cat;
};
//update cat
let updateCat = async function(catInput){
  const cat = await catModel.updateOne({name: catInput.name},{
    name: catInput.name,
    desc: catInput.desc,
    url: catInput.url
  });
  return cat;
};
//delete cat
let deleteCat = async function(catName){
  await catModel.deleteOne({name: catName});
};
module.exports = {createCat, findCat, updateCat, deleteCat};