import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import horror from "./books/horror.json";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import BookDetails from "./components/BookDetails";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [category, setCategory] = useState(horror);
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.body.setAttribute("data-bs-theme", theme);
  }, [theme]);

  return (
    <>
      <BrowserRouter>
        <Container className="mycontainer">
          <MyNav
            setSearchValue={setSearchValue}
            setCategory={setCategory}
            theme={theme}
            toggleTheme={toggleTheme}
          />

          <Row>
            <Col md={12}>
              <Welcome category={category} />
            </Col>
            <Routes>
              <Route
                path="/"
                element={
                  <AllTheBooks searchValue={searchValue} category={category} />
                }
              />
              <Route
                path="/book_details/:asin"
                element={<BookDetails category={category} />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Row>
          <MyFooter />
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
