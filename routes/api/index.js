const router = require("express").Router();
const bookRoutes = require("./books");

// This file will pass requests for "top-level" api routes to the appropriate javascript file that handle more detailed routes

// Book routes
router.use("/books", bookRoutes);

module.exports = router;
