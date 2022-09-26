require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const app = express()
const contatRouter = require("./router/contactRoute")

mongoose
    .connect(process.env.DB_CONNECTION)
    .then(() => {
        console.log("DB connected")
    })
    .catch((err) => {
        console.log(err)
    })

app.use(express.json())
app.use("/api/contact", contatRouter)

app.listen(process.env.PORT || 5000, () => {
    console.log("Running on port 5000")
})
