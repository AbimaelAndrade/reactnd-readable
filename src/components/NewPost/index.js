import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button, Dropdown } from "semantic-ui-react";
import { handleAddPost } from "../../store/actions/post";
import { withRouter } from "react-router-dom";

import { handdleReceiveCategories } from "../../store/actions/categories";

class NewPost extends Component {
  state = {
    title: "",
    author: "",
    category: "",
    body: ""
  };

  componentDidMount() {
    this.props.dispatch(handdleReceiveCategories());
  }

  handleChangeTitle = e => this.setState({ title: e.target.value });
  handleChangeAuthor = e => this.setState({ author: e.target.value });
  handleChangeCategory = (e, { value }) => {
    this.setState({ category: value });
  };

  handleChangeBody = e => this.setState({ body: e.target.value });

  handdleSubmit = e => {
    e.preventDefault();
    const { title, author, category, body } = this.state;

    console.log(title, author, category, body);
    this.props.dispatch(handleAddPost({ title, author, category, body }));

    this.setState({
      title: "",
      author: "",
      category: "react",
      body: ""
    });

    this.props.history.push("/");
  };

  render() {
    const { title, author, category, body } = this.state;
    const { categories } = this.props;
    const options = categories.map(c => ({
      key: c.path,
      text: c.name,
      value: c.path
    }));

    return (
      <Form>
        <Form.Field>
          <label>Título</label>
          <input
            placeholder="Seu título"
            value={title}
            onChange={e => this.handleChangeTitle(e)}
          />
        </Form.Field>
        <Form.Field>
          <label>Autor</label>
          <input
            placeholder="Autor"
            value={author}
            onChange={e => this.handleChangeAuthor(e)}
          />
        </Form.Field>
        <Form.Field>
          <label>Categoria</label>
          <Dropdown
            fluid
            search
            selection
            value={category}
            options={options}
            placeholder="Categoria"
            onChange={this.handleChangeCategory}
          />
        </Form.Field>
        <Form.TextArea
          label="Conteúdo"
          placeholder="Escreva aqui"
          value={body}
          onChange={e => this.handleChangeBody(e)}
        />
        <Button type="submit" onClick={e => this.handdleSubmit(e)}>
          Salvar
        </Button>
      </Form>
    );
  }
}

const mapStateToProps = ({ categories }) => ({
  categories: categories.list
});

export default withRouter(connect(mapStateToProps)(NewPost));
