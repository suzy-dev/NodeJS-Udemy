import express from 'express'
import Category from './Category.js'
import slugify from 'slugify'
const router = express.Router()

// Router newCategories.js
router.get("/admin/categories/new", (req, res) => {
    res.render("admin/categories/newCategories.ejs")
})

// Router form newCategories.js
router.post("/categoriesnew/save", (req, res) => {
    var titleCategory = req.body.titleCategory

    if (titleCategory != undefined){
    Category.create({title: titleCategory, slug: slugify(titleCategory)})
    .then(() => {
        res.redirect("/categories/home")
    })
    }
    if(titleCategory == ""){
        res.redirect("/admin/categories/new")
    }
    else{
        res.redirect("/categories/home")
    }
})

// Router list categories home
router.get("/categories/home", (req, res) => {
    Category.findAll().then((categories) => {
        res.render("./admin/categories/homeCategories.ejs", {categories: categories})
    })
})
// Router form to DELETE
router.post("/categories/delet", (req, res) => {
    let id = req.body.id
    if(id != undefined){
        Category.destroy({where: {id : id}})
        .then(()=>{
            res.redirect("/categories/home")
        })
    }
    else {
        res.redirect("/categories/home")
    }
})

// Router form EDIT category
router.get("/categories/edit/:id", (req, res) => {
    let id = req.params.id
    Category.findByPk(id)
    .then((categories) => {
        if(categories != undefined){
            res.render("./admin/categories/editCategories.ejs", {categories: categories})
        }
        else{
            res.redirect("/categories/home")
        }
    })
    .catch(() => {
        res.redirect("/categories/home")
    })
})

// Router for update EDIT
router.post("/categories/saveUpdate", (req, res) => {
    let id = req.body.id
    let title = req.body.title
    Category.update({title : title, slug: slugify(title)},{where: {id : id}})
    .then(() => {
        console.log(title)
        res.redirect("/categories/home")
    })
})

export default router

