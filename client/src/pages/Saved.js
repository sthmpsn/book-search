import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Book from "../components/Book/Books";


class Saved extends React.Component{

    render(){
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>SAVED BOOKS PAGE</h1>
                            <Book
                                
                            
                            />

                    </Col>
                </Row>
            </Container>
        );
    }




}

export default Saved;