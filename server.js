const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('port', process.env.NODE_ENV || 3000);
app.locals.title = 'pw8ball';

app.use(express.static('public'));
app.use(bodyParser.json());

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is now running on localhost:${app.get('port')}!`)
})
