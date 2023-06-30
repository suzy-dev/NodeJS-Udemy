import express from 'express'
const router = express.Router()

router.get("/articles", (req, res)=>{
    res.send("rota de articles")
})

router.get("/newarticles", (req, res)=>{
    res.send("rota de novos articles")
})


export default router
