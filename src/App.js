import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./style/main.scss";
import { Route } from "react-router";
import MoviesPage from "./components/pages/MoviesPage";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Container text>
          <Route path="/movies" component={MoviesPage}></Route>
        </Container>
        <Footer />
      </div>
    );
  }
}
