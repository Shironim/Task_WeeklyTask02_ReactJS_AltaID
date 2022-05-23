import React, { useState } from 'react'
import ImageUIUX from "../../assets/image/2. ui ux.png"
import ImageUIUX2 from "../../assets/image/2.1 ui ux.png"
import { Carousel, Card } from 'react-bootstrap';
const UIUX = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Card>
      <Card.Header as="h5">Introduction UI UX</Card.Header>
      <Carousel variant="dark" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ImageUIUX}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ImageUIUX2}
          />
        </Carousel.Item>
      </Carousel>
      <Card.Body>
        <Card.Text>
          <i><b>User Experience</b></i> adalah apapun yang pengguna rasakan setiap menggunakan produk yang kita
          buat.
          <br />
          UX terdiri dari 6 bagian :
          <ol>
            <li>Bussines</li>
            <li>Bussines Logic</li>
            <li>Technology, Design</li>
            <li>Interaction Logic</li>
            <li>Computer Communication</li>
          </ol>
        </Card.Text>
        <a rel="noreferrer" href="https://docs.google.com/document/d/13XsGR7MOMgDF0dC1-ShVKlf45qQU8-1pLLBxExc0lIU/edit?usp=sharing"
          target="_blank" class="card-link">Link Pratikum</a>
      </Card.Body>
    </Card>

  );
}
export default UIUX;
