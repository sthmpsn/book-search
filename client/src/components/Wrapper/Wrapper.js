import React from "react";
import Container from "react-bootstrap/Container";

function Wrapper(props){
    return <Container id="wrapper" className="wrapper fluid">{props.children}</Container>;
}

export default Wrapper;