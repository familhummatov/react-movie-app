import React from "react";
import { Card } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";
const CardExampleCard = props => (
  <Grid.Column>
    <Card
      className="carditem"
      image={props.movie.cover}
      header={props.movie.title}
    />
  </Grid.Column>
);

export default CardExampleCard;
