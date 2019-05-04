import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Book from "../components/Book/Book";

var Book1 = {
    id: "1",
    title: "LOTR",
    imageLink: "https://www.pinsound.org/wp-content/uploads/2017/04/lotr_bg.resized.png"
}

var Book2 = {
    id: "2",
    title: "Harry Potter",
    imageLink: "https://m.media-amazon.com/images/M/MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg"
}

class Search extends React.Component {

    state = {
        books: [Book1, Book2]
    };


    render(){
        return (
            <Container>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group controlID="frmSearchBook">
                                <Form.Label>Search Google Books</Form.Label>
                                <Form.Control type="input" />
                                <Form.Text className="text-muted">
                                    Search by Title or Author name
                                </Form.Text>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Search
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>Search Results Here</h1>
                            {this.state.books.map(book => (
                                <Book
                                    book = {book}
                                />
                            ))}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Search;