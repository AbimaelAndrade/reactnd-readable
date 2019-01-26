import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import userImage from "../../assets/user.png";
import moment from "moment";

const CardComment = ({
  comment,
  handdleIncreaseCommentVotes,
  handdleDecreaseCommentVotes,
  handdleTrashComment,
  handdleEditComment
}) => (
  <Card fluid>
    <Card.Content>
      <Card.Header>
        <Image src={userImage} size="mini" avatar />
        <span>{comment.author}</span>
      </Card.Header>
      <Card.Meta>{new moment(comment.timestamp).calendar()}</Card.Meta>
      <Card.Description>
        <p style={{ fontSize: "1em" }}>{comment.body}</p>
      </Card.Description>
    </Card.Content>
    <Card.Content extra style={{ fontSize: "14px" }}>
      <span style={{ marginRight: "15px" }}>
        <a onClick={e => handdleIncreaseCommentVotes()}>
          <Icon name="thumbs up outline" size="large" />
        </a>
        <span style={{ marginRight: "5px" }}>{comment.voteScore}</span>
        <a onClick={e => handdleDecreaseCommentVotes()}>
          <Icon name="thumbs down outline" size="large" />
        </a>
      </span>
      <span style={{ float: "right" }}>
        <a onClick={e => handdleEditComment()}>
          <Icon name="edit outline" size="large" />
        </a>
        <a onClick={e => handdleTrashComment()}>
          <Icon name="trash alternate outline" size="large" />
        </a>
      </span>
    </Card.Content>
  </Card>
);

export default CardComment;
