import React, { useState } from 'react'
import ImageReactTesting from "../../assets/image/16. React Testing.png"
import ImageReactTesting2 from "../../assets/image/16.1 React Testing.png"
import { Carousel, Card } from 'react-bootstrap';
const ReactTesting = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Card>
      <Card.Header as="h5">React Testing</Card.Header>
      <Carousel variant="dark" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ImageReactTesting}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ImageReactTesting2}
          />
        </Carousel.Item>
      </Carousel>
      <Card.Body>
        <Card.Text>
          <b>Testing</b> Digunakan untuk memastikan hasil aplikasi yang dibuat telah sesuai dengan yang
          diharapkan, dan dapat juga digunakan sebagai indikator untuk melakukan perubahan pada bagian yang lain
          jika mayoritas kode yang kita buat dan telah di test tidak menghasilkan error.
        </Card.Text>
        <a rel="noreferrer" href="https://github.com/Shironim/Task_ReactTesting_ReactJS_AltaID" target="_blank"
          class="card-link">Link
          Repo</a>
      </Card.Body>
    </Card>

  );
}
export default ReactTesting;
