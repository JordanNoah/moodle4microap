var express = require('express')
const app = express();
const db = require("./models")
const PORT = 3002

const apiRoutes = require('./routes/api')

app.use('/api', apiRoutes)

db.sequelize.sync({
    // force: true
  }).then(() => {
    app.listen(PORT, () => {
      console.log(`Escuchando el puerto *:${PORT}`);
    });
  });