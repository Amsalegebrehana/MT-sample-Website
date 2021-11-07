const express = require('express');
const {loginCompany, createNewCompany,getAllCompany,getCompanyByID,deleteCompanyAccount,updateCompanyProfile} = require('../controllers/companyController');
const {auth,logout} = require('../utility/verifytoken');

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
router.post('/register',upload.single('logo'), createNewCompany);
// user login using email and password
router.post('/login', loginCompany);

// logout 
router.get('/logout', logout);


// get all Company
router.get('/',auth, getAllCompany);
//get user by id
router.get('/:companyId',auth,getCompanyByID);
// delete user by id
router.delete('/:companyId',auth,deleteCompanyAccount);
// update user by id
router.put('/:companyId',auth,upload.single('logo'),updateCompanyProfile);


module.exports = router;