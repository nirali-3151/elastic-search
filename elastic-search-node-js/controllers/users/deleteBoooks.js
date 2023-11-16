const elasticClient = require("../../app/connection");

exports.delete_books = async(req, res, next) => {
    const result = await elasticClient.delete({
        index: "books",
        id: req.query.id,    
  });
  res.send(result);
}