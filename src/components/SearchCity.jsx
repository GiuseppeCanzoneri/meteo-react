import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";

function SearchCity() {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  const searchWeather = async event => {
    event.preventDefault();
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0f5f662cb87c8fad629766ff73cec00b`
    );
    let data = await response.json();
    console.log(data);
    dispatch({
      type: "STORE_WEATHER",
      payload: data,
    });
  };

  return (
    <Form onSubmit={searchWeather}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control onChange={event => setCity(event.target.value)} type="text" placeholder="search for a city" />
        <Form.Text className="text-muted">Check out the weather in a city</Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default SearchCity;
