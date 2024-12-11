// import
import { Button, Card, Col } from "react-bootstrap";
import Dotdotdot from "react-dotdotdot";
import { useNavigate } from "react-router-dom";
// singlebook che prende il libro selezionato per il bordo rosso e la get delle recensioni
// il pulsante details va al componente BookDetails
export default function SingleBook({ book, selected, selBook }) {
  const navigate = useNavigate();

  return (
    <Col md={3} className="mb-3">
      <Card
        className={`d-flex flex-column ${
          selected ? "border-2 border-danger" : "border-2"
        }`}
        style={{
          height: 440,
          cursor: "pointer",
        }}
        onClick={selBook}
      >
        <Card.Img
          variant="top"
          src={book.img}
          alt={book.title}
          style={{ height: 325 }}
        />
        <Card.Body>
          <Dotdotdot clamp={1}>
            <Card.Title className="text-center">{book.title}</Card.Title>
          </Dotdotdot>
          <Button
            variant="danger"
            className="w-100 mt-2"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/book_details/${book.asin}`);
            }}
          >
            Details
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
