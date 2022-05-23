import React, { useState } from 'react'
import ImageHooks from "../../assets/image/13. react hook.png"
import ImageHooks2 from "../../assets/image/13.1 react hook.png"
import { Carousel, Card } from 'react-bootstrap';
const UIUX = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Card>
      <Card.Header as="h5">React Hooks</Card.Header>
      <Carousel variant="dark" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ImageHooks}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ImageHooks2}
          />
        </Carousel.Item>
      </Carousel>
      <Card.Body>
        <Card.Text>
          <b>Hooks</b> merupakan fitur baru sejak React 16.8
          <br />
          Kenapa menggunakan Hooks ?
          <br />
          Sebelum diperkenalkan nya Hooks, developer React JS kesulitan untuk menggunakan kembali logic antar
          komponen
        </Card.Text>
        <a rel="noreferrer" href="https://github.com/Shironim/Task_reacthook_ReactJS_AltaID" target="_blank" class="card-link">Link
          Repo</a>
      </Card.Body>
    </Card>

  );
}
export default UIUX;
