import * as React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import header from "../header.png";
import Helmet from "react-helmet";

import Single from "../components/Single";
import SideBySide from "../components/SideBySide";
// markup
const IndexPage = () => {
  const pathToPhoto = "static/";
  return (
    <>
      <Helmet>
        <link rel="icon" href={header} />
        <title> Jenn Der</title>
      </Helmet>
      <Container className="whole-page">
        <div className="header">no place like home</div>
        {/** the apartment */}
        <Single url={`${pathToPhoto}202012-portrait-0001.JPG`} />
        <Single url={`${pathToPhoto}202012-portrait-0014.JPG`} />
        {/** at school */}
        <Single url={`${pathToPhoto}202012-portrait-0002.JPG`} />
        <Single url={`${pathToPhoto}202012-portrait-0007.JPG`} />
        <Single url={`${pathToPhoto}202012-portrait-0006.JPG`} />
        <Single url={`${pathToPhoto}202012-portrait-0005.JPG`} />
        <Single url={`${pathToPhoto}202012-portrait-0003.JPG`} />

        {/** mylar + coffee */}
        <SideBySide
          url={[
            `${pathToPhoto}202012-portrait-0004.JPG`,
            `${pathToPhoto}202012-portrait-0016.JPG`,
          ]}
        />
        {/** thanksgiving portrait */}
        <div style={{ marginTop: "-200px" }}>
          <SideBySide
            url={[
              `${pathToPhoto}202012-portrait-0009.JPG`,
              `${pathToPhoto}202012-portrait-0008.JPG`,
            ]}
          />
        </div>
        <Single url={`${pathToPhoto}202012-portrait-0011.JPG`} />
        <Single url={`${pathToPhoto}202012-portrait-0013.JPG`} />

        {/** <GalleryItem url={`${pathToPhoto}202012-portrait-0012.JPG`}/> */}
        {/** <GalleryItem url={`${pathToPhoto}202012-portrait-0015.JPG`}/> */}
      </Container>
    </>
  );
};

export default IndexPage;
