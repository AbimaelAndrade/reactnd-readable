import React from "react";
import { Link } from "react-router-dom";
import { Card, Icon } from "semantic-ui-react";
import PropTypes from "prop-types";
import moment from "moment";

const CardPost = ({ post, handdleIncreaseVote, handdleDecreaseVote }) => (
  <Card fluid>
    <Card.Content>
      <Card.Header>
        <Link to={`/${post.category}/${post.id}`}>{post.title}</Link>
      </Card.Header>
      <Card.Meta>
        <strong>Publicado em: </strong>
        {new moment(post.timestamp).calendar()}
      </Card.Meta>
      <Card.Description>
        <strong>Autor: </strong> {post.author}
      </Card.Description>
    </Card.Content>
    <Card.Content extra style={{ fontSize: "14px" }}>
      <span style={{ marginRight: "15px" }}>
        <a onClick={e => handdleIncreaseVote()}>
          <Icon name="thumbs up outline" size="large" />
        </a>
        <span style={{ marginRight: "5px" }}>{post.voteScore}</span>
        <a onClick={e => handdleDecreaseVote()}>
          <Icon name="thumbs down outline" size="large" />
        </a>
      </span>
      <span>
        <Icon name="comment" size="large" />
        {post.commentCount} Comentários
      </span>
    </Card.Content>
  </Card>
);

CardPost.propTypes = {
  post: PropTypes.object.isRequired,
  handdleIncreaseVote: PropTypes.func.isRequired,
  handdleDecreaseVote: PropTypes.func.isRequired
};

export default CardPost;
