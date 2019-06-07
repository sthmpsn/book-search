import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Book from "../components/Book/Book";
import API from "../utils/API";


class Saved extends React.Component {
    state = {
        savedBooks: []
    };

    componentDidMount() {
        this.loadSavedBooks();
    };

    loadSavedBooks = () => {
        API.getSavedBooks()
        .then(res => 
            this.setState({savedBooks: res.data})
        )
        .catch(err => console.log(err));
    }

    handleDeleteBook = (bookId) => {
        console.log("Delete Book Request: ",bookId)
        API.deleteBook(bookId)
            .then(res => {
                console.log("Delete Book ID: ",res.data);
                this.loadSavedBooks();
            })
            .catch(err => console.log(err));
    };


    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        {/* <h5>SAVED BOOKS PAGE</h5> */}
                        {this.state.savedBooks.map(book => {
                            return (
                                <Book className="border dark px-5"
                                    key={book._id}
                                    book={book}
                                    bookStatus="saved"
                                    handleDeleteBook={this.handleDeleteBook}
                                    />
                            );
                        })}
                    </Col>
                </Row>
            </Container>
        );
    }




}

export default Saved;