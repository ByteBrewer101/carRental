const express = require("express")
const { PORT, URI } = require("./config/constants")
const { dbConnect } = require("./config/dbconnect")
const { ApiRouter } = require("./api/apiRouter")
const cors = require("cors")

dbConnect(URI)


const app = express()
app.use(cors())

app.use(express.json())
app.use('/api_v1',ApiRouter)


app.listen(PORT, () => {
  console.log("Running on ", PORT);
});
