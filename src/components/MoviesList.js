import React from "react";
import PropTypes from "prop-types";
import MovieItem from "./MovieItem";
import { Grid } from "semantic-ui-react";
import { HashLoader } from "react-spinners";
const MoviesList = ({ movies }) => {
  const emptyMessage = <p>Movies List is empty</p>;
  const moviesList = (
    <div>
      <div className="loader">
        <HashLoader color={"#35BDB2"} loading={movies.fetching} size={40} />
      </div>

      {movies.error.response ? (
        <h3>Error retireving data!</h3>
      ) : (
        <Grid stackable columns={3}>
          {movies.movies.map(movie => (
            <MovieItem key={movie._id} movie={movie} />
          ))}
        </Grid>
      )}
    </div>
  );
  return <div>{movies.length === 0 ? emptyMessage : moviesList}</div>;
};

MoviesList.propTypes = {
  movies: PropTypes.shape({
    movies: PropTypes.array.isRequired
  }).isRequired
};

export default MoviesList;
