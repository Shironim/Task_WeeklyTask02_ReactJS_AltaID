import React, { useState } from 'react'
import ImageForm from "../../assets/image/14. react form.png"
import ImageForm2 from "../../assets/image/14.1 react form.png"
import { Carousel, Card } from 'react-bootstrap';
const UIUX = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Card>
      <Card.Header as="h5">React Form</Card.Header>
      <Carousel variant="dark" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ImageForm}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ImageForm2}
          />
        </Carousel.Item>
      </Carousel>
      <Card.Body>
        <Card.Text>
          <b>Form</b> digunakan pada banyak website, hampir setiap website memiliki sistem login yang berisi form
          dan banyak website yang juga memiliki inputan lain seperti search bar atau form feedback.
          <br />
          Jenis form
          <ol>
            <li>Input</li>
            <li>Textarea</li>
            <li>Radio button</li>
            <li>Checkbox button</li>
            <li>Select</li>
          </ol>
        </Card.Text>
        <a rel="noreferrer" href="https://github.com/Shironim/Task_ReactForm_ReactJs_AltaID" target="_blank" class="card-link">Link
          Repo</a>
      </Card.Body>
    </Card>

  );
}
export default UIUX;
