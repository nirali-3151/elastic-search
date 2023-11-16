const elasticClient = require("../../app/connection");

exports.add_books = async(req, res, next) => {
     const result = await elasticClient.index({
    index: "books",
    document: {
      title: req.body.title,
      author: req.body.author,
      content: req.body.content,
    },
  });
  res.send(result);
}