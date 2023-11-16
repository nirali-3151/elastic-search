const elasticClient = require("../../app/connection");

exports.search_books = async (req, res, next) => {
    const result = await elasticClient.search({
        index: "books",
        body: {
            query:
            {
                fuzzy:
                {
                    title: req.query.title
                }
            },

        }
    });
    res.send(result);
}