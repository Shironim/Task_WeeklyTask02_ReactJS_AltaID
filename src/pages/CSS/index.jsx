import React, { useState } from 'react'
import ImageCSS from "../../assets/image/5. css.png"
import ImageCSS2 from "../../assets/image/5.1 css.png"
import { Carousel, Card } from 'react-bootstrap';
const CSS = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Card>
      <Card.Header as="h5">CSS</Card.Header>
      <Carousel variant="dark" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ImageCSS}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ImageCSS2}
          />
        </Carousel.Item>
      </Carousel>
      <Card.Body>
        <Card.Text>
          <i><b>CSS</b></i> (Cascading Style Sheet) Sebuah bahasa untuk melakukan <i>*styling*</i> html.
          <br />
          Ada 3 cara menggunakan CSS kedalam HTML
          <ol>
            <li>External CSS</li>
            <li>Internal CSS</li>
            <li>Inline CSS</li>
          </ol>
        </Card.Text>
        <a rel="noreferrer" href="https://github.com/Shironim/Task_CSS_ReactJS_AltaID" target="_blank" class="card-link">Link
          Repo</a>
      </Card.Body>
    </Card >

  );
}
export default CSS;
