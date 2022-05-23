import React, { useState } from 'react'
import ImageRedux from "../../assets/image/15. react redux.png"
import ImageRedux2 from "../../assets/image/15.1 react redux.png"
import { Carousel, Card } from 'react-bootstrap';
const ReactRedux = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Card>
      <Card.Header as="h5">Global State Management (Redux)</Card.Header>
      <Carousel variant="dark" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ImageRedux}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ImageRedux2}
          />
        </Carousel.Item>
      </Carousel>
      <Card.Body>
        <Card.Text>
          Dengan Redux memungkinkan developer untuk menyimpan state dalam lingkup global yang dapat diakses oleh
          komponen yang berbeda tanpa melalui props.
        </Card.Text>
        <a rel="noreferrer" href="https://github.com/Shironim/Task_ReactRedux_ReactJs_AltaID" target="_blank"
          class="card-link">Link
          Repo</a>
      </Card.Body>
    </Card>

  );
}
export default ReactRedux;
