const express = require("express")
const { PORT, URI } = require("./config/constants")
const { dbConnect } = require("./config/dbconnect")

dbConnect(URI)


const app = express()


app.use(express.json())



app.listen(PORT, () => {
  console.log("Running on ", PORT);
});
