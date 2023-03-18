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

router.get('/newcategory', (req,res,next)=>{
  res.render('newCategory');
})
router.post('/newcategory',async (req,res,next)=>{
  //creates a category and makes the first letter of the name uppercase so cateory query doesn't break
  createCategory(req.body.name[0].toUpperCase()+req.body.name.slice(1,req.body.name.length),req.body.desc,req.body.url);
  res.redirect('/');
})

router.get('/:category', async function(req,res,next){
  //prepare category string to getCategory 
  let categoryStr = req.path.slice(1,req.path.length);
  //capitalize first letter of string
  categoryStr=categoryStr[0].toUpperCase()+categoryStr.slice(1,categoryStr.length);
  //get the category
  let category = await getCategory(categoryStr);
  //get all items in that category
  let items = await getByCat(categoryStr);
  console.log(category);
  //render to display
  res.render('category', {category: category, items: items});
});

module.exports = router;


//todos
 /*
    add new pages for both books add buttons to category and index so new form can be accessed

    button within for each loop holds a delete button which submits a post request to delete with item/cat info

    use posts to add form data from new pages to server

    pressing on an item should take you to a item page

    shows item page with an option to update item which takes you to an update item route

    after pressing save the stock should update

    stock should not go below 1
  */