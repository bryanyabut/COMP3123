const express = require('express');
const app = express();
const path = require('path');
const userRouter = require('./routes/users');

app.use(express.json()); // parse JSON globally

// Routes
app.use('/api/v1/user', userRouter);

// /home route
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

// Redirect root to /home
app.get('/', (req, res) => {
  res.redirect('/home');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Server Error');
});

// Start server
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));