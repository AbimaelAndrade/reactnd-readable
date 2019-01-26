import React, { Component } from "react";
import { Container, Header, Segment } from "semantic-ui-react";
import { withRouter, Switch, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./Navbar";
import Home from "./Home";
import Category from "./Category";
import PostView from "./PostView";
import NewPost from "./NewPost";

const styleFooter = {
  margin: "2em 0 0 0",
  padding: "2em 0",
  borderRadius: 0
};

const goToHome = (e, history) => {
  e.preventDefault();
  history.push("/");
};

const App = ({ history }) => {
  return (
    <div id="dashboard">
      <div id="main">
        <Container style={{ marginTop: "2em" }}>
          <Header as="h1">
            <a href="/" onClick={e => goToHome(e, history)}>
              Project Readable
            </a>
          </Header>
          <p>This is the second project of the course React Developer</p>
        </Container>
        <Navbar />

        <Container>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/new-post" exact component={NewPost} />
            <Route path="/:category" exact component={Category} />
            <Route path="/:category/:id" exact component={PostView} />
          </Switch>
        </Container>
        <Segment inverted vertical style={styleFooter}>
          <Container textAlign="center">
            <strong>Readable</strong> - Todos os direitos reservados!
          </Container>
        </Segment>
      </div>
    </div>
  );
};

export default withRouter(App);
