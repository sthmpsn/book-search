import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import "./book.css";

function Book(props) {

    return (
        <Row className="border px-5">
            <Col lg={3}>
                <Image src={props.book.imageLink} thumbnail fluid/>
            </Col>
            <Col lg={6} className="text-center">
                <ListGroup>
                    <ListGroup.Item className="border-0">{props.book.id}</ListGroup.Item>
                    <ListGroup.Item className="border-0">{props.book.title}</ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
    );
}

export default Book;