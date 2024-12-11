import { Col, Row } from "react-bootstrap";

export default function NotFound() {
  return (
    <Row className="justify-content-center">
      <Col>
        <div className="text-center">
          <h1>404</h1>
          <h2>Pagina non trovata!</h2>
        </div>
      </Col>
    </Row>
  );
}
