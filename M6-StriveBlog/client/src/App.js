import React from "react";
import NavBar from "./components/navbar/BlogNavbar";
import Footer from "./components/footer/Footer";
import Home from "./views/home/Home";
import Blog from "./views/blog/Blog";
import NewBlogPost from "./views/new/New";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthorsList from "./views/authors/AuthorsList";
import AuthorCard from "./views/authors/AuthorCard";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      <NavBar />
      <Container style={{ marginTop: "150px" }}>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/new" element={<NewBlogPost />} />
          <Route path="/authors" element={<AuthorsList />} />
          <Route path="/authors/:id" element={<AuthorCard />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
