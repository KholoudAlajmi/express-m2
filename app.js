
const express = require('express');
const app = express();
const port = "8000"

const accountsRoutes = require("./apis/accounts/routes");
const connectDb = require('./database');

app.use(express.json());
app.use("/api/accounts", accountsRoutes);

try{
  connectDb()
}
catch(e){
  console.log(e.message);
}



app.listen(port, () => {
  console.log('The application is running on localhost:8000');
});
