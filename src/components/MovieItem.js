import React from "react";
import { Card, Grid, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
const extra = (movie, deleteMovie) => {
  return (
    <div className="ui two buttons">
      <Button animated as={Link} to={`/movie/${movie._id}`}>
        <Button.Content visible>Edit</Button.Content>
        <Button.Content hidden>
          <Icon name="arrow right" />
        </Button.Content>
      </Button>
      <Button animated="vertical" onClick={() => deleteMovie(movie._id)}>
        <Button.Content hidden>Delete</Button.Content>
        <Button.Content visible>
          <Icon name="trash" />
        </Button.Content>
      </Button>
    </div>
  );
};
const CardExampleCard = ({ movie, deleteMovie }) => (
  <Grid.Column>
    <Card
      extra={extra(movie, deleteMovie)}
      className="carditem"
      image={movie.cover}
      header={movie.title}
    />
  </Grid.Column>
);

export default CardExampleCard;
