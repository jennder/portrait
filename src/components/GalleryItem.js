import React from "react";
import { Container } from "react-bootstrap";
import "../styles/main.css";

class GalleryItem extends React.Component {
  render() {
    return (
      <Container fluid style={{ padding: 0 }}>
        <img src={this.props.url} />
      </Container>
    );
  }
}

export default GalleryItem;
