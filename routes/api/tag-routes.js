const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
try {
  const tag = await Tag.findAll({
    include: [{model: Product}],
  });
  res.status(200).json(tag);
}catch(err) {
  res.status(500).json(err);
}
});

//error 500
router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try{
    const tag = await Tag.findByPk(req.params.id, {
      include: [{model: Product}],  
    });
    if(!tag) {
      res.status(404).json({message: 'No tag found by that ID'});
      return;
    }
    res.status(200).json(tag);
  }catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
  .then((newTag) =>{
    res.json(newTag);
  })
  .catch((err)=>{
    res.json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.updatee({
        //Includes all fields you can update and the data attached to the request body, assignment 7 for reference <3
  })
  .then((updatedTag)=>{
    res.json(udatedTag);
  })
  .catch((err)=> res.json(err));
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then((deletedTag)=>{
    res.json(deletedTag);
  })
  .catch((err)=>res.json(err));
});

module.exports = router;
