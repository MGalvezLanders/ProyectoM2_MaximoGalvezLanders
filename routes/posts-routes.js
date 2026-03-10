import express from 'express';
const postsRouter = express.Router();


// GET /api/posts - Obtener todos los posts
postsRouter.get('/', (req, res) => {
  const { published } = req.query;
  
  if (published !== undefined) {
    const isPublished = published === 'true';
    const filtered = posts.filter(p => p.published === isPublished);
    return res.json(filtered);
  }
  
  res.json(posts);
});

// GET /api/posts/:id - Obtener un post por ID
postsRouter.get('/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  
  if (!post) {
    return res.status(404).json({ error: 'Post no encontrado' });
  }
  
  res.json(post);
});

// GET /api/posts/author/:authorId - Obtener posts por autor
postsRouter.get('/author/:authorId', (req, res) => {
  const authorPosts = posts.filter(p => p.author_id === parseInt(req.params.authorId));
  res.json(authorPosts);
});

// POST /api/posts - Crear un nuevo post
postsRouter.post('/', (req, res) => {
  const { title, content, author_id, published } = req.body;
  
  if (!title || !content || !author_id) {
    return res.status(400).json({ 
      error: 'Título, contenido y author_id son requeridos' 
    });
  }
  
  const newPost = {
    id: posts.length + 1,
    title,
    content,
    author_id: parseInt(author_id),
    published: published || false
  };
  
  posts.push(newPost);
  res.status(201).json(newPost);
});

// PUT /api/posts/:id - Actualizar un post
postsRouter.put('/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  
  if (!post) {
    return res.status(404).json({ error: 'Post no encontrado' });
  }
  
  const { title, content, published } = req.body;
  
  if (title) post.title = title;
  if (content) post.content = content;
  if (published !== undefined) post.published = published;
  
  res.json(post);
});

// DELETE /api/posts/:id - Eliminar un post
postsRouter.delete('/:id', (req, res) => {
  const index = posts.findIndex(p => p.id === parseInt(req.params.id));
  
  if (index === -1) {
    return res.status(404).json({ error: 'Post no encontrado' });
  }
  
  posts.splice(index, 1);
  res.json({ message: 'Post eliminado exitosamente' });
});

export default postsRouter