var express = require('express');
var router = express.Router();

const {ItemModel} = require('../models/Item');
const {createCat, findCat, updateCat, deleteCat} = require('../controllers/catController');
const {CatModel} = require('../models/Cat');
const {createItem,getItem,getAllItems,updateItem,deleteItem} = require('../controllers/itemController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Inventory App Demo'});
});

module.exports = router;
