const express = require('express')
const router =express.Router()

const users = [
    { id: 1, name: "Mika Salih", age: 28, bio: "Multibillionaire" },
    { id: 2, name: "Luna Alagon", age: 25, bio: "President of the Philippines" },
    { id: 3, name: "Kiana Landez", age: 26, bio: "SM Lanang Owner" }
];

router.get("/", (req, res) => {
    res.render("user", { users });
});
  
router.get("/:id", (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.render("profile", { user });
});

module.exports = router
