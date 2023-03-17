const express = require('express');
const mongoose = require('mongoose');
const Item = require('../models/Item.js');
//create item
let createItem = async function(itemInput){
  const newItem = await Item.create({
    name: itemInput.name,
    desc: itemInput.desc,
    cat: itemInput.cat,
    price: itemInput.price,
    stock: itemInput.stock,
    url: itemInput.url,
  });
}
//read item

//update item with patch

//delete an item