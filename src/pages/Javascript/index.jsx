import React, { useState } from 'react'
import ImageJavascript from "../../assets/image/7. javascript.png"
import ImageJavascript2 from "../../assets/image/7.1 javascript.png"
import { Carousel, Card } from 'react-bootstrap';
const Javascript = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Card>
      <Card.Header as="h5">Javascript Refreshment</Card.Header>
      <Carousel variant="dark" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ImageJavascript}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ImageJavascript2}
          />
        </Carousel.Item>
      </Carousel>
      <Card.Body>
        <Card.Text>
          <i><b>Javascript</b></i> adalah bahasa pemrograman scripting yang (pada awalnya) dibuat khusus untuk pembuatan website yang lebih interaktif.
          buat.
          <br />
          Kategori tipe data
          - Primitive, adalah unit pemprosesan terkecil dan elemen paling sederhana yang tersedia dalam pemrograman. seperti tipe data,
          <ol>
            <li>String</li>
            <li>Int</li>
            <li>Bigint</li>
            <li>Boolean</li>
            <li>Float</li>
          </ol>
          - Object adalah unit yang menyimpan properti dan fungsi (method).
        </Card.Text>
        <a rel="noreferrer" href="https://docs.google.com/document/d/13XsGR7MOMgDF0dC1-ShVKlf45qQU8-1pLLBxExc0lIU/edit?usp=sharing"
          target="_blank" class="card-link">Link Pratikum</a>
      </Card.Body>
    </Card>

  );
}
export default Javascript;
