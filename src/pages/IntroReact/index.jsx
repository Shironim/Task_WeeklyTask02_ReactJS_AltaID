import React, { useState } from 'react'
import ImageIntro from "../../assets/image/9. intro react.png"
import ImageIntro2 from "../../assets/image/9.1 intro react.png"
import { Carousel, Card } from 'react-bootstrap';
const IntroReact = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Card>
      <Card.Header as="h5">React JS</Card.Header>
      <Carousel variant="dark" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ImageIntro}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ImageIntro2}
          />
        </Carousel.Item>
      </Carousel>
      <Card.Body>
        <Card.Text>
          <i><b>React JS</b></i> Merupakan library javascript open source untuk membuat UI yang dibuat oleh
          Facebook.
          <br />
          Kelebihan React JS
          <ol>
            <li>Deklaratif</li>
            <li>Berbasis Komponen</li>
            <li>Cross Platform</li>
          </ol>
        </Card.Text>
        <a rel="noreferrer" href="https://github.com/Shironim/Task_IntroReact_ReactJS_AltaID" target="_blank"
          class="card-link">Link
          Repo</a>
      </Card.Body>
    </Card >

  );
}
export default IntroReact;
