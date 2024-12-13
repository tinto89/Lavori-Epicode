import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function AuthorCard() {
  const [author, setAuthor] = useState("");

  const params = useParams();

  useEffect(() => {
    // Funzione per recuperare gli autori dal server
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
  }, []);

  return (
    <>
      <h1>Autore Selezionato</h1>
      <Card>
        <Card.Body>
          <Card.Img
            className="w-25"
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
    </>
  );
}
