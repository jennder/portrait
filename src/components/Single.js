import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import "../styles/main.css";
import GalleryItem from "./GalleryItem";

const FixedWidth = styled.div`
  margin: auto;
  position: relative;
  padding: 100px 0;
`;
class Single extends React.Component {
  render() {
    return (
      <Container fluid style={{ padding: 0 }}>
        <FixedWidth>
          <GalleryItem url={this.props.url} />
        </FixedWidth>
      </Container>
    );
  }
}

export default Single;
