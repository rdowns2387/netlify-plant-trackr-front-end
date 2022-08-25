import "./App.css";
import { useState, useEffect, Link } from "react";
import Axios from "axios";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import AddPlant from "./components/AddPlant";
import { Homepage } from "./pages/Homepage";
import { Plant } from "./pages/Plant";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

class LambdaDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, msg: null };
  }

  handleClick = (api) => (e) => {
    e.preventDefault();

    this.setState({ loading: true });
    fetch("/.netlify/functions/" + api)
      .then((response) => response.json())
      .then((json) => this.setState({ loading: false, msg: json.msg }));
  };

  render() {
    const { loading, msg } = this.state;

    return (
      <p>
        <button onClick={this.handleClick("hello")}>
          {loading ? "Loading..." : "Call Lambda"}
        </button>
        <button onClick={this.handleClick("async-dadjoke")}>
          {loading ? "Loading..." : "Call Async Lambda"}
        </button>
        <br />
        <span>{msg}</span>
      </p>
    );
  }
}

function App() {
  //setting a const that loads on launch
  const [listOfPlants, setListOfPlants] = useState([]);

  //contact the db using axios, then set above const to the server's response
  useEffect(() => {
    Axios.get("https://brents-plant-trackr.herokuapp.com/getPlants").then(
      (response) => {
        setListOfPlants(response.data);
      }
    );
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">Plant Trackr</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/addplant">Add plant</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/addplant" element={<AddPlant />} />
          <Route path="*" element={<h1>Page not found</h1>} />
          <Route path="/plant/:plant_id" element={<Plant />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
