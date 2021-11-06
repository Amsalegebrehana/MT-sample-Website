const express = require('express');
const { createNewUser,getAllUsers,getUserByID,deleteUserAccount,updateUserProfile,loginUser} = require('../controllers/userController');
const router = express.Router();
const verify = require('../utility/verifytoken');

// get all users
router.get('/',verify, getAllUsers);
//get user by id
router.get('/:userId',verify,getUserByID);
//send new talent/user request to the server
router.post('/register', createNewUser);

router.post('/login', loginUser);

// delete user by id
router.delete('/:userId',verify,deleteUserAccount);
// update user by id
router.put('/:userId',verify,updateUserProfile);


module.exports = router;