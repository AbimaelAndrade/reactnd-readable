import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Menu, Button } from "semantic-ui-react";

import { handleGetPosts } from "../../store/actions/posts";

const menuStyled = {
  width: "100%",
  marginBottom: "15px"
};

class Sidebar extends Component {
  state = {
    sortVoto: false,
    sortData: true
  };

  handdleSortVotes = () => {
    this.props.dispatch(handleGetPosts("VOTES"));
    this.setState({
      sortVoto: true,
      sortData: false
    });
  };

  handdleSortDate = () => {
    this.props.dispatch(handleGetPosts("DATE"));
    this.setState({
      sortVoto: false,
      sortData: true
    });
  };

  goToNewPost = () => {
    this.props.history.push(`new-post`);
  };

  render() {
    const { sortData, sortVoto } = this.state;
    return (
      <Menu
        id="sidebar"
        vertical
        className={false ? "toggled" : ""}
        style={menuStyled}
      >
        <Menu.Item>
          <Menu.Header>Ordenar por: </Menu.Header>

          <Button.Group style={{ margin: "10px 0" }}>
            <Button onClick={this.handdleSortVotes} positive={sortVoto}>
              Votos
            </Button>
            <Button.Or text="ou" />
            <Button onClick={this.handdleSortDate} positive={sortData}>
              Data
            </Button>
          </Button.Group>
        </Menu.Item>

        <Menu.Item>
          <Button
            content="Novo Poste"
            icon="save"
            labelPosition="left"
            fluid
            onClick={this.goToNewPost}
          />
        </Menu.Item>
      </Menu>
    );
  }
}

export default withRouter(connect()(Sidebar));
