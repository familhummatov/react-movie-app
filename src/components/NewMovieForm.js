import React, { Component } from "react";
import { Button, Form, Image } from "semantic-ui-react";
import InlineError from "./InlineError";
export default class NewMovieForm extends Component {
  state = {
    title: "",
    cover: "",
    error: {}
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value.trim()
    });
  };
  handleSubmit = () => {
    const error = this.validate();
    this.setState({
      error
    });
  };
  validate = () => {
    const error = {};
    if (!this.state.title) error.title = "Please enter movie title";
    if (!this.state.cover) error.cover = "Please enter cover url";
    return error;
  };
  render() {
    const { error } = this.state;
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
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
          <Form.Field>
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
        </Form>
      </div>
    );
  }
}
