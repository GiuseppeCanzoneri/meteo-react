import { useState } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const WeatherInfo = () => {
  const dispatch = useDispatch();
  const [hovered, setHovered] = useState(false);

  const weather = useSelector(state => {
    return state.weather;
  });
  if (!weather) {
    return <></>;
  } else {
    return (
      <div>
        <Container className="mt-5">
          <Row>
            <Col xs={4} md={4}></Col>
            <Col xs={4} md={4}>
              <Card className="bg-dark text-white">
                <Card.Body>
                  <Card.Img
                    variant="top"
                    src="https://images.unsplash.com/photo-1454789476662-53eb23ba5907?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=452&q=80"
                    style={{ height: 300 }}
                  />
                  <Card.Title className="text-center">{weather.name} </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted text-center">{weather.weather[0].main}</Card.Subtitle>
                  <Card.Text>{weather.weather[0].description}</Card.Text>
                  <hr />
                  <Card.Text>Temperatura minima: {weather.main.temp_min}°</Card.Text>
                  <hr />
                  <Card.Text>Temperatura massima: {weather.main.temp_max}°</Card.Text>
                  <hr />
                  <Card.Text>Pressure: {weather.main.pressure}</Card.Text>
                  <Button
                    style={{
                      display: "block",
                      margin: "0 auto",
                      backgroundColor: hovered ? "green" : "blue", // Cambia il colore qui
                      transition: "background-color 0.3s",
                    }}
                    onClick={() => {
                      dispatch({
                        type: "STORE_CITY",
                        payload: weather,
                      });
                    }}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                  >
                    Aggiungi ai Preferiti
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={4} md={4}></Col>
          </Row>
        </Container>
      </div>
    );
  }
};

export default WeatherInfo;
