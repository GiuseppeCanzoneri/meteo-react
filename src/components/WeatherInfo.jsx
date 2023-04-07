import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const WeatherInfo = () => {
  const dispatch = useDispatch();
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
                  <Card.Title>{weather.name} </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{weather.weather[0].main}</Card.Subtitle>
                  <Card.Text>{weather.weather[0].description}</Card.Text>
                  <hr />
                  <Card.Text>Temperatura minima: {weather.main.temp_min}°</Card.Text>
                  <hr />
                  <Card.Text>Temperatura massima: {weather.main.temp_max}°</Card.Text>
                  <hr />
                  <Card.Text>Pressure: {weather.main.pressure}</Card.Text>
                  <Button
                    onClick={() => {
                      dispatch({
                        type: "STORE_CITY",
                        payload: weather,
                      });
                    }}
                  >
                    ADD TO FAV
                  </Button>
                </Card.Body>
                <Card.Link href="#">CITY</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
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
