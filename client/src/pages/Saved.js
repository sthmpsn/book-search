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
        API.getSavedBooks()
            .then(res => this.setState({savedBooks: res.data}))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h5>SAVED BOOKS PAGE</h5>
                        {this.state.savedBooks.map(book => (
                            <Book className="border dark px-5"
                                book={book}
                            />
                        ))}
                    </Col>
                </Row>
            </Container>
        );
    }




}

export default Saved;