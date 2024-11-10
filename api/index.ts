const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(require('prerender-node').set('prerenderToken', 'XEp0gLvaxW2iShbO6u5t'));


// API routes
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// Catch-all handler for any request that doesn’t match above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

module.exports = app;
