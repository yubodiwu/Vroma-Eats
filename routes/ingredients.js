const express = require("express");
const router = express.Router();
const knex = require("../knex");
const JWT = require("jsonwebtoken");
const APP_SECRET = "SUPERSECRETAPPSECRET";

router.get("/:recipeId", function(req, res) {
    console.log("get ingredients by recipe id route hit");

    knex("ingredients").join("recipe_ingredients", "ingredients.id", "=", "recipe_ingredients.ingredient_id")
        .select("ingredients.name", "quantity", "units")
        .where("recipe_ingredients.recipe_id", req.params.recipeId).then((data) => {
            res.json(data);
        }).catch((err) => {
            console.error(err);
            res.error(err);
        })
});

module.exports = router;
