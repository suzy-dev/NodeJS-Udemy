import express from 'express'
import slugify from 'slugify'
import Article from './Article.js'
const router = express.Router()

router.get("/admin/articles/home", (req, res) => {
        res.render("./admin/articles/homeArticles.ejs")
    
})

// Router add new Article
router.get("/admin/articles/new", (req, res) => {
    // let titleArticle = req.body.titleArticle
    // let bodyArticle  = req.body.bodyArticle

    // if(titleArticle !== undefined || bodyArticle !== undefined){
    //     Article.create({titleArticle : titleArticle, bodyArticle : bodyArticle})
    //     .then(() => {
    //         res.redirect("/admin/articles/home")
    //     })
    // }
    res.render("./admin/articles/newArticles.ejs")
})

export default router
