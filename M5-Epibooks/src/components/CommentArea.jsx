// import
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

// costanti

const API_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzRjYjk2MmM5MjI4ZDAwMTVmYWQyYTkiLCJpYXQiOjE3MzMwODE0NDIsImV4cCI6MTczNDI5MTA0Mn0.BnPpDizPDCQUbRM3D1BGAHBL28Dq56rISZ6hFP3SAXc";

export default function CommentArea({ book, details }) {
  const [comments, setComments] = useState([]);

  // questo stato in particolare mi permette di utilizzare useEffect per far ripartire la fetch quando invio il commento all'api
  const [reload, setReload] = useState(null);

  // qui utilizzo la stessa funzione fetch sia per la commentArea in allTheBooks e in BookDetails

  useEffect(() => {
    let API_LINK = "";

    if (book) {
      API_LINK = `https://striveschool-api.herokuapp.com/api/comments/${book.asin}`;
    } else if (details) {
      API_LINK = `https://striveschool-api.herokuapp.com/api/comments/${details.asin}`;
    } else {
      return;
    }

    fetch(API_LINK, {
      headers: {
        Authorization: API_TOKEN,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore del server");
        }
        return response.json();
      })
      .then((data) => {
        setComments(data);
        setReload(false);
      })
      .catch((error) => {
        console.error("Errore:", error);
      });
  }, [book, details, reload]);
  // stampo in pagina se non è cliccato
  if (!book && !details) {
    return <div>Select a book to see comments...</div>;
  }
  // stampo se non ci sono recensioni
  return comments.length === 0 ? (
    <>
      <div className="mb-2">This book does not have any comments yet.</div>
      <AddComment asin={book?.asin} setReload={setReload} />
    </>
  ) : (
    // stampo tutte le recensioni in pagina
    <>
      <AddComment asin={details?.asin} setReload={setReload} />
      {comments.map((singleComment) => (
        <CommentList singleComment={singleComment} key={singleComment._id} />
      ))}
    </>
  );
}
