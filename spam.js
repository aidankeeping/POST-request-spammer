const sa = require('superagent');
const config = require('./config.json');
setInterval(() => {
    sa.post(config.url).send(config.data).end((err, {body}) => {
      if(err) console.log(err);
    });
}, 500);
