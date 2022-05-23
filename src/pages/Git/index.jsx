import React from 'react'
import { Card, Button } from 'react-bootstrap';
import ImageGit from "../../assets/image/1. Screenshot_Tugas Github.png";
const Git = () => {
  return (
    <Card>
      <Card.Header as="h5">Version Control and Branch Management (Git)</Card.Header>
      <Card.Img variant="top" src={ImageGit} />
      <Card.Body>
        <Card.Text>
          <b>Git</b> adalah sebuah software untuk mengatur versi dari source code atau biasa disebut sebagai
          <i>Version
            Control System</i> (VCS).
          <br />
          <b>Github</b> adalah sebuah website tempat penyimpanan source code atau dapat dianalogikan seperti hal
          nya
          google drive yang terintegrasi dengan software git
        </Card.Text>

      </Card.Body>
    </Card>
  )
}
export default Git;
