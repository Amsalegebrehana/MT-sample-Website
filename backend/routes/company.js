const express = require('express');
const { createNewCompany,getAllCompany,getCompanyByID,deleteCompanyAccount,updateCompanyProfile} = require('../controllers/companyController');
const router = express.Router();

// get all Company
router.get('/', getAllCompany);
//get user by id
router.get('/:companyId',getCompanyByID);
//send new talent/user request to the server
router.post('/',createNewCompany);
// delete user by id
router.delete('/:companyId',deleteCompanyAccount);
// update user by id
router.put('/:companyId',updateCompanyProfile);


module.exports = router;