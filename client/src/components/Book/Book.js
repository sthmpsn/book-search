import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import "./book.css";
import Button from "react-bootstrap/Button";

function Book(props) {

    return (
        <Row>
            <Col>
            <Row className="justify-content-between">
                <Col lg={5}>
                    <ListGroup className="h6">
                        <ListGroup.Item className="border-0">{props.book.title}</ListGroup.Item>
                        <ListGroup.Item className="border-0">Written By: {props.book.authors}</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col lg={3}>
                    <Button className="mx-2">View</Button>
                    <Button className="mx-2">Save</Button>
                </Col>
            </Row>
            <Row>
                <Col lg={3}>
                    <a href={props.book.link} target="_blank">
                        <Image src={props.book.imageLink} thumbnail fluid/>
                    </a>
                </Col>
                <Col lg={9} className="text-center">
                        {props.book.desc}
                </Col>
            </Row>
            </Col>
        </Row>
    );
}

export default Book;