import axios from "axios";

// Export an object containing methods we'll use for searching Google Books

export default {
    getGoogleBooks: function (searchString) {
        return axios.post("/api/books/search", {"searchTerm": searchString })
            
    }
};
