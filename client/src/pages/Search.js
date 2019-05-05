import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
        API.getGoogleBooks(this.state.searchString)
            .then(res => {
                // console.log(res.data);
                this.setState({ books: res.data })
            })
            .catch(err => console.log(err));
    };



    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group controlID="frmSearchBook">
                                <Form.Label>Search Google Books</Form.Label>
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
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={this.handleFormSubmit}>
                                Search
                            </Button>
                        </Form>
                    </Col>
                </Row>
                    <h1>Search Results Here</h1>
                    {this.state.books.map(book => (
                        <Book className="border dark px-5"
                            book={book}
                        />
                    ))}
            </Container>
        );
    }
}

export default Search;