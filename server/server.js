const express = require ("express")
const routes = require("./Routes/Routes")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(routes)



const db = require("./models");
db.sequelize.sync().then(()=>{
    app.listen(2000, ()=>{
        console.log("server is running on port 2000")
    })
})
