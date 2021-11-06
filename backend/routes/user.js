const express = require('express');
const {logoutUser, createNewUser,getAllUsers,getUserByID,deleteUserAccount,updateUserProfile,loginUser} = require('../controllers/userController');
const{ auth} = require('../utility/verifytoken');


const router = express.Router();

//send new talent/user request to the server
router.post('/register', createNewUser);
// user login using email and password
router.post('/login', loginUser);

router.get('/logout', logoutUser);


// get all users
router.get('/',auth, getAllUsers);
//get user by id
router.get('/:userId',auth,getUserByID);
// delete user by id
router.delete('/:userId',auth,deleteUserAccount);
// update user by id
router.put('/:userId',auth,updateUserProfile);


module.exports = router;