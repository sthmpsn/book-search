const router = require("express").Router();
const booksController = require("../../controllers/booksController");
const axios = require("axios");

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router.route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);


// Matches with "/api/books/search"
router.route("/search") 
  .post(function(req, res){
    var query = req.body.searchTerm
    console.log("Search Term: " +query)
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
      .then(function(response){
        books = response.data.items;
        result = [];

        books.forEach(book => {
          result.push({"title": book.volumeInfo.title})
          result.push({"authors": book.volumeInfo.authors})
          result.push({"desc": book.volumeInfo.description})
          result.push({"imageLink": book.volumeInfo.imageLinks.thumbnail})
          result.push({"link": book.volumeInfo.previewLink})
        });

        console.log(result);


        res.json(result);
      });
  
  });


module.exports = router;
