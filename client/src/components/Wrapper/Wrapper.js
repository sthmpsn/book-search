import React from "react";
import Container from "react-bootstrap/Container";

function Wrapper(props){
    return <Container fluid id="wrapper" className="wrapper p-0 m-0">{props.children}</Container>;
}

export default Wrapper;