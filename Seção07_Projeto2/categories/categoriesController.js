import express from 'express'
const router = express.Router()

router.get("/categories", (req, res)=>{
    res.send("rota categories")
})

router.get("/newcategories", (req, res) => {
    res.send("<h1>nova categoria</h1>")
})

export default router

