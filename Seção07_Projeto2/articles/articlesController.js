import express from 'express'
import slugify from 'slugify'
import Article from './Article.js'
import Category from '../categories/Category.js'
const router = express.Router()

// Router all articles
router.get("/admin/articles/home", (req, res) => {
    Article.findAll({
        include : [{model: Category}]
    }).then((articles) => {
        res.render("./admin/articles/homeArticles.ejs", {articles : articles})
    })
        
})
// Router add new Article
router.get("/admin/articles/new", (req, res) => {
    Category.findAll().then((categories) => {
        res.render("./admin/articles/newArticles.ejs", {categories : categories})
    })
})
// Router to save data articles
router.post("/admin/articles/new/save", (req, res) => {
    let body = req.body.bodyArticle
    let title = req.body.titleArticle
    let categoryId = req.body.selectCategory

    Article.create({
        title : title,
        body  : body, 
        slug  : slugify(title), 
        categoryId : categoryId,
    })
    .then(() => {
        res.redirect("/admin/articles/home")
    })
    .catch((err) => {
        console.log(err)
    })
})
export default router
