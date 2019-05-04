import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


class Book extends React.Component{

    render(){
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>SAVED BOOKS PAGE</h1>
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

export default Book;