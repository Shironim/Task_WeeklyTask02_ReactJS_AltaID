import React from 'react'
import { Card } from 'react-bootstrap';
import ImageFigma from "../../assets/image/3. desain figma.png";
const Figma = () => {
  return (
    <Card>
      <Card.Header as="h5">Figma Desain</Card.Header>
      <Card.Img variant="top" src={ImageFigma} />
      <Card.Body>
        <Card.Text>
          <i><b>Figma</b></i> Adalah sebuah software desain UI UX berbasis vektor yang dapat diakses melalui
          website dan dapat di
          download untuk windows dan macOS.
          <br />
          Figma harus terkoneksi dengan internet karena menggunakan penyimpanan di `cloud`, saat bekerja dan
          `offline`, dapat tetap melanjutkan pekerjaan tetapi untuk menyimpannya harus terkoneksi dengan internet.
        </Card.Text>
        <a rel="noreferrer" href="https://www.figma.com/proto/rs8NooUm6SRKSBRUi3y7de/Tugas-Alta-ID?node-id=4%3A12&scaling=contain&page-id=0%3A1&starting-point-node-id=4%3A12"
          target="_blank" class="card-link">Figma Design Link</a>
      </Card.Body>
    </Card>
  )
}
export default Figma;
