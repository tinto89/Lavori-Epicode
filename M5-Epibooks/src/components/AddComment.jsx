// import
import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

// costanti

const API_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzRjYjk2MmM5MjI4ZDAwMTVmYWQyYTkiLCJpYXQiOjE3MzMwODE0NDIsImV4cCI6MTczNDI5MTA0Mn0.BnPpDizPDCQUbRM3D1BGAHBL28Dq56rISZ6hFP3SAXc";
const POST_URL = "https://striveschool-api.herokuapp.com/api/comments/";

export default function AddComment({ asin, setReload }) {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("");

  // funzione fetch

  function postComments() {
    fetch(POST_URL, {
      method: "POST",
      headers: {
        Authorization: API_TOKEN,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment: comment,
        rate: rating,
        elementId: asin,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nell'invio del commento");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Inviato con successo", data);
      })
      .catch((error) => {
        console.error("Errore:", error);
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // avvio la funzione al click prendendo l'asin
    postComments(asin);
    // stato che mi permette di aggiornare la GET con useEffect
    setReload(true);
    // pulisco i campi
    setComment("");
    setRating("");
  }

  return (
    // card per l'invio dei commenti

    <Card className="mb-2 text-center border-0">
      <Card.Header className="bg-danger-subtle fw-bold mb-1">
        Add Comment
      </Card.Header>
      <Form onSubmit={handleSubmit}>
        <Form.Control
          className="mb-1"
          type="text"
          placeholder="Leave here comments"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Form.Control
          className="mb-2"
          type="number"
          placeholder="Ratings 1-5"
          min={1}
          max={5}
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <Button variant="danger" type="submit" className="my-1">
          Add Comment
        </Button>
      </Form>
    </Card>
  );
}
