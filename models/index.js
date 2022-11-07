const Category = require("./Category");
const Product = require("./Product");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

Product.belongsToMany(Tag, { through: "product-tag" });

Tag.belongsToMany(Product, { through: "product-tag" });

module.exports = { Category, Product, Tag, ProductTag };
