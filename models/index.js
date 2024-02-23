// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category{
  //define the table needed to store the foreign keys
  through: {
    model: Tag,
    unique: false
  },
  //Define an alias for when data is retrieved
  as: ''
})

// Categories have many Products
Category.belongsTo(Product, {
  //define the table needed to store the foreign keys
  through: {
    model: Tag,
    unique: false
  },
});

// Products belongToMany Tags (through ProductTag)
Product.belongToMany(ProductTag, {
    //define the table needed to store the foreign keys
    through: {
      model: Tag,
      unique: false
    },
    //Define an alias for when data is retrieved
    as: ''
});

// Tags belongToMany Products (through ProductTag)
Tags.belongToMany(ProductTag, {
  //define the table needed to store the foreign keys
  through: {
    model: Tag,
    unique: false
  },
  //Define an alias for when data is retrieved
  as: ''
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
