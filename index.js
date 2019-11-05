const express = require('express'),
      app = express();

app.get('/', (req, res) => {
  res.send('Route path')
})
app.listen(3000, () => {
  console.log('Server started')
})
