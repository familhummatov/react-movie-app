import React, { Component } from "react";
import { menuStyle, fixedMenuStyle } from "../helpers/styleHelpers";
import { Link, NavLink } from "react-router-dom";
import { Container, Image, Menu, Visibility } from "semantic-ui-react";
export default class Header extends Component {
  state = {
    menuFixed: false,
    overlayFixed: false
  };
  stickOverlay = () => this.setState({ overlayFixed: true });

  stickTopMenu = () => this.setState({ menuFixed: true });

  unStickOverlay = () => this.setState({ overlayFixed: false });

  unStickTopMenu = () => this.setState({ menuFixed: false });

  render() {
    const { menuFixed } = this.state;
    return (
      <Visibility
        onBottomPassed={this.stickTopMenu}
        onBottomVisible={this.unStickTopMenu}
        once={false}
      >
        <Menu
          borderless
          fixed={menuFixed ? "top" : undefined}
          style={menuFixed ? fixedMenuStyle : menuStyle}
        >
          <Container text>
            <Menu.Item as={Link} to="/">
              <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
            </Menu.Item>
            <Menu.Item header as={Link} to="/" exact="true">
              MovieApp
            </Menu.Item>
            <Menu.Item as={NavLink} to="/movies" exact>
              Movies
            </Menu.Item>
            <Menu.Item as={NavLink} to="/movies/newmovie">
              Add new movie
            </Menu.Item>
          </Container>
        </Menu>
      </Visibility>
    );
  }
}
