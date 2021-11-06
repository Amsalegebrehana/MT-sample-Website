const express = require('express');
const {logoutCompany,loginCompany, createNewCompany,getAllCompany,getCompanyByID,deleteCompanyAccount,updateCompanyProfile} = require('../controllers/companyController');
const {auth} = require('../utility/verifytoken');


const router = express.Router();


//send new talent/user request to the server
router.post('/register', createNewCompany);
// user login using email and password
router.post('/login', loginCompany);

// logout 
router.get('/logout', logoutCompany);


// get all Company
router.get('/',auth, getAllCompany);
//get user by id
router.get('/:companyId',auth,getCompanyByID);
// delete user by id
router.delete('/:companyId',auth,deleteCompanyAccount);
// update user by id
router.put('/:companyId',auth,updateCompanyProfile);


module.exports = router;