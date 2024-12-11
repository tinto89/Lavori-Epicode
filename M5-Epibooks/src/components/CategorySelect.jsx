// import di tutti i file json
import fantasy from "../books/fantasy.json";
import history from "../books/history.json";
import horror from "../books/horror.json";
import romance from "../books/romance.json";
import scifi from "../books/scifi.json";
import { DropdownButton, DropdownItem } from "react-bootstrap";

// tramite useState in App.js si può switchare da una categoria all'altra

export default function CategorySelect({ setCategory }) {
  return (
    <DropdownButton variant="secondary" title="Category">
      <DropdownItem onClick={() => setCategory(fantasy)}>Fantasy</DropdownItem>
      <DropdownItem onClick={() => setCategory(history)}>History</DropdownItem>
      <DropdownItem onClick={() => setCategory(horror)}>Horror</DropdownItem>
      <DropdownItem onClick={() => setCategory(romance)}>Romance</DropdownItem>
      <DropdownItem onClick={() => setCategory(scifi)}>Sci-fi</DropdownItem>
    </DropdownButton>
  );
}
