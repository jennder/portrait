import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import "../styles/main.css";
import GalleryItem from "./GalleryItem";

const FixedWidth = styled.div`
  margin: auto;
  position: relative;
  padding: 100px 0;
`;
class SideBySide extends React.Component {
  render() {
    return (
      <Container>
        <FixedWidth>
          <Row className="align-items-center" style={{ padding: 0 }}>
            <Col fluid style={{ paddingRight: "30px" }}>
              <GalleryItem url={this.props.url[0]} />
            </Col>
            <Col fluid style={{ paddingLeft: "30px" }}>
              <GalleryItem url={this.props.url[1]} />
            </Col>
          </Row>
        </FixedWidth>
      </Container>
    );
  }
}

export default SideBySide;
