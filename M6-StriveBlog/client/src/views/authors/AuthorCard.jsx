import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function AuthorCard() {
  const [author, setAuthor] = useState("");

  const params = useParams();

  useEffect(() => {
    // recupera l'autore cliccato
    const fetchAuthor = async () => {
      try {
        const response = await fetch(
          "http://localhost:3001/api/authors/" + params.id
        );
        if (!response.ok) {
          throw new Error("Errore nella risposta del server");
        }
        const data = await response.json();
        setAuthor(data);
      } catch (err) {
        console.error("Errore nel recupero dei dati", err);
      }
    };

    fetchAuthor();
  }, [params.id]);

  return (
    <>
      <Row>
        <Col xs={6}>
          <Card>
            <Card.Body>
              <Card.Img variant="top" src={author.avatar} alt="foto_artista" />
              <Card.Title className="mt-2">
                {author.nome} {author.cognome}
              </Card.Title>
              <Card.Text>{author.email}</Card.Text>
              <Card.Text> {author.dataDiNascita}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6}>
          <Card>
            <Card.Body>
              <Card.Title className="mt-2">Comments</Card.Title>
              <Card.Text> {author.dataDiNascita}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
