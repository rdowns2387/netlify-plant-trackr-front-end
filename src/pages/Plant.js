import { useState, useEffect } from "react";
import Axios from "axios";

import { Col, Row, Container, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import "./plantPage.css";

export const Plant = () => {
  //setting a const that loads on launch
  const [plant, setPlant] = useState([]);
  let { plant_id } = useParams();

  useEffect(() => {
    Axios.get(
      `https://gregarious-gecko-95f3fc.netlify.app/plant/${plant_id}`
    ).then((response) => {
      setPlant(response.data);
    });
  }, []);

  console.log("this is the id:", plant._id);
  return (
    <div>
      <div className="plantPageHeader">
        <Container>
          <Row style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
            <Col>
              <img
                alt=""
                className="plantPageImg"
                src={`/uploads/${plant.file}`}
              />
            </Col>
            <Col xs={9}>
              <h1>{plant.name}</h1>
              <h2>
                <Badge>{plant.scientificName}</Badge>
              </h2>
              <h3>
                {plant.dateAcquired}
                {plant.dateApproximate ? "(Approxmiate)" : ""}
              </h3>
            </Col>
          </Row>
        </Container>
      </div>
      <Container style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
        <Row>
          <Col className="plantDataCard">
            <h4>Decontamination Routine</h4>
            <ul>
              {plant.replacedSoil ? (
                <li class="completedListItem">Replaced soil</li>
              ) : (
                ""
              )}
              {plant.alcoholSpritz ? (
                <li class="completedListItem">Alcohol Spritz</li>
              ) : (
                ""
              )}
              {plant.neemFoliar ? (
                <li class="completedListItem">Neem (Foliar)</li>
              ) : (
                ""
              )}
              {plant.hydrogenPeroxideSoak ? (
                <li class="completedListItem">Hydrogen Peroxide Soak</li>
              ) : (
                ""
              )}
              {plant.insecticideSpinosad ? (
                <li class="completedListItem">
                  Insecticide - Spinosad (Foliar)
                </li>
              ) : (
                ""
              )}
              {plant.hydrogenPeroxideSoak ? (
                <li class="completedListItem">
                  Insecticide - Pyrethrin (Foliar)
                </li>
              ) : (
                ""
              )}
              {plant.insecticideImidacloprid ? (
                <li class="completedListItem">
                  Insecticide - Imidacloprid (Systemic Granules)
                </li>
              ) : (
                ""
              )}
            </ul>
          </Col>
          <Col className="plantDataCard">
            <h4>Light Requirement</h4>
            <h1>{plant.sunlight}</h1>
          </Col>
        </Row>
        <Row>
          <Col className="plantDataCard">
            <h4>Watering Guidelines</h4>
            <ul>
              {plant.completeDry ? (
                <li class="completedListItem">Allow soil to completely dry</li>
              ) : (
                <li class="completedListItem">
                  Do not allow soil to completely dry
                </li>
              )}
              {plant.topInches ? (
                <li class="completedListItem">
                  Allow top few inches of soil to dry out before watering
                </li>
              ) : (
                ""
              )}
              {plant.keepMoist ? (
                <li class="completedListItem">Keep soil consistently moist</li>
              ) : (
                ""
              )}
              {plant.reduceWinterWater ? (
                <li class="completedListItem">
                  Reduce watering during dormancy/winter
                </li>
              ) : (
                ""
              )}
              {plant.stopWinterWater ? (
                <li class="completedListItem">
                  Stop all watering during dormancy/winter
                </li>
              ) : (
                ""
              )}
              {plant.deepWater ? (
                <li class="completedListItem">
                  Water deeply (drench soil when watering, waiting for water to
                  flow from drainage
                </li>
              ) : (
                ""
              )}
              {plant.bottomWatering ? (
                <li class="completedListItem">Bottom watering recommended</li>
              ) : (
                ""
              )}
              {plant.waterMossPoll ? (
                <li class="completedListItem">Water any moss poll</li>
              ) : (
                ""
              )}
              {plant.mist ? (
                <li class="completedListItem">Mist regulary</li>
              ) : (
                ""
              )}
            </ul>
          </Col>
          <Col className="plantDataCard">
            <h4>Recommended Humidity</h4>
            <h1>{plant.humidity}</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
