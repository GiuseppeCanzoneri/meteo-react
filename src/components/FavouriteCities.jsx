import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const FavouriteCities = () => {
  const favourites = useSelector(state => {
    return state.favourites;
  });
  return (
    <div>
      {favourites.map(favourite => {
        return (
          <div>
            <Container>
              <Row>
                <Col xs={4} md={4}></Col>
                <Col xs={4} md={4}>
                  <Card key={favourite} style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="https://picsum.photos/100" />
                    <Card.Body>
                      <Card.Title>{favourite.name}</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go To City</Button>
                      <Button variant="danger">Delete From Saved/Fav</Button>
                    </Card.Body>
                  </Card>
                </Col>

                <Col xs={4} md={4}></Col>
              </Row>
            </Container>
          </div>
        );
      })}
    </div>
  );
};

export default FavouriteCities;
