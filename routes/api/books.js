const router = require("express").Router();
const booksController = require("../../controllers/booksController");
const axios = require("axios");

// Matches with "/api/books"
// GET: Only "Saved" books would be entered into the DB
// POST: Create/Add book to DB if user "Saved" book
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

 // Matches with "/api/books/:id"
// Delete book from db if user removes the "Saved" status
router.route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

  
// Matches with "/api/books/search"
// This goes out to Google Books API and performace a Query
router.route("/search")
  .post(function (req, res) {
    var query = req.body.searchTerm;
    console.log("Search Term: " + query.replace(/ /g,'%20'));
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query.replace(/ /g,'%20'))
      .then(function (response) {
        books = response.data.items;
        result = [];

        books.forEach(book => {
          console.log(book.volumeInfo.title);
          // Don't show any books without a thumbnail image. 
          if (book.volumeInfo.imageLinks !== undefined){
            result.push({
              "title": book.volumeInfo.title,
              "authors": book.volumeInfo.authors,
              "desc": book.volumeInfo.description,
              "imageLink": book.volumeInfo.imageLinks.thumbnail,
              "link": book.volumeInfo.previewLink,
              "gid": book.id
            });
          }
        });
        res.json(result);
      })
      .catch(function(error){
        console.log(error);
      });
  });


module.exports = router;
