require('dotenv').config();
const body=require("body-parser")
const path=require("path")
const express=require("express")
const app=express()
const PORT=process.env.PORT || 5009;

app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,'views')))

app.get("/signup", (req, res) => {
    res.render("signup")
})
app.get("/login", (req, res) => {
    res.render("login")
})

app.listen(PORT,(error) =>{
    if(!error) console.log(`Server is running on port ${PORT}`)
});
