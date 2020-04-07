import React, { Component } from "react";
import { Button, Form, Image, Message } from "semantic-ui-react";
import InlineError from "./InlineError";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
export default class NewMovieForm extends Component {
  state = {
    _id: this.props.movie ? this.props.movie._id : "",
    title: this.props.movie ? this.props.movie.title : "",
    cover: this.props.movie ? this.props.movie.cover : "",
    error: {},
    redirect: false,
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = () => {
    const error = this.validate();
    this.setState({
      error,
      redirect: true,
    });
    const _id = this.state._id || this.props.newMovie.movie._id;
    if (Object.keys(error).length === 0) {
      if (!_id) {
        this.props.newMovieOnSubmit(this.state);
      } else {
        this.props.newMovieOnUpdate({ ...this.state, _id });
      }
    }
  };
  validate = () => {
    const error = {};
    if (!this.state.title) error.title = "Please enter movie title";
    if (!this.state.cover) error.cover = "Please enter cover url";
    return error;
  };
  static propTypes = {
    newMovieOnSubmit: PropTypes.func.isRequired,
  };
  componentWillReceiveProps(nextProps) {
    const { movie } = nextProps.newMovie;
    if (movie.title && movie.title !== this.state.title) {
      this.setState({
        title: movie.title,
        cover: movie.cover,
      });
    }
  }
  render() {
    const { error } = this.state;
    const form = (
      <Form
        loading={
          this.props.newMovie.fetching || this.props.newMovie.movie.fetching
        }
        onSubmit={this.handleSubmit}
      >
        <Form.Field error={!!error.title}>
          <label>Movie Title</label>
          {error.title && <InlineError message={error.title} />}
          <input
            id="title"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            placeholder="Movie Title"
          />
        </Form.Field>
        <Form.Field error={!!error.cover}>
          <label>Cover URL</label>
          {error.cover && <InlineError message={error.cover} />}
          <input
            id="cover"
            name="cover"
            value={this.state.cover}
            onChange={this.handleChange}
            placeholder="Cover URL"
          />
        </Form.Field>
        <div className="newmovieimg">
          <Image src={this.state.cover} size="small" />
        </div>
        <Button primary type="submit">
          Add
        </Button>
        {this.props.newMovie.error.response && (
          <Message negative>
            <Message.Header>
              We're sorry we can't apply that discount
            </Message.Header>
            <p>That offer has expired</p>
          </Message>
        )}
      </Form>
    );
    return (
      <div>
        {this.props.newMovie.done && this.state.redirect ? (
          <Redirect to="/movies" />
        ) : (
          form
        )}
      </div>
    );
  }
}
