import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Book from "../components/Book/Book";
import API from "../utils/API";


class Search extends React.Component {
    state = {
        books: [],
        searchString: ""
    };

    handleInputChange = event => {
        this.setState({ searchString: event.target.value });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        API.searchGoogleBooks(this.state.searchString)
            .then(res => {
                // console.log(res.data);
                this.setState({ books: res.data })
            })
            .catch(err => console.log(err));
    };



    render() {
        return (
            <Container>
                <Jumbotron className="text-center my-3">
                    <h1>(React) Google Books Search</h1>
                    <h2>Search for and Save Books of Interest</h2>
                </Jumbotron>
                <Row>
                    <Col>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Group controlID="frmSearchBook" className="my-4 p-4 border">
                                        <Form.Label>Book Search</Form.Label>
                                        <Form.Control
                                            type="input"
                                            value={this.state.searchString}
                                            onChange={this.handleInputChange}
                                            name="searchBox"
                                            id="searchBox"
                                        />
                                        <Form.Text className="text-muted">
                                            Search by Title or Author name
                                        </Form.Text>
                                        <Col className="text-right">
                                            <Button variant="primary" type="submit" onClick={this.handleFormSubmit}>
                                                Search
                                            </Button>
                                        </Col>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row >

                            </Row>
                        </Form>
                    </Col>
                </Row>
                <Container className="border px-5 py-3">
                    <h5>Results</h5>
                    {this.state.books.map(book => (
                        <Book className="border dark px-5"
                            book={book}
                        />
                    ))}
                </Container>
            </Container>
        );
    }
}

export default Search;