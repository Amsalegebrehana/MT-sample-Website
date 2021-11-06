const _ = require("lodash");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Company = require("../models/Company");
const {
	validateLoginCompany,
	validateCompanyAccount,
} = require("../validation/companyValidation");
const createToken = require("../utility/createToken");

const maxAge = 3 * 24 * 60 * 60;


// create a new company or talent
async function createNewCompany(req, res) {
	const { error } = validateCompanyAccount(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const isCompanyExist = await Company.findOne({ email: req.body.email });

	//check if Company exists
	if (isCompanyExist) return res.status(400).send("This Email already Exist!");

	//hash the company password with salt

	const slat = await bcrypt.genSalt(10);
	const hashPassword = await bcrypt.hash(req.body.password, slat);
	const company = new Company(
		_.pick(req.body, [
			"businessName",
			"email",
			"password",
			"logo",
			"description",
			"address",
			"category",
		])
	);
  try {
	  company.password = hashPassword;
	  const token = createToken(company._id);
	  res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
	  await company.save();
	  res.status(200).json({ company: company._id });

	} catch (error) {
		res.status(400).send({ error: error.message});
	}
}

// get all company list
async function getAllCompany(req, res) {
	try {
		const company = await Company.find();
    
    res.status(200).send(_.map(company,function(user) {return displayData(user)}));
	} catch (error) {
		res.json({ message: error.message });
	}

}
// get one company by id
async function getCompanyByID(req, res) {
	try {
		const company = await Company.findById(req.params.companyId);
		res.status(200).send(displayData(company));
	} catch (error) {
		res.send({ error: error.message });
	}
}

function displayData(data) {
	return _.pick(data, [
	  "_id",
	  "businessName",
	  "email",
	  "logo",
	  "description",
	  "address",
	  "category",
	]);
  }
// update company profile

async function updateCompanyProfile(req, res) {
	try {
		const updateCompany = await Company.updateOne(
			{ _id: req.params.companyId },
			{
				$set: {
					logo: req.body.logo,
				},
			}
		);

		res.status(200).send(updateCompany);
	} catch (error) {
		res.status(400).send({ error: error.message });
	}
}

async function loginCompany(req, res) {

	const { error } = validateLoginCompany(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const company = await Company.findOne({ email: req.body.email });
	//check if company exists
	if (!company) return res.status(400).send("Email is not found!");

	const pass = await bcrypt.compare(req.body.password, company.password);
	if (!pass) return res.status(400).send("Password is not correct!");

    const token = createToken(company._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ company: company._id });
	// res.send("Login")
}

function logoutCompany(req, res) {
	res.cookie('jwt', '', { maxAge: 1 });
	res.send("logout");
}



//delete company accounts
async function deleteCompanyAccount(req, res) {
	try {
		const deleteCompany = await Company.remove({ _id: req.params.companyId });
		res.status(200).send(deleteCompany);
	} catch (error) {
		res.send({ error: error.message });
	}
}

module.exports.createNewCompany = createNewCompany;
module.exports.getAllCompany = getAllCompany;
module.exports.getCompanyByID = getCompanyByID;
module.exports.updateCompanyProfile = updateCompanyProfile;
module.exports.loginCompany = loginCompany;
module.exports.logoutCompany = logoutCompany;
module.exports.deleteCompanyAccount = deleteCompanyAccount;
