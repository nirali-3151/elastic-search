const router = require('express').Router();

const { add_books } = require('../controllers/users/addBooks')
const { update_books } = require("../controllers/users/updateBooks")
const { view_books } = require("../controllers/users/viewBooks")
const {delete_books} = require("../controllers/users/deleteBoooks");
const { search_books } = require('../controllers/users/searchBooks');

router.post('/add_users', add_books)
router.put('/update-books/:id', update_books)
router.get("/view-books", view_books)
router.delete("/delete-books" ,delete_books)
router.get("/search-books" ,search_books)

module.exports = router;
