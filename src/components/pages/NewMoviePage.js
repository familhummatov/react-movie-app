import React, { Component } from "react";
import NewMovieForm from "../NewMovieForm";
import { connect } from "react-redux";
import {
  newMovieOnSubmit,
  fetchMovie,
  newMovieOnUpdate,
} from "../../actions/newMovie";
class NewMoviePage extends Component {
  componentDidMount() {
    const { match } = this.props;
    if (!this.props.movie && match.params._id) {
      this.props.fetchMovie(match.params._id);
    }
  }
  render() {
    return (
      <NewMovieForm
        movie={this.props.movie}
        newMovie={this.props.newMovie}
        newMovieOnSubmit={this.props.newMovieOnSubmit}
        newMovieOnUpdate={this.props.newMovieOnUpdate}
      />
    );
  }
}
const mapStateToProps = ({ newMovie, movies }, props) => {
  return {
    newMovie,
    movie: movies.movieList.find((item) => item._id === props.match.params._id),
  };
};
const mapDispatchToProps = {
  newMovieOnSubmit,
  fetchMovie,
  newMovieOnUpdate,
};
export default connect(mapStateToProps, mapDispatchToProps)(NewMoviePage);
