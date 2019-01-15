const API_URL = process.env.REACT_APP_API_URL;

let token = localStorage.token;
if (!token)
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: token
};

export const getInitialData = () => {
  return Promise.all([getPosts(), getCategories(), getFavorites()]).then(
    ([posts, categories, favorites]) => ({
      posts,
      categories,
      favorites
    })
  );
};

export const getPosts = (categoryId = undefined) =>
  categoryId === undefined
    ? fetch(`${API_URL}/posts`, { headers })
        .then(res => res.json())
        .then(data => data)
        .catch(error => console.log(error))
    : fetch(`${API_URL}/${categoryId}/posts`, { headers })
        .then(res => res.json())
        .then(data => data)
        .catch(error => console.log(error));

export const getFavorites = () =>
  fetch(`${API_URL}/favorites`, { headers })
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.log(error));

export const saveFavorite = favorite =>
  fetch(`${API_URL}/favorites`, {
    headers,
    method: "POST",
    body: JSON.stringify(favorite)
  })
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.log(error));

export const deleteFavorite = favoriteId =>
  fetch(`${API_URL}/posts/${favoriteId}`, {
    headers,
    method: "DELETE"
  })
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.log(error));

export const getPost = postId =>
  fetch(`${API_URL}/posts/${postId}`, { headers })
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.log(error));

export const increasePostVotes = postId =>
  fetch(`${API_URL}/posts/${postId}`, {
    headers,
    method: "POST",
    body: JSON.stringify({ option: "upVote" })
  })
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.log(error));

export const decreasePostVotes = postId =>
  fetch(`${API_URL}/posts/${postId}`, {
    headers,
    method: "POST",
    body: JSON.stringify({ option: "downVote" })
  })
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.log(error));

export const getCategories = () =>
  fetch(`${API_URL}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)
    .catch(error => console.log(error));

export const savePost = post =>
  fetch(`${API_URL}/posts`, {
    headers,
    method: "POST",
    body: JSON.stringify(post)
  })
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.log(error));

export const updatePost = post =>
  fetch(`${API_URL}/posts/${post.id}`, {
    headers,
    method: "PUT",
    body: JSON.stringify(post)
  })
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.log(error));

export const getComments = postId =>
  fetch(`${API_URL}/posts/${postId}/comments`, { headers })
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.log(error));

export const saveComment = comment =>
  fetch(`${API_URL}/comments`, {
    headers,
    method: "POST",
    body: JSON.stringify(comment)
  })
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.log(error));

export const increaseCommentVotes = commentId =>
  fetch(`${API_URL}/comments/${commentId}`, {
    headers,
    method: "POST",
    body: JSON.stringify({ option: "upVote" })
  })
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.log(error));

export const decreaseCommentVotes = commentId =>
  fetch(`${API_URL}/comments/${commentId}`, {
    headers,
    method: "POST",
    body: JSON.stringify({ option: "downVote" })
  })
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.log(error));

export const deletePost = postId =>
  fetch(`${API_URL}/posts/${postId}`, {
    headers,
    method: "DELETE"
  })
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.log(error));

export const deleteComment = commentId =>
  fetch(`${API_URL}/comments/${commentId}`, {
    headers,
    method: "DELETE"
  })
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.log(error));

export const updateComment = comment =>
  fetch(`${API_URL}/comments/${comment.id}`, {
    headers,
    method: "PUT",
    body: JSON.stringify(comment)
  })
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.log(error));
