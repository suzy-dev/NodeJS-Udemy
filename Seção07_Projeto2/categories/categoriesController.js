import express from 'express'
import Category from './Category.js'
import slugify from 'slugify'
const router = express.Router()

router.get("/admin/categories/new", (req, res) => {
    res.render("admin/categories/categories.ejs")
})


router.post("/categoriesnew/save", (req, res) => {
    let titleCategory = req.body.titleCategory
    if (titleCategory != undefined){
        Category.create({title: titleCategory}, 
                        {slug: slugify(title)})
        .then(() => {
            res.redirect("/")
        })
    }
    else {
        res.redirect("/admin/categories/new")
    }
})

export default router

