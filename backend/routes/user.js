const express = require('express');
const {createNewUser,getAllUsers,getUserByID,deleteUserAccount,updateUserProfile,loginUser} = require('../controllers/userController');
const{auth,logout} = require('../utility/verifytoken');
const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/upload/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null,uniqueSuffix +file.originalname)
    }
  })
  

const upload = multer({storage: storage})

const router = express.Router();

//send new talent/user request to the server
router.post('/register',upload.single('profileImg'), createNewUser);
// user login using email and password
router.post('/login', loginUser);

router.get('/logout', logout);


// get all users
router.get('/',auth, getAllUsers);
//get user by id
router.get('/:userId',auth,getUserByID);
// delete user by id
router.delete('/:userId',auth,deleteUserAccount);
// update user by id
router.put('/:userId',auth,upload.single('profileImg'),updateUserProfile);


module.exports = router;