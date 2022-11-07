const Category = require("./Category");
const Product = require("./Product");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// One-to-many
Category.hasMany(Product);
Product.belongsTo(Category);

// Many-to-many
Product.belongsToMany(Tag, { through: "product-tag" });
Tag.belongsToMany(Product, { through: "product-tag" });

module.exports = { Category, Product, Tag, ProductTag };
