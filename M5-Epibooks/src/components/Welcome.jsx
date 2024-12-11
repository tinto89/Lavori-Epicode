import { Alert } from "react-bootstrap";

export default function Welcome({ category }) {
  return (
    <Alert className="text-center">
      <h1>EpiBooks: our {category[0].category} library </h1>
    </Alert>
  );
}
