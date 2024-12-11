// import
import React from "react";
import { Card } from "react-bootstrap";

// card per le recensioni

export default function CommentList({ singleComment }) {
  return (
    <Card className="mb-2">
      <Card.Header className="bg-danger-subtle fw-bold">
        Rating:&nbsp;
        {singleComment.rate}/5
      </Card.Header>
      <Card.Body>
        <Card.Text className="text-decoration-underline">
          {singleComment.author}
        </Card.Text>
        <Card.Text>{singleComment.comment}</Card.Text>
      </Card.Body>
    </Card>
  );
}
