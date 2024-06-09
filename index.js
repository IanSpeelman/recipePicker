const express = require("express")
const app = express()
const engine = require("ejs-mate")
const port = 3001
const Recipe = require("./models/Recipe")
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/recipe-picker")
      .then(() => console.log("connection to database success"))
      .catch(() => console.log("connection to database failed"))
 
      
app.engine("ejs", engine)
app.set("views", `${__dirname}/views`)
app.set("view engine", "ejs")
app.use(express.static(`${__dirname}/public`))
app.use(express.urlencoded({extended: true}))

app.get("/recipes", async (req,res) => {
      const recipes = await Recipe.find()
      res.render("recipes/index", { recipes })
})

app.get("/recipes/random", async (req,res) => {
      const result = await Recipe.find()
      const rand = Math.floor(Math.random() * result.length)
      const recipe = result[rand]
      res.render("recipes/show", { recipe })
})
app.get("/recipes/new", (req,res) => {
      res.render("recipes/new")
})
app.get("/recipes/:id", async (req,res) => {
      const { id } = req.params;
      const recipe = await Recipe.findById(id)
      res.render("recipes/show", { recipe })
})
app.post("/recipes", (req,res) => {
      console.log(req.body)
      res.send(req.body)
})

app.listen(port, () => console.log(`app listening on port ${port}`))