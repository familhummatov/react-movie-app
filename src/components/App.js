import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Route } from "react-router";
import MoviesPage from "./pages/MoviesPage";
import Footer from "./Footer";
import Header from "./Header";
import NewMoviePage from "./pages/NewMoviePage";
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Container text>
          <Route path="/movies" component={MoviesPage} exact />
          <Route path="/movies/newmovie" component={NewMoviePage} exact />
        </Container>
        <Footer />
      </div>
    );
  }
}