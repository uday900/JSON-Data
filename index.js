const jsonServer = require('json-server');
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(jsonServer.defaults());

// Correct path to db.json
const router = jsonServer.router(path.join(__dirname, 'db.json'));
app.use('/app', router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
