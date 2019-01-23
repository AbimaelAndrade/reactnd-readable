import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  handleGetPost,
  handleIncreaseVote,
  handleDecreaseVote
} from "../../store/actions/post";
import {
  handdleReceiveComments,
  handdleAddComment,
  handdleIncreaseCommentVotes,
  handdleDecreaseCommentVotes
} from "../../store/actions/comments";
import {
  Container,
  Divider,
  Icon,
  Image,
  Form,
  Button,
  Loader
} from "semantic-ui-react";
import moment from "moment";
import userImage from "../../assets/user.png";
import CardComment from "../CardComment";

const userStyled = {
  textTransform: "uppercase",
  color: "gray",
  marginLeft: "10px",
  marginBotton: "2em"
};

const bodyStyled = { fontSize: "1.5em", margin: "30px 0", color: "gray" };

class PostView extends Component {
  state = {
    body: ""
  };

  componentDidMount() {
    this.props.dispatch(handleGetPost(this.props.postId));
    this.props.dispatch(handdleReceiveComments(this.props.postId));
  }

  handdleIncreaseVote = post => {
    this.props.dispatch(handleIncreaseVote(post));
  };

  handdleDecreaseVote = post => {
    this.props.dispatch(handleDecreaseVote(post));
  };

  handdleIncreaseCommentVotes = commentId => {
    this.props.dispatch(handdleIncreaseCommentVotes(commentId));
  };

  handdleDecreaseCommentVotes = commentId => {
    this.props.dispatch(handdleDecreaseCommentVotes(commentId));
  };

  handleChangeBody = e => this.setState({ body: e.target.value });

  handdleSubmit = e => {
    e.preventDefault();
    const { body } = this.state;
    const { post } = this.props;

    const comment = {
      parentId: post.id,
      author: post.author,
      body
    };

    this.props.dispatch(handdleAddComment(comment));

    this.setState({
      body: ""
    });
  };

  render() {
    const { body } = this.state;
    const { loading, post, comments } = this.props;

    if (loading) {
      return <Loader active inline="centered" />;
    } else {
      return (
        <Container>
          <div style={{ minHeight: "100vh" }}>
            <h1>{post.title}</h1>
            <div>
              <Image src={userImage} size="mini" avatar />
              <span style={userStyled}>{post.author}</span>
              <span> - {moment(post.timestamp).calendar()}</span>
            </div>

            <p style={bodyStyled}>{post.body}</p>

            <Divider />

            <span style={{ marginRight: "15px" }}>
              <a onClick={e => this.handdleIncreaseVote(post)}>
                <Icon name="thumbs up outline" size="large" />
              </a>
              <span style={{ marginRight: "5px" }}>{post.voteScore}</span>
              <a onClick={e => this.handdleDecreaseVote(post)}>
                <Icon name="thumbs down outline" size="large" />
              </a>
            </span>
            <span>
              <Icon name="comment" size="large" />
              {post.commentCount} Comentários
            </span>

            <h2>Comente sobre a postagem</h2>
            <Form>
              <Form.TextArea
                label="Comentário"
                placeholder="Escreva aqui"
                value={body}
                onChange={e => this.handleChangeBody(e)}
              />

              <Form.Field control={Button} onClick={e => this.handdleSubmit(e)}>
                Salvar
              </Form.Field>
            </Form>
            <h3 style={{ marginTop: "2em" }}>Comentários</h3>
            <Divider />
            {comments.map(comment => (
              <CardComment
                key={comment.id}
                comment={comment}
                handdleDecreaseCommentVotes={e =>
                  this.handdleDecreaseCommentVotes(comment.id)
                }
                handdleIncreaseCommentVotes={e =>
                  this.handdleIncreaseCommentVotes(comment.id)
                }
              />
            ))}
          </div>
        </Container>
      );
    }
  }
}

const mapStateToProps = ({ loading, post, comments }, props) => {
  const { category, id } = props.match.params;
  return {
    loading,
    category,
    postId: id,
    post: post.post,
    comments: comments.comments
  };
};

export default withRouter(connect(mapStateToProps)(PostView));
