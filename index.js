const jsonServer = require('json-server');
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(jsonServer.defaults());

const router = jsonServer.router('db.json'); // Your JSON file
app.use('/api', router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
