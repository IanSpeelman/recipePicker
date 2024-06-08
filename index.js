const express = require("express")
const app = express()
const engine = require("ejs-mate")
const port = 3001

app.engine("ejs", engine)
app.set("views", `${__dirname}/views`)
app.set("view engine", "ejs")

app.get("/recipes", (req,res) => {

      res.render("recipes/index")
}) 

app.listen(port, () => console.log(`app listening on port ${port}`))