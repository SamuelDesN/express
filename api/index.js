const app = require('./app');
const serverless = require('serverless-http');

module.exports = serverless(app);

app.listen(3000, () => console.log("Server ready on port 3000."));
