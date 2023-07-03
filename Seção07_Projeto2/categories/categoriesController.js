import express from 'express'
const router = express.Router()

router.get("/admin/categories/new", (req, res) => {
    res.render("admin/categories/categories.ejs")
})

export default router

