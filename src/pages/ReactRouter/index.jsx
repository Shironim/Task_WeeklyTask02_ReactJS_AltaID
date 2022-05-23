import React, { useState } from 'react'
import ImageReactRouter from "../../assets/image/11. react router.png"
import ImageReactRouter2 from "../../assets/image/11.1 react router.png"
import { Carousel, Card } from 'react-bootstrap';
const ReactRouter = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Card>
      <Card.Header as="h5">React Router</Card.Header>
      <Carousel variant="dark" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ImageReactRouter}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ImageReactRouter2}
          />
        </Carousel.Item>
      </Carousel>
      <Card.Body>
        <Card.Text>
          <b>Router</b> Merupakan modul dalam React yang berfungsi melakukan proses navigasi pada SPA (Single
          Page Application)
        </Card.Text>
        <a rel="noreferrer" href="https://github.com/Shironim/Task_ReactRouter_ReactJs_AltaID" target="_blank"
          class="card-link">Link
          Repo</a>
      </Card.Body>
    </Card >

  );
}
export default ReactRouter;
