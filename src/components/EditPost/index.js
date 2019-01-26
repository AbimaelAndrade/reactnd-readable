import React, { Component } from "react";
import { Label } from "semantic-ui-react";
import { Form, Dropdown } from "formsy-semantic-ui-react";

class EditPost extends Component {
  onValidSubmit = FormData => {
    const { post, dispatch, handleEditPost, onSave } = this.props;

    const editPost = {
      ...post,
      title: FormData.title,
      author: FormData.author,
      category: FormData.category,
      body: FormData.body
    };

    dispatch(handleEditPost(editPost));
    onSave(editPost);
  };

  render() {
    const { categories, post } = this.props;

    const options = categories.map(c => ({
      key: c.path,
      text: c.name,
      value: c.path
    }));

    return (
      <Form ref={ref => (this.form = ref)} onValidSubmit={this.onValidSubmit}>
        <Form.Field>
          <Form.Input
            required
            name="title"
            defaultValue={post.title}
            label="Título"
            placeholder="Seu título"
            validations="isExisty"
            errorLabel={<Label color="red" pointing />}
            validationErrors={{
              isDefaultRequiredValue: "O título é obrigatório."
            }}
          />
        </Form.Field>
        <Form.Field>
          <Form.Input
            required
            name="author"
            label="Autor"
            defaultValue={post.author}
            placeholder="Nome do autor"
            validations="isExisty"
            errorLabel={<Label color="red" pointing />}
            validationErrors={{
              isDefaultRequiredValue: "O nome do autor é obrigatório."
            }}
          />
        </Form.Field>
        <Form.Field>
          <label>Categoria</label>
          <Dropdown
            name="category"
            placeholder="Categoria"
            search
            selection
            defaultValue={post.category}
            required
            validations="isExisty"
            validationErrors={{
              isDefaultRequiredValue: "Você tem que selecionar uma categoria."
            }}
            errorLabel={<Label color="red" pointing />}
            options={options}
          />
        </Form.Field>

        <Form.TextArea
          required
          name="body"
          label="Conteúdo"
          defaultValue={post.body}
          validations="isExisty"
          placeholder="Escreva aqui seus conteúdo..."
          errorLabel={<Label color="red" pointing />}
          validationErrors={{
            isDefaultRequiredValue:
              "O campo não pode ser vazio, escreva seu comentário."
          }}
        />

        <Form.Button content="Salvar" color="green" />
      </Form>
    );
  }
}

export default EditPost;
