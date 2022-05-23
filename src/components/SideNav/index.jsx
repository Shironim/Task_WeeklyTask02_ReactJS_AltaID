import React from 'react'
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import Style from "./style.module.css";
const SideNav = () => {
  return (
    <Nav className={`${Style.flex_column} ${Style.navigasi}`}>
      <Link to={"/"} >Git</Link>
      <Link to={"/uiux"} >UIUX</Link>
      <Link to={"/figma"} >Figma</Link>
      <Link to={"/html"} >HTML</Link>
      <Link to={"/css"} >CSS</Link>
      <Link to={"/bootstrap"} >Bootstrap</Link>
      <Link to={"/javascript"} >Javascript</Link>
      <Link to={"/cleancode"} >CleanCode</Link>
      <Link to={"/introReact"} >IntroReact</Link>
      <Link to={"/reactfundamental"} >ReactFundamental</Link>
      <Link to={"/reactrouter"} >ReactRouter</Link>
      <Link to={"/reactform"} >ReactForm</Link>
      <Link to={"/reactredux"} >ReactRedux</Link>
      <Link to={"/reacttesting"} >ReactTesting</Link>
    </Nav >
  )
}
export default SideNav;