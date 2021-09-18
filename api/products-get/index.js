const data = require("../shared/product-data")

module.exports = async function (context, req) {
  try {
    const products = data.getProducts();
    context.res.status(200).json(products); 
  } catch (eror) {
    context.res.status(500).send(eror);
  }
};