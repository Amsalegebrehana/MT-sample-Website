const jwt = require('jsonwebtoken');

// for protect router cheek the token 

const auth = (req, res, next) => {
 
    const token = req.cookies.jwt;
  
    if (!token) return res.status(401).send("Access Denied!");

    // check json web token exists & is verified
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).send("Invalid Token!");
    }
  };
module.exports.auth = auth;
