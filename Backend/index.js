const express = require('express');
const connect_to_mongo = require('./db');
const app = express()
const port = 5000
const cors = require('cors');

connect_to_mongo();
app.use(cors());
app.use(express.json());
// Available api: 
app.use('/api/auth', require('./api/auth'));
app.use('/api/notes', require('./api/notes'));

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`inotebook backend application is started. Access here: http://localhost:${port}`);
})
