const express = require('express');
const app = express();
const port = 3000;

// app.set('view engine', 'html');

// app.use('/', function (req, res) {
//   res.render('./index');
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});