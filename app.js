const express = require("express");
const path = require("path");

const app = express();

// Serve static files
app.use(express.static(__dirname));

// Create router
const router = express.Router();

// Home Route
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Dynamic User Route
router.get("/user/:username", (req, res) => {
    const { username } = req.params;
    res.send(`<h1>Welcome, ${username}!</h1><p>This is your profile page.</p>`);
});

// Dynamic Product Route
router.get("/product/:id", (req, res) => {
    const { id } = req.params;
    res.send(`<h1>Product ID: ${id}</h1><p>Details of product ${id} will be displayed here.</p>`);
});

// Category Route (without subcategory)
router.get("/   /:name", (req, res) => {
    const { name } = req.params;
    res.send(`<h1>Category: ${name}</h1><p>No subcategory provided.</p>`);
});

// Category Route (with subcategory)
router.get("/category/:name/:sub", (req, res) => {
    const { name, sub } = req.params;
    res.send(`<h1>Category: ${name}</h1><p>Subcategory: ${sub}</p>`);
});

// Use the router
app.use("/", router);

const PORT = 3000;  
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});