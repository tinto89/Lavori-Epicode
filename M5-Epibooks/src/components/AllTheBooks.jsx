// import
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";
import "../App.css";

// insieme al valore di ricerca passo anche la categoria scelta nel componente CategorySelect

export default function AllTheBooks({ searchValue, category }) {
  const [selected, setSelected] = useState(null);

  // filtro in base al value della searchBar

  const searchedBooks = category.filter((book) =>
    book.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    // stampo SingleBook in pagina per ogni libro presente nel json
    <>
      <Row className="g-2">
        <Col md={9} className="row me-2">
          {searchedBooks.map((book) => (
            <SingleBook
              key={book.asin}
              book={book}
              selected={selected?.asin === book.asin}
              selBook={() =>
                selected?.asin === book.asin
                  ? setSelected(null)
                  : setSelected(book)
              }
            />
          ))}
        </Col>
        <Col md={3} className="comment-area">
          <CommentArea book={selected} />
        </Col>
      </Row>
    </>
  );
}
