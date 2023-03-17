const express = require('express');
const mongoose = require('mongoose');
const Cat = require('../models/Cat.js');

//create cat
let createCat = async function(catInput){
  const newCat = await Cat.create({
    name: catInput.name,
    desc: catInput.desc,
    url: catInput.url
  })
  return newCat;
};
//read cat

//update cat with patch

//delete cat

module.exports = {createCat};