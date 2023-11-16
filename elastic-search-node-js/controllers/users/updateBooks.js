const elasticClient = require("../../app/connection");

exports.update_books = async (req, res, next) => {
    const result = await elasticClient.update({
        index: "books",
        id: req.params.id,
        body: {
            doc: {
                title: req.body.title,
                author: req.body.author,
                content: req.body.content,
            }
        },
    });
    res.send(result);
}