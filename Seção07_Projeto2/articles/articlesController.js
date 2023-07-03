import express from 'express'
const router = express.Router()

router.get("/articles/home", (req, res) => {
    res.render("admin/articles/articles.ejs")
})


export default router
