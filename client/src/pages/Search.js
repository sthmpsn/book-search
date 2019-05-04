import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import ListGroup from 'react-bootstrap/ListGroup'

var Book1 = {
    id: "1",
    title: "LOTR",
}

var Book2 = {
    id: "2",
    title: "Harry Potter",
}

class Search extends React.Component {

    state = {
        books = [Book1, Book2]
    }

    render(){
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>SEARCH PAGE</h1>
                            {this.state.books.map(book => (
                            <ListGroup>
                                <ListGroup.Item>{book.id}</ListGroup.Item>
                                <ListGroup.Item>{book.title}</ListGroup.Item>
                            </ListGroup>
                            ))}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Search;