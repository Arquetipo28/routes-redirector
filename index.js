const express = require('express'),
      app = express();

const unmatchedRoutes = (req, res) => {
  res.redirect("https://app.skydropx.com");
}

app.use(unmatchedRoutes);

app.get('/', (req, res) => {
  res.send('Route path')
})
app.listen(3000, () => {
  console.log('Server started')
})
