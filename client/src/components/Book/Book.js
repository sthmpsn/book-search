import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import "./book.css";
import Button from "react-bootstrap/Button";

function Book(props) {

    return (
        <Row className="my-4 border border-secondary rounded">
            <Col className="border">
                <Row className="justify-content-between">
                    <Col lg={5} className="mt-3">
                        <ListGroup>
                            <ListGroup.Item className="border-0 py-1 h5 pl-1">{props.book.title}</ListGroup.Item>
                            <ListGroup.Item className="border-0 py-1 h6 pl-1">Written By: {props.book.authors}</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col lg={3} className="mt-3 text-right">
                        <Button className="mx-2" href={props.book.link} target="_blank">View</Button>
                        <Button className="mx-2">Save</Button>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3}>
                        <a href={props.book.link} target="_blank">
                            <Image src={props.book.imageLink} thumbnail fluid/>
                        </a>
                    </Col>
                    <Col lg={9} className="book-desc py-2">
                            {props.book.desc}
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default Book;