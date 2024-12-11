// import
import { Card, CardTitle, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CommentArea from "./CommentArea";
import NotFound from "./NotFound";

// passo anche qui la categoria scelta nel componente CategorySelect

export default function BookDetails({ category }) {
  // prendo il parametro dal link
  const params = useParams();
  // lo confronto con il json per stampare solo quello passato dal link
  const foundBook = category.find((book) => book.asin === params.asin);
  if (!foundBook) {
    // questo è stato aggiunto come sicurezza nel caso di scrittura del link a mano
    return <NotFound />;
  }

  return (
    // stampo la card trovata ed anche la commentArea
    <Container>
      <Row>
        <Col md={4}>
          <CardTitle className="text-center mb-2">{foundBook.title}</CardTitle>
          <Card>
            <Card.Img variant="top" src={foundBook.img} alt={foundBook.title} />
          </Card>
        </Col>
        <Col md={8}>
          <CommentArea details={foundBook} />
        </Col>
      </Row>
    </Container>
  );
}
