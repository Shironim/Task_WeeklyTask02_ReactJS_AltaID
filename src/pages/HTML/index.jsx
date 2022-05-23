import React, { useState } from 'react'
import ImageHTML from "../../assets/image/4. HTML.png"
import ImageHTML2 from "../../assets/image/4.1 HTML.png"
import { Carousel, Card } from 'react-bootstrap';
const HTML = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Card>
      <Card.Header as="h5">HTML</Card.Header>
      <Carousel variant="dark" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ImageHTML}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ImageHTML2}
          />
        </Carousel.Item>
      </Carousel>
      <Card.Body>
        <Card.Text>
          <p>
            <b>HTML</b> (Hypertext Markup Language)

            adalah bahasa yang digunakan untuk membuat kerangka pada suatu website.

            ## Fungsi dari HTML
            - Membuat struktur dari halaman website.
            - Mengatur tampilan dan isi dari website.
            - Berisi tag tag HTML untuk membuat tabel, form dll.
          </p>
        </Card.Text>
        <a rel="noreferrer" href=" https://github.com/Shironim/Task_HTML_ReactJS_AltaID" class="card-link">Link Repo</a>
      </Card.Body>
    </Card >

  );
}
export default HTML;
