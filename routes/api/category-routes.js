const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // Category.findAll().then((categoryData)=> {
  //   res.json(categoryData);
  // });
  try{
    const category = await Category.findAll({
      include: [{ model: Product}],
    });
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // Category.findBy(req.params.id).then((categoryData)=>{ //not confident about findBy <3
  //   res.json(categoryData);
  // });
  // be sure to include its associated Products
try{
  const category = await Category.findByPk(req.params.id, {
    include: [{model: Product}],
  });
  if (!category) {
    res.status(404).json({message: 'No category found by that ID'});
    return;
  }
  res.status(200).json(category);
} catch (err) {
  res.status(500).json(err);
}
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then((newCategory)=>{
    res.json(newCategory);
  })
  .catch((err)=>{
    res.json(err);
  });  
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update({
    //Includes all fields you can update and the data attached to the request body, assignment 7 for reference <3
  })
  .then((updatedCategory)=>{
    res.json(updatedCategory);
  })
  .catch((err)=>res.json(err));
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then((deletedCategory)=>{
    res.json(deletedCategory);
  })
  .catch((err)=> res.json(err));
});

module.exports = router;
