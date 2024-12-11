//import
import React from "react";
import { Col, Form, Row } from "react-bootstrap";

// componente della searchbar che cattura il value

export default function SearchBar({ setSearchValue }) {
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <Form className="my-3">
      <Row>
        <Col>
          <Form.Control
            type="text"
            placeholder="Search..."
            className="w-100"
            onChange={handleInputChange}
          />
        </Col>
      </Row>
    </Form>
  );
}
