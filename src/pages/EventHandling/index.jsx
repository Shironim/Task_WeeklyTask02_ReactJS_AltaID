import React, { useState } from 'react'
import ImageEvent from "../../assets/image/12. event handling.png"
import ImageEvent2 from "../../assets/image/12.1 event handling.png"
import { Carousel, Card } from 'react-bootstrap';
const Event = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Card>
      <Card.Header as="h5">Event Handling</Card.Header>
      <Carousel variant="dark" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ImageEvent}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ImageEvent2}
          />
        </Carousel.Item>
      </Carousel>
      <Card.Body>
        <Card.Text>
          <b>Event</b> adalah suatu aksi yang terjadi karena adanya interaksi oleh pengguna dengan
          component.
          <br />
          <b>Handling Event</b>
          Metode yang dilakukan untuk menindaklanjuti apa yang akan dilakukan setelah interaksi oleh pengguna.
        </Card.Text>
        <a rel="noreferrer" href="https://github.com/Shironim/Task_eventHandling_ReactJS_AltaID" target="_blank"
          class="card-link">Link
          Repo</a>
      </Card.Body>
    </Card>

  );
}
export default Event;
