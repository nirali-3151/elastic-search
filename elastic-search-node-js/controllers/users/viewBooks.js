const elasticClient = require("../../app/connection");

exports.view_books = async (req, res, next) => {
    const result = await elasticClient.search({     
        index: "books",
        query: { match_all: {} },
    });

    res.send(result);
}