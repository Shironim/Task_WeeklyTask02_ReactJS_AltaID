import React from 'react'
import { Card, Button } from 'react-bootstrap';
import ImageReactFun from "../../assets/image/10. react fundamental.png";
const ReactFundamental = () => {
  return (
    <Card>
      <Card.Header as="h5">React Fundamental</Card.Header>
      <Card.Img variant="top" src={ImageReactFun} />
      <Card.Body>
        <Card.Text>
          <b>React JSX</b> JSX adalah singkatan dari Javascript XML
          <br />
          JSX adalah cara membangun sebuah halaman website seperti menggunakan HTML tetapi sebenarnya adalah
          javascript.
          <br />
          JSX adalah objek dalam javascript, sehingga JSX dapat diberi atribut, melakukan perulangan, kondisi if
          dan sebagainya.
        </Card.Text>
        <a rel="noreferrer" href="https://github.com/Shironim/Task_ReactFundamental_ReactJS_AltaID" target="_blank"
          class="card-link">Link
          Repo</a>
      </Card.Body>
    </Card>
  )
}
export default ReactFundamental;
