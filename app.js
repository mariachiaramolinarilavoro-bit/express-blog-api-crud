const express = require('express');
const path = require('path');
const { router: postsRouter, posts } = require('./routers/posts');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/posts', postsRouter);


app.get('/', (req, res) => {
  res.type('text/plain').send('Server del mio blog');
});

app.get('/bacheca', (req, res) => {
  res.json({ posts });
});

app.listen(port, () => {
  console.log(`Express server avviato su http://localhost:${port}`);
});
