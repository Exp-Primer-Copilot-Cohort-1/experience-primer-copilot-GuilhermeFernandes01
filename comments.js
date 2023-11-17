// Create web server
// 1. Create a web server
// 2. Create a route for the following
//    - GET /comments - Returns all comments
//    - POST /comments - Creates a new comment
//    - GET /comments/:id - Returns comment with matching id
//    - PUT /comments/:id - Updates comment with matching id
//    - DELETE /comments/:id - Deletes comment with matching id
// 3. Start the web server on port 3000
// 4. Test the API with Postman
// 5. Push your code

// 1. Create a web server
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const commentData = require('./data');

app.use(cors());
app.use(bodyParser.json());

// 2. Create a route for the following
//    - GET /comments - Returns all comments
app.get('/comments', (req, res) => {
  res.json(commentData);
});

//    - POST /comments - Creates a new comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  commentData.push(comment);
  res.json(comment);
});

//    - GET /comments/:id - Returns comment with matching id
app.get('/comments/:id', (req, res) => {
  const { id } = req.params;
  const comment = commentData.find((comment) => comment.id === id);
  res.json(comment);
});

//    - PUT /comments/:id - Updates comment with matching id
app.put('/comments/:id', (req, res) => {
  const { id } = req.params;
  const comment = req.body;
  const index = commentData.findIndex((comment) => comment.id === id);
  commentData[index] = comment;
  res.json(comment);
});

//    - DELETE /comments/:id - Deletes comment with matching id
app.delete('/comments/:id', (req, res) => {
  const { id } = req.params;
  const index = commentData.findIndex((comment) => comment.id === id);
  const comment = commentData[index];
  commentData.splice(index, 1);
  res.json(comment);
});

// 3. Start the web server on port 3000
app.listen(port, () => {});