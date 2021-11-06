const _ = require("lodash");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const {
	validateUserAccount,
	validateLoginUser,
} = require("../validation/userValidation");

// create a new user or talent
async function createNewUser(req, res) {
	const { error } = validateUserAccount(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const isUserExist = await User.findOne({ email: req.body.email });

	//check if user exists
	if (isUserExist) return res.status(400).send("This Email already Exist!");

	//hash the user password with salt

	const slat = await bcrypt.genSalt(10);
	const hashPassword = await bcrypt.hash(req.body.password, slat);

  const user = new User(
    _.pick(req.body, [
      "firstName",
      "lastName",
      "email",
      "password",
      "profileImg",
      "bio",
      "address",
      "skill",
      "category",
    ])
  );
  
  try {
    user.password = hashPassword;
		 await user.save();
		res.status(200).send({ user: user._id });
	} catch (error) {
		res.status(400).json(error);
	}
}
//
async function loginUser(req, res) {
	const { error } = validateLoginUser(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const user = await User.findOne({ email: req.body.email });
	//check if user exists
	if (!user) return res.status(400).send("Email is not found!");

	const pass = await bcrypt.compare(req.body.password, user.password);
	if (!pass) return res.status(400).send("Password is not correct!");

	// create token
	const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);

	res.header("auth-token", token).send(token);

	// res.send("Login")
}


function test() {
  
  const boj = [{ "name": "John", "email": "bb" },{ "name": "John", "email": "vv" }]
  // console.log(_.omit(boj, "boj.name"));
  console.log(_.map(boj, function (obj) {
    return _.omit(obj, 'name');
  }));
}
test();
// get all user list
async function getAllUsers(req, res) {
	try {
    const user = await User.find();
    
    res.status(200).send(_.map(user,function(user) {return displayData(user)}));
	} catch (error) {
		res.json({ message: error.message });
	}
}
// get one user by id
async function getUserByID(req, res) {
	try {
    const user = await User.findById(req.params.userId);
		res.status(200).send(displayData(user));

  } catch (error) {
		res.json({ error: error.message });
	}
}

// update user profile

async function updateUserProfile(req, res) {
	try {
		const updateUser = await User.updateOne(
			{ _id: req.params.userId },
			{
				$set: {
					profileImg: req.body.profileImg,
				},
			}
		);

		res.status(200).json(updateUser);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
}

//delete user accounts
async function deleteUserAccount(req, res) {
	try {
		const deleteUser = await User.remove({ _id: req.params.userId });
		res.status(200).json(deleteUser);
	} catch (error) {
		res.json({ error: error.message });
	}
}

function displayData(data) {
  return _.pick(data, [
    "_id",
    "firstName",
    "lastName",
    "email",
    "profileImg",
    "bio",
    "address",
    "skill",
    "category",
  ]);
}

module.exports.createNewUser = createNewUser;
module.exports.getAllUsers = getAllUsers;
module.exports.getUserByID = getUserByID;
module.exports.updateUserProfile = updateUserProfile;
module.exports.loginUser = loginUser;
module.exports.deleteUserAccount = deleteUserAccount;