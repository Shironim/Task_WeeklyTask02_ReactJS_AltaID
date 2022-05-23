import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import SideNav from "./components/SideNav";
import { Routes, Route } from "react-router-dom";
import { Container, Nav, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Git from "./pages/Git";
import UIUX from "./pages/UIUX";
import Figma from "./pages/Figma";
import HTML from "./pages/HTML";
import CSS from "./pages/CSS";
import Bootstrap from "./pages/Bootstrap";
import Javascript from "./pages/Javascript";
import CleanCode from "./pages/CleanCode";
import IntroReact from "./pages/IntroReact";
import ReactFundamental from "./pages/ReactFundamental";
import ReactRouter from "./pages/ReactRouter";
import ReactForm from "./pages/ReactForm";
import ReactRedux from "./pages/ReactRedux";
import ReactTesting from "./pages/ReactTesting";

function App() {
  return (
    <Container fluid>
      <NavBar />
      <Row>
        <Col xl={2}
          style={{
            backgroundColor: "#F5F1ED",
            height: "90vh",
            borderTopRightRadius: "8px",
            borderBottomRightRadius: "8px"
          }}>
          <SideNav />
        </Col>
        <Col xl={4}>
          <Routes>
            <Route path="/" element={<Git />} />
            <Route path="/uiux" element={<UIUX />} />
            <Route path="/figma" element={<Figma />} />
            <Route path="/html" element={<HTML />} />
            <Route path="/css" element={<CSS />} />
            <Route path="/bootstrap" element={<Bootstrap />} />
            <Route path="/javascript" element={<Javascript />} />
            <Route path="/cleancode" element={<CleanCode />} />
            <Route path="/introReact" element={<IntroReact />} />
            <Route path="/reactfundamental" element={<ReactFundamental />} />
            <Route path="/reactrouter" element={<ReactRouter />} />
            <Route path="/reactform" element={<ReactForm />} />
            <Route path="/reactredux" element={<ReactRedux />} />
            <Route path="/reacttesting" element={<ReactTesting />} />
          </Routes>
        </Col>
      </Row>

    </Container>
  );
}

export default App;
