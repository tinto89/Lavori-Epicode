import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function AuthorsList() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    // Funzione per recuperare gli autori dal server
    const fetchAuthors = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/authors");
        if (!response.ok) {
          throw new Error("Errore nella risposta del server");
        }
        const data = await response.json();
        setAuthors(data);
      } catch (err) {
        console.error("Errore nel recupero dei dati", err);
      }
    };

    fetchAuthors();
  }, []);

  const navigate = useNavigate();

  const handleCardClick = (selectedId) => {
    // Naviga alla pagina dell'autore con il suo ID
    navigate(`/authors/${selectedId}`);
  };

  return (
    <Container>
      <h1>Autori</h1>
      <Row>
        {authors.map((author) => (
          <Col md={4} className="mb-4" key={author._id}>
            <Card
              style={{ cursor: "pointer" }}
              onClick={() => handleCardClick(author._id)}
            >
              <Card.Body>
                <Card.Img
                  variant="top"
                  src={author.avatar}
                  alt="foto_artista"
                />
                <Card.Title className="mt-2">
                  {author.nome} {author.cognome}
                </Card.Title>
                <Card.Text>{author.email}</Card.Text>
                <Card.Text> {author.dataDiNascita}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
