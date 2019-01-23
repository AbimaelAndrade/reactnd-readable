import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  handleIncreaseVote,
  handleDecreaseVote
} from "../../store/actions/post";
import { Grid, Loader } from "semantic-ui-react";

import Sidebar from "../Sidebar";
import CardPost from "../CardPost";
import { handleGetPosts } from "../../store/actions/posts";

class Category extends Component {
  componentDidMount() {
    this.props.dispatch(handleGetPosts());
  }

  handdleIncreaseVote = post => {
    this.props.dispatch(handleIncreaseVote(post));
  };

  handdleDecreaseVote = post => {
    this.props.dispatch(handleDecreaseVote(post));
  };

  render() {
    const { loading, posts } = this.props;

    if (loading) {
      return <Loader active inline="centered" />;
    } else {
      return (
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column mobile={16} widescreen={4} computer={4}>
              <Sidebar />
            </Grid.Column>
            <Grid.Column mobile={16} widescreen={12} computer={12}>
              <div style={{ minHeight: "100vh" }}>
                {posts.map(post => (
                  <CardPost
                    key={post.id}
                    post={post}
                    handdleIncreaseVote={e => this.handdleIncreaseVote(post)}
                    handdleDecreaseVote={e => this.handdleDecreaseVote(post)}
                  />
                ))}
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      );
    }
  }
}

const mapStateToProps = ({ loading, posts }, props) => {
  const { category } = props.match.params;
  return {
    loading,
    category,
    posts: posts.list.filter(post => post.category === category),
    sortType: posts.sortType
  };
};

export default withRouter(connect(mapStateToProps)(Category));
