const express = require('express');
const mongoose = require('mongoose');
const {ItemModel} = require('../models/Item.js');
//create item
let createItem = async function(itemInput){
  const newItem = await ItemModel.create({
    name: itemInput.name,
    desc: itemInput.desc,
    cat: itemInput.cat,
    price: itemInput.price,
    stock: itemInput.stock,
    url: itemInput.url,
  });
}
//get one item
let getItem = async function(itemName){
  const item = await ItemModel.findOne({name: itemName});
  return item;
}

//get all items
let getAllItems = async function(){
  const items = await ItemModel.find();
  return items;
}
//update item
let updateItem = async function(itemInput){
  const item = ItemModel.updateOne({name: itemInput.name},{
    name: itemInput.name,
    desc: itemInput.desc,
    cat: itemInput.cat,
    price: itemInput.price,
    stock: itemInput.stock,
    url: itemInput.url,
  })
  return item;
}
//delete an item
let deleteItem = async function(itemName){
  Item.deleteOne({name: itemName});
}

module.exports = {createItem,getItem,getAllItems,updateItem,deleteItem};