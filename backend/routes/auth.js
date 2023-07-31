const express = require('express');
const User = require('../modles/User');
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken')
const router = express.Router();
const jwt_sec = "sandhuisgodboy"


//Rote 1: creat a user using  :post "/api/auth/signup." no login required
router.post("/signup", [
    body('name', 'Enter a valid name'),
    body('password', 'Password must be atleast 5 characters ')
], async (req, res
) => {
    let success = false;
    // if there are errors,return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }
    secPass = req.body.password;
    //create a new user
    try {
        const user = await User.create({
            name: req.body.name,
            password: secPass,
        });
        // Respond with a success message or any other required data
        return res.status(201).json({ success: true, message: 'User created successfully.' });
    } catch (err) {
        console.error('Error creating user:', err);
        return res.status(500).json({ success: false, message: 'Error creating user.' });
    }
})

module.exports = router;
