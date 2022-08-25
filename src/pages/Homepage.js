import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import "bootstrap/dist/css/bootstrap.min.css";

export const Homepage = () => {
  //setting a const that loads on launch
  const [listOfPlants, setListOfPlants] = useState([]);

  //contact the db using axios, then set above const to the server's response
  useEffect(() => {
    Axios.get("https://gregarious-gecko-95f3fc.netlify.app/getPlants").then(
      (response) => {
        setListOfPlants(response.data);
      }
    );
  }, []);
  return (
    <div>
      {/* Plants Display */}
      <div className="plantsDisplay">
        <div className="plantCounter">
          <Row className="outer-margin">
            <Col>
              <h1>{listOfPlants.length} Plants</h1>
            </Col>
            <Col className="float-right">
              <Link to="/addplant">
                <Button>Add Plant</Button>
              </Link>
            </Col>
          </Row>
        </div>
        <Row className="outer-margin">
          {listOfPlants.map((plant) => {
            return (
              <Col>
                <Link className="plantCardLink" to={`/plant/${plant._id}`}>
                  <Card className="plantCard" style={{ width: "18rem" }}>
                    <Card.Img
                      className="plantCardImg"
                      variant="top"
                      src={`/uploads/${plant.file}`}
                    />
                    <Card.Body>
                      <Card.Title>{plant.name}</Card.Title>
                      <h5>
                        <Badge className="oliveGreen">
                          {plant.scientificName}
                        </Badge>
                      </h5>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};
