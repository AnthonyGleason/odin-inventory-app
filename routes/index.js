var express = require('express');
var router = express.Router();

const {createCategory,getCategory,getAllCategories,updateCategory,deleteCategory} = require('../controllers/Category');
const {createItem,getItem,getAllItems,updateItem,deleteItem, getByCat} = require('../controllers/Item');
/* GET home page. */
router.get('/', async function(req, res, next) {
  //get all categories
  const allCategories = await getAllCategories();
  //show all categories to user
  res.render('index', { allCategories: allCategories});
});
router.get('/updateitem/:item',async (req,res,next)=>{
  let itemStr = req.path.slice(1,req.path.length);
  itemStr=itemStr.slice(itemStr.indexOf('/')+1,itemStr.length);
  let item = await getItem(itemStr);
  res.render('updateItem',{item: item});
});
router.post('/updateitem',async(req,res,next)=>{
  const body = req.body;
  updateItem(req.body.name,req.body);
  res.redirect('/');
});
router.get('/newcategory', (req,res,next)=>{
  res.render('newCategory');
});
router.post('/newcategory',async (req,res,next)=>{
  //creates a category and makes the first letter of the name uppercase so cateory query doesn't break
  createCategory(req.body.name[0].toUpperCase()+req.body.name.slice(1,req.body.name.length),req.body.desc,req.body.url);
  res.redirect('/');
});
router.get('/newbook',(req,res,next)=>{
  res.render('newBook');
});
router.post('/newbook',async (req,res,next)=>{
  const body = req.body;
  createItem(body.name,body.desc,body.category,body.price,body.stock,body.url);
  res.redirect('/');
});
router.get('/:category', async function(req,res,next){
  //prepare category string to getCategory 
  let categoryStr = req.path.slice(1,req.path.length);
  //capitalize first letter of string
  categoryStr=categoryStr[0].toUpperCase()+categoryStr.slice(1,categoryStr.length);
  //get the category
  let category = await getCategory(categoryStr);
  //get all items in that category
  let items = await getByCat(categoryStr);
  //render to display
  res.render('category', {category: category, items: items});
});
router.post('/:category', async function(req,res,next){
  let categoryStr = req.path.slice(1,req.path.length);
  categoryStr=categoryStr[0].toUpperCase()+categoryStr.slice(1,categoryStr.length);
  await deleteCategory(categoryStr);
  res.redirect('/');
});
router.get('/:category/:item', async function(req,res,next){
  let itemStr = req.path.slice(1,req.path.length);
  itemStr=itemStr.slice(0,itemStr.indexOf('/'));
  let item = await getItem(itemStr);
  res.render('item', {item: item});
});
router.post('/:category/:item', async function(req,res,next){
  let itemStr = req.path.slice(1,req.path.length);
  itemStr=itemStr.slice(0,itemStr.indexOf('/'))
  await deleteItem(itemStr);
  res.redirect('/');
});
module.exports = router;