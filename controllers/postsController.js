const { posts } = require('../data/posts');

function index(req, res) {
  res.json(posts);
}

function show(req, res) {
  const id = Number(req.params.id);
  const post = posts.find((item) => item.id === id);

  if (!post) {
    return res.status(404).json({ error: 'Post non trovato' });
  }

  res.json(post);
}

function create(req, res) {
  res.type('text/plain').send('Creazione del post');
}

function update(req, res) {
  res.type('text/plain').send(`Aggiornamento del post ${req.params.id}`);
}

function destroy(req, res) {
  const id = Number(req.params.id);
  const index = posts.findIndex((item) => item.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Post non trovato' });
  }

  posts.splice(index, 1);
  console.log(posts);
  res.status(204).end();
}

module.exports = {
  index,
  show,
  create,
  update,
  destroy
};
