import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  handleGetPost,
  handleEditPost,
  handleIncreaseVote,
  handleDecreaseVote,
  handleDeletePost
} from "../../store/actions/post";
import {
  handdleReceiveComments,
  handdleAddComment,
  handdleEditComment,
  handdleIncreaseCommentVotes,
  handdleDecreaseCommentVotes,
  handdleRemoveComment
} from "../../store/actions/comments";
import {
  Container,
  Divider,
  Icon,
  Image,
  Label,
  Loader,
  Modal
} from "semantic-ui-react";
import { Form } from "formsy-semantic-ui-react";
import moment from "moment";
import userImage from "../../assets/user.png";
import CardComment from "../CardComment";

import notfoundgif from "../../assets/notfound.gif";
import EditPost from "../EditPost";

const userStyled = {
  textTransform: "uppercase",
  color: "gray",
  marginLeft: "10px",
  marginBotton: "2em"
};

const bodyStyled = { fontSize: "1.5em", margin: "30px 0", color: "gray" };

class PostView extends Component {
  state = {
    commentEdit: null,
    editingComment: false,
    editingPost: false
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

  handdleEditPost = post => {
    this.setState({ editingPost: true });
  };

  handdleUpdatePost = editPost => {
    this.onCloseModal();
    this.props.history.push(`/${editPost.category}/${editPost.id}`);
  };

  handdleTrashPost = post => {
    this.props.dispatch(handleDeletePost(post.id));
    this.props.history.push("/");
  };

  handdleIncreaseCommentVotes = commentId => {
    this.props.dispatch(handdleIncreaseCommentVotes(commentId));
  };

  handdleDecreaseCommentVotes = commentId => {
    this.props.dispatch(handdleDecreaseCommentVotes(commentId));
  };

  handdleTrashComment = commentId => {
    this.props.dispatch(handdleRemoveComment(commentId));
  };

  handdleEditComment = comment => {
    this.fComment.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest"
    });

    this.form.reset({
      body: comment.body
    });

    this.setState({
      commentEdit: comment,
      editingComment: true
    });
  };

  onValidSubmit = formData => {
    const { post } = this.props;
    const { editingComment, commentEdit } = this.state;

    if (editingComment) {
      const comment = {
        ...commentEdit,
        parentId: post.id,
        author: post.author,
        body: formData.body
      };

      this.props.dispatch(handdleEditComment(comment));
    } else {
      const comment = {
        parentId: post.id,
        author: post.author,
        body: formData.body
      };

      this.props.dispatch(handdleAddComment(comment));
    }
    this.form.reset();
    this.setState({
      commentEdit: null,
      editingComment: false
    });
  };

  onCloseModal = () => {
    this.setState({ editingPost: false });
  };

  render() {
    const { editingPost } = this.state;
    const {
      loading,
      post,
      comments,
      history,
      categories,
      dispatch
    } = this.props;

    if (loading) {
      return <Loader active inline="centered" />;
    } else {
      if (post.error) {
        return (
          <div style={{ textAlign: "center", height: "100vh" }}>
            <Image src={notfoundgif} size="medium" centered />
            <p style={{ margin: "15px 0", fontSize: "1.2em" }}>
              Desculpa, mas não encotramos o que você procurava. Retonar para a
              <a onClick={e => history.push("/")} style={{ cursor: "pointer" }}>
                HOME
              </a>
              .
            </p>
          </div>
        );
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

              <span style={{ float: "right" }}>
                <a
                  onClick={e => this.handdleEditPost(post)}
                  ref={this.refEditPost}
                >
                  <Icon name="edit outline" size="large" />
                </a>
                <a onClick={e => this.handdleTrashPost(post)}>
                  <Icon name="trash alternate outline" size="large" />
                </a>
              </span>

              <h2>Comente sobre a postagem</h2>
              <div ref={ref => (this.fComment = ref)}>
                <Form
                  ref={ref => (this.form = ref)}
                  onValidSubmit={this.onValidSubmit}
                >
                  <Form.TextArea
                    required
                    name="body"
                    label="Comentário"
                    validations="isExisty"
                    placeholder="Escreva aqui seus comentários..."
                    errorLabel={<Label color="red" pointing />}
                    validationErrors={{
                      isDefaultRequiredValue:
                        "O campo não pode ser vazio, escreva seu comentário."
                    }}
                  />

                  <Form.Button content="Salvar" color="green" />
                </Form>
              </div>
              <h3 style={{ marginTop: "2em" }}>Comentários</h3>
              <Divider />
              {comments.map(comment => (
                <CardComment
                  key={comment.id}
                  comment={comment}
                  handdleTrashComment={e =>
                    this.handdleTrashComment(comment.id)
                  }
                  handdleEditComment={e => this.handdleEditComment(comment)}
                  handdleDecreaseCommentVotes={e =>
                    this.handdleDecreaseCommentVotes(comment.id)
                  }
                  handdleIncreaseCommentVotes={e =>
                    this.handdleIncreaseCommentVotes(comment.id)
                  }
                />
              ))}

              {/* Modal edit post */}
              <Modal
                open={editingPost}
                centered={false}
                closeIcon
                onClose={this.onCloseModal}
              >
                <Modal.Header>Editando postagem</Modal.Header>
                <Modal.Content>
                  <Modal.Description>
                    <EditPost
                      categories={categories}
                      post={post}
                      dispatch={dispatch}
                      handleEditPost={handleEditPost}
                      onSave={this.handdleUpdatePost}
                    />
                  </Modal.Description>
                </Modal.Content>
              </Modal>
            </div>
          </Container>
        );
      }
    }
  }
}

const mapStateToProps = ({ post, comments, categories }, props) => {
  const { category, id } = props.match.params;
  return {
    loading: post.loading,
    category,
    categories: categories.list,
    postId: id,
    post: post.post,
    comments: comments.comments.sort((a, b) => b.timestamp - a.timestamp)
  };
};

export default withRouter(connect(mapStateToProps)(PostView));
