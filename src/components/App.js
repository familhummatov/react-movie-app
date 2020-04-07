import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Route, Switch } from "react-router";
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
          <Switch>
            <Route path="/movies" component={MoviesPage} exact />
            <Route path="/movies/newmovie" component={NewMoviePage} />
            <Route path="/movie/:_id" component={NewMoviePage} />
          </Switch>
        </Container>
        <Footer />
      </div>
    );
  }
}
