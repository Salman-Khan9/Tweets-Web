const express = require("express")
const {tweet} = require("../models")
const routes = express.Router()

routes.get("/get",async(req,res)=>{
  const AllPosts = await tweet.findAll()
  res.json(AllPosts)

})
routes.post("/post",async(req,res)=>{

    const post = req.body
    await tweet.create(post)
    res.json(post)
})
routes.get("/posts/:id",async(req,res)=>{
  const id = req.params.id
  const post =await tweet.findByPk(id)
  res.json(post)
})

module.exports = routes