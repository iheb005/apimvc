const express = require('express');
const bodyParser = require('body-parser');
var cors= require ('cors')

// create express app
const app = express();

// Setup server port
const port = process.env.PORT || 5000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});

//
app.use(cors())

// Require employee routes
const employeeRoutes = require('./src/routes/employee.routes')
const structRoutes = require('./src/routes/structure.routes')
const billRoutes = require('./src/routes/facture.routes')
const frsRoutes = require('./src/routes/fournisseurs.routes')
const cdeRoutes = require('./src/routes/cmdefrs.routes')

// using as middleware
app.use('/api/v1/users', employeeRoutes)
app.use('/api/v1/structures', structRoutes)
app.use('/api/v1/factures', billRoutes)
app.use('/api/v1/frs', frsRoutes)
app.use('/api/v1/cde', cdeRoutes)

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});