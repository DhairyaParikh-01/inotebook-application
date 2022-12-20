const express = require('express');
const connect_to_mongo = require('./db');
const app = express()
const port = 5000

connect_to_mongo();
app.use(express.json());
// Available Routes: 
app.use('/api/auth', require('./Routes/auth'));
app.use('/api/notes', require('./Routes/notes'));

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`inotebook backend application is started. Access here: http://localhost:${port}`);
})