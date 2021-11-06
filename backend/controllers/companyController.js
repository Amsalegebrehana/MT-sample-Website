const Company = require('../models/Company');
const { validateLoginCompany, validateCompanyAccount } = require('../validation/companyValidation');



// create a new company or talent
async function createNewCompany(req, res) {
    
    const { error } = validateCompanyAccount(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const company = new Company({
        businessName: req.body.businessName,
        email: req.body.email,
        password: req.body.password,
        logo: req.body.logo,
        description: req.body.description,
        address: req.body.address,
        category: req.body.category,
    });
    try {
        const saveCompany = await company.save();
        res.status(200).send(saveCompany);
      } catch (error) {
        res.status(400).send(error);
      } 
}

// get all company list
async function getAllCompany(req, res) {
     
try {
    const company = await Company.find();
    res.json(company);
  } catch (error) {
    res.json({ message: error.message})
  }
  
}
// get one company by id
async function getCompanyByID(req, res){
    try {
      const company = await Company.findById(req.params.companyId);
      res.status(200).json(company);
    } catch (error) {
      res.json({error: error.message});
    }
 }


// update company profile

async function updateCompanyProfile(req, res){
  
    try {
      const updateCompany = await Company.updateOne({ _id: req.params.companyId },
        {
          $set:{
            logo: req.body.logo,}
        });
     
      res.status(200).json(updateCompany);
    
    } catch (error) {
      res.status(400).json({error: error.message});
    }
  }

//delete company accounts
async function deleteCompanyAccount(req, res){
  
    try {
      const deleteCompany = await Company.remove({ _id: req.params.companyId });
      res.status(200).json(deleteCompany);
    } catch (error) {
      res.json({error: error.message});
    }
}
  


module.exports.createNewCompany = createNewCompany;
module.exports.getAllCompany = getAllCompany;
module.exports.getCompanyByID = getCompanyByID;
module.exports.updateCompanyProfile = updateCompanyProfile;

module.exports.deleteCompanyAccount = deleteCompanyAccount;
