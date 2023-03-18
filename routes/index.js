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

router.get('/:category', async function(req,res,next){
  //delete this below line later this is used to add initial data to mongodb 
  await createItem('BookA','Desc','Fiction',20,1,'booka');
  //prepare category string to getCategory 
  let categoryStr = req.path.slice(1,req.path.length);
  categoryStr=categoryStr[0].toUpperCase()+categoryStr.slice(1,categoryStr.length);
  //get the category
  let category = await getCategory(categoryStr);
  //get all items in that category
  let items = await getByCat('Fiction');
  //render to display
  res.render('category', {category: category, items: items});
});
module.exports = router;


//todos
 /*
    finish updateItem method in item.js

    show items gathered in category pug

    add new pages for both books add buttons to category and index so new form can be accessed

    use posts to add form data from new pages to server

    pressing on an item should take you to a item page

    post request when changing item info such as changing quantitiy, divs change to forms on press?
  */