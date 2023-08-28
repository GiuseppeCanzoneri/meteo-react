import React from "react";
import { Button, Card, Container, Row, Col, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const FavouriteCities = () => {
  const dispatch = useDispatch();
  const favourites = useSelector(state => {
    return state.favourites;
  });

  const removeCity = cityId => {
    // Invia l'azione "REMOVE_CITY" con l'ID della città da rimuovere
    dispatch({
      type: "REMOVE_CITY",
      payload: cityId,
    });
  };

  return (
    <div className="mt-5">
      {favourites.length === 0 ? (
        <Alert className="text-center mt-5" variant="info">
          Non ci sono città nei preferiti. Torna alla Home e aggiungine una!!!
        </Alert>
      ) : (
        <Container>
          <Row>
            {favourites.map(favourite => (
              <Col key={favourite.id} xs={12} md={4}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="https://picsum.photos/100" />
                  <Card.Body>
                    <Card.Title className="text-center">City: {favourite.name}</Card.Title>
                    <Button
                      style={{
                        display: "block",
                        margin: "0 auto",
                      }}
                      className="mt-2"
                      variant="danger"
                      onClick={() => removeCity(favourite.id)}
                    >
                      Rimuovi dai preferiti
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default FavouriteCities;
