import "./AddPlant.css";
import { useState } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AddPlant() {
  //setting a const that loads on launch
  const [listOfPlants, setListOfPlants] = useState([]);
  const [name, setName] = useState("");
  const [scientificName, setScientificName] = useState("");
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [dateAcquired, setDateAcquired] = useState(null);
  const [dateApproximate, setDateApproximate] = useState(null);
  const [cameFrom, setCameFrom] = useState(null);
  const [Url, setUrl] = useState(null);
  const [replacedSoil, setReplacedSoil] = useState(null);
  const [alcoholSpritz, setAlcoholSpritz] = useState(null);
  const [neemFoliar, setNeemFoliar] = useState(null);
  const [hydrogenPeroxideSoak, setHydrogenPeroxideSoak] = useState(null);
  const [insecticideSpinosad, setInsecticideSpinosad] = useState(null);
  const [insecticidePyrethrin, setInsecticidePyrethrin] = useState(null);
  const [insecticideImidacloprid, setInsecticideImidacloprid] = useState(null);
  const [sunlight, setSunlight] = useState(null);
  const [completeDry, setCompleteDry] = useState(null);
  const [topInches, setTopInches] = useState(null);
  const [keepMoist, setKeepMoist] = useState(null);
  const [reduceWinterWater, setReduceWinterWater] = useState(null);
  const [stopWinterWater, setStopWinterWater] = useState(null);
  const [deepWater, setDeepWater] = useState(null);
  const [bottomWatering, setBottomWatering] = useState(null);
  const [waterMossPoll, setWaterMossPoll] = useState(null);
  const [mist, setMist] = useState(null);
  const [humidity, setHumidty] = useState(null);

  let navigate = useNavigate();

  //communicate with the server to create new plant
  const newPlant = (e) => {
    e.preventDefault();
    const data = new FormData();

    data.append("file", file);

    Axios.post("https://gregarious-gecko-95f3fc.netlify.app/upload", data)
      .then((response) => {
        console.log("Image uploaded");
      })
      .catch((err) => {
        console.error("Error: ", err);
      });

    Axios.post("https://gregarious-gecko-95f3fc.netlify.app/createPlant", {
      name,
      scientificName,
      file: fileName,
      dateAcquired: dateAcquired,
      dateApproximate: dateApproximate,
      cameFrom,
      replacedSoil,
      alcoholSpritz,
      neemFoliar,
      hydrogenPeroxideSoak,
      insecticideSpinosad,
      insecticidePyrethrin,
      insecticideImidacloprid,
      sunlight,
      completeDry,
      topInches,
      keepMoist,
      reduceWinterWater,
      stopWinterWater,
      bottomWatering,
      waterMossPoll,
      mist,
      humidity,
    })
      .then((response) => {
        alert("Plant added!");
        setListOfPlants([
          ...listOfPlants,
          {
            name,
            scientificName,
            fileName,
            dateAcquired,
            dateApproximate,
            replacedSoil,
            alcoholSpritz,
            neemFoliar,
            hydrogenPeroxideSoak,
            insecticideSpinosad,
            insecticidePyrethrin,
            insecticideImidacloprid,
            sunlight,
            completeDry,
            topInches,
            keepMoist,
            reduceWinterWater,
            stopWinterWater,
            bottomWatering,
            waterMossPoll,
            mist,
            humidity,
          },
        ]);
        navigate("/");
      })
      .catch((err) => {
        console.log("This is the Error: ", err);
      });
  };

  return (
    <div>
      <Container class="addPlantForm">
        <div class="addPlantForm">
          <h1>Add new plant</h1>
          <form
            onSubmit={newPlant}
            encType="multipart/form-data"
            className="createNewPlant"
          >
            <Row className="plantFormMargin">
              <h3>Basics</h3>

              <Col>
                <label>Common name</label>
                <br></br>
                <input
                  className="addPlantTextBox"
                  type="text"
                  placeholder="Plant name"
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </Col>
              <Col>
                <label>Botanical name</label>
                <br></br>
                <input
                  className="addPlantTextBox"
                  type="text"
                  placeholder="Botanical name"
                  onChange={(event) => {
                    setScientificName(event.target.value);
                  }}
                />
              </Col>
            </Row>
            <Row className="plantFormMargin">
              <Col>
                <label>Date Acquired</label>
                <br></br>
                <input
                  className="addPlantTextBox"
                  type="date"
                  placeholder="Date aquired"
                  onChange={(e) => {
                    setDateAcquired(e.target.value);
                  }}
                ></input>
              </Col>
              <Col>
                <input
                  type="checkbox"
                  id="approximateDate"
                  onChange={(e) => {
                    {
                      dateApproximate
                        ? setDateApproximate(false)
                        : setDateApproximate(true);
                    }
                  }}
                ></input>
                <label for="approximateDate"> Approximate</label>
              </Col>
            </Row>
            <Row className="plantFormMargin">
              <Col>
                <label>Where did it come from?</label>
                <input
                  className="addPlantTextBox"
                  type="text"
                  onChange={(event) => {
                    setCameFrom(event.target.value);
                  }}
                ></input>
              </Col>
              <Col>
                <label>Related URL</label>
                <input
                  className="addPlantTextBox"
                  type="text"
                  onChange={(event) => {
                    setUrl(event.target.value);
                  }}
                ></input>
              </Col>
            </Row>{" "}
            <Row className="plantFormMargin">
              <h3>Decontamination Routine</h3>
              <Col>
                <fieldset>
                  <div className="addPlantFormSelect">
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        {
                          replacedSoil
                            ? setReplacedSoil(false)
                            : setReplacedSoil(true);
                        }
                      }}
                    ></input>
                    <label for="approximateDate"> Replaced Soil</label>
                  </div>
                  <div className="addPlantFormSelect">
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        {
                          alcoholSpritz
                            ? setAlcoholSpritz(false)
                            : setAlcoholSpritz(true);
                        }
                      }}
                    ></input>
                    <label for="approximateDate"> Alcohol Spritz</label>
                  </div>
                  <div className="addPlantFormSelect">
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        {
                          neemFoliar
                            ? setNeemFoliar(false)
                            : setNeemFoliar(true);
                        }
                      }}
                    />
                    <label for="approximateDate"> Neem (Foliar)</label>
                  </div>
                  <div className="addPlantFormSelect">
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        {
                          hydrogenPeroxideSoak
                            ? setHydrogenPeroxideSoak(false)
                            : setHydrogenPeroxideSoak(true);
                        }
                      }}
                    />
                    <label for="approximateDate"> Hydrogen Peroxide Soak</label>
                  </div>
                </fieldset>
              </Col>
              <Col>
                <div className="addPlantFormSelect">
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      {
                        insecticideSpinosad
                          ? setInsecticideSpinosad(false)
                          : setInsecticideSpinosad(true);
                      }
                    }}
                  />
                  <label for="approximateDate">
                    {" "}
                    Insecticide - Spinosad (Foliar)
                  </label>
                </div>
                <div className="addPlantFormSelect">
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      {
                        insecticidePyrethrin
                          ? setInsecticidePyrethrin(false)
                          : setInsecticidePyrethrin(true);
                      }
                    }}
                  />
                  <label for="approximateDate">
                    {" "}
                    Insecticide - Pyrethrin (Foliar)
                  </label>
                </div>
                <div className="addPlantFormSelect">
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      {
                        insecticideImidacloprid
                          ? setInsecticideImidacloprid(false)
                          : setInsecticideImidacloprid(true);
                      }
                    }}
                  />
                  <label for="approximateDate">
                    {" "}
                    Insecticide - Imidacloprid (Systemic Granules)
                  </label>
                </div>
                {/* <div>
                  <input type="radio"></input>
                  <label for="approximateDate"> Other</label>
                </div> */}
              </Col>
            </Row>
            <Row className="plantFormMargin">
              <h3>Sunlight Requirements</h3>
              <Col xs={2}>
                <label>Low light</label>
              </Col>
              <Col xs={8}>
                <input
                  style={{ width: "100%" }}
                  type="range"
                  id="sunlight"
                  name="sunlight"
                  min="1"
                  max="10"
                  onChange={(e) => {
                    setSunlight(e.target.value);
                  }}
                ></input>
              </Col>
              <Col xs={2}>
                <label>Full sun</label>
              </Col>
            </Row>
            <Row className="plantFormMargin">
              <h3>Watering Needs</h3>
              <div>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    {
                      completeDry
                        ? setCompleteDry(false)
                        : setCompleteDry(true);
                    }
                  }}
                />
                <label for="approximateDate">
                  {" "}
                  Allow to completely dry out between watering.
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    {
                      topInches ? setTopInches(false) : setTopInches(true);
                    }
                  }}
                />
                <label for="approximateDate">
                  {" "}
                  Allow top few inches of soil to dry out before watering
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    {
                      keepMoist ? setKeepMoist(false) : setKeepMoist(true);
                    }
                  }}
                />
                <label for="approximateDate">
                  {" "}
                  Keep soil consistently moist
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    {
                      reduceWinterWater
                        ? setReduceWinterWater(false)
                        : setReduceWinterWater(true);
                    }
                  }}
                />
                <label for="approximateDate">
                  {" "}
                  Reduce watering during dormancy/winter
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    {
                      stopWinterWater
                        ? setStopWinterWater(false)
                        : setStopWinterWater(true);
                    }
                  }}
                />
                <label>Stop all watering during dormancy/winter</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    {
                      deepWater ? setDeepWater(false) : setDeepWater(true);
                    }
                  }}
                />
                <label for="approximateDate">
                  {" "}
                  Water deeply (drench soil when watering, waiting for water to
                  flow from drainage)
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    {
                      bottomWatering
                        ? setBottomWatering(false)
                        : setBottomWatering(true);
                    }
                  }}
                />
                <label>Bottom watering recommended</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    {
                      waterMossPoll
                        ? setWaterMossPoll(false)
                        : setWaterMossPoll(true);
                    }
                  }}
                />
                <label>Water any moss poll (if applicable)</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    {
                      mist ? setMist(false) : setMist(true);
                    }
                  }}
                />
                <label> Mist regularly</label>
              </div>
            </Row>
            <Row className="plantFormMargin">
              <h3>Humidity Recommendations</h3>
              <fieldset id="humidity">
                <div>
                  <input
                    type="radio"
                    name="humidity"
                    value="0"
                    onChange={(e) => {
                      setHumidty(e.target.value);
                    }}
                  ></input>
                  <label for="approximateDate"> Not specified</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="humidity"
                    value="4"
                    onChange={(e) => {
                      setHumidty(e.target.value);
                    }}
                  ></input>
                  <label for="approximateDate">
                    {" "}
                    Very high (80% or higher)
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="humidity"
                    value="3"
                    onChange={(e) => {
                      setHumidty(e.target.value);
                    }}
                  ></input>
                  <label for="approximateDate"> High (60% or higher)</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="humidity"
                    value="2"
                    onChange={(e) => {
                      setHumidty(e.target.value);
                    }}
                  ></input>
                  <label for="approximateDate"> Medium (45% or higher)</label>
                </div>{" "}
                <div>
                  <input
                    type="radio"
                    name="humidity"
                    value="1"
                    onChange={(e) => {
                      setHumidty(e.target.value);
                    }}
                  ></input>
                  <label for="approximateDate"> Low (Less than 45%)</label>
                </div>
              </fieldset>
            </Row>
            <Row className="plantFormMargin">
              <h3>Notes</h3>
              <textarea className="addPlantTextBox" type="textarea"></textarea>
            </Row>
            <Row className="plantFormMargin">
              <label>Upload image</label>
              <input
                type="file"
                onChange={(event) => {
                  setFile(event.target.files[0]);
                  setFileName(event.target.files[0].name);
                }}
                className="form-control"
              ></input>
            </Row>
            <Row className="plantFormMargin">
              <button className="btn btn-primary">Add plant</button>
            </Row>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default AddPlant;
