import React from 'react'
import { Card } from 'react-bootstrap';
import ImageClean from "../../assets/image/8. clean code.png";
const CleanCode = () => {
  return (
    <Card>
      <Card.Header as="h5">Clean Code</Card.Header>
      <Card.Img variant="top" src={ImageClean} />
      <Card.Body>
        <Card.Text>
          <b>Clean Code</b> Adalah sebuah istilah untuk barisan kode yang mudah dibaca, dipahami dan diubah oleh
          programmer.

          Kenapa wajib memahami clean code
          <ol>
            <li>Clean code digunakan untuk mempermudah bekerja secara berkolaborasi</li>
            <li>Meningkatkan progress development</li>
          </ol>
        </Card.Text>
        <a rel="noreferrer" href="https://github.com/Shironim/Task_CleanCode_ReactJS_AltaID" target="_blank" class="card-link">Link
          Repo</a>
      </Card.Body>
    </Card>
  )
}
export default CleanCode;
