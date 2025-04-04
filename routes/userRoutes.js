const express = require('express');
const router = express.Router();

// Get all users
router.get('/', (req, res) => {
    res.send('All Users');
});

// Get user by ID
router.get('/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});

// Create a new user
router.post('/', (req, res) => {
    res.send('User Created');
});

// Update user
router.put('/:id', (req,res) => {
    res.send(`User ID: ${req.params.id} Updated`);
});

// Delete user  
router.delete('/:id', (req, res) => {
    res.send(`User ID: ${req.params.id} Deleted`);
});

module.exports = router;
