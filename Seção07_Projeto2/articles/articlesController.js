import express from 'express'
import slugify from 'slugify'
import Article from './Article.js'
import Category from '../categories/Category.js'
const router = express.Router()

router.get("/admin/articles/home", (req, res) => {
        res.render("./admin/articles/homeArticles.ejs")
    
})

// Router add new Article
router.get("/admin/articles/new", (req, res) => {
    Category.findAll().then((categories) => {
        res.render("./admin/articles/newArticles.ejs", {categories : categories})
    })
})

export default router
