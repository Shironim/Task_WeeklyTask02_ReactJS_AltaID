import React from 'react'
import { Card, Button } from 'react-bootstrap';
import ImageBs from "../../assets/image/6. bootstrap.png";
const Bootstrap = () => {
  return (
    <Card>
      <Card.Header as="h5">Bootstrap</Card.Header>
      <Card.Img variant="top" src={ImageBs} />
      <Card.Body>
        <Card.Text>
          <b>Bootstrap</b> Adalah sebuah framework front-end yang dibuat untuk mempercepat pekerjaan developer.

          Bootstrap berisi file file HTML, CSS dan Javascript. https://getbootstrap.com/
          <br />
          Kelebihan Bootstrap
          <ol>
            <li>Bootstrap mempermudah pekerjaan.</li>
            <li>Hampir semua kebutuhan Front end sudah tersedia di bootstrap.</li>
            <li>Banyak template tersedia.</li>
            <li>Bootstrap dapat di *custom*.</li>
            <li>Bootstrap *open source*</li>
          </ol>
        </Card.Text>
        <a rel="noreferrer" href=" https://github.com/Shironim/Task_Bootstrap_ReactJS_AltaID" target="_blank"
          class="card-link">Link
          Repo</a>
      </Card.Body>
    </Card>
  )
}
export default Bootstrap;
