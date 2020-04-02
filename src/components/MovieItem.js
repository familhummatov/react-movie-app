import React from "react";
import { Card, Grid, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
const extra = movie => {
  return (
    <div className="ui two buttons">
      <Button animated as={Link} to={`/movie/${movie._id}`}>
        <Button.Content visible>Edit</Button.Content>
        <Button.Content hidden>
          <Icon name="arrow right" />
        </Button.Content>
      </Button>
      <Button animated="vertical">
        <Button.Content hidden>Delete</Button.Content>
        <Button.Content visible>
          <Icon name="trash" />
        </Button.Content>
      </Button>
    </div>
  );
};
const CardExampleCard = props => (
  <Grid.Column>
    <Card
      extra={extra(props.movie)}
      className="carditem"
      image={props.movie.cover}
      header={props.movie.title}
    />
  </Grid.Column>
);

export default CardExampleCard;
