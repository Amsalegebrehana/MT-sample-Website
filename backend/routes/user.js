const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.get('/', async (req, res) => {
 
try {
  const user = await User.find();
  res.json(user);
} catch (error) {
  res.json({ message: error.message})
}

});

router.post('/',async (req, res) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    profileImg: req.body.profileImg,
    bio: req.body.bio,
    address: req.body.address,
    skill: req.body.skill,
  });
  try {
    
    const saveUser = await user.save();
    res.status(200).json(saveUser);
  } catch (error) {
    res.json(error);
  }   
});



//get user by id

router.get('/:userId', async (req, res) => {
   try {
     const user = await User.findById(req.params.userId);
     res.status(200).json(user);
   } catch (error) {
     res.json({error: error.message});
   }
});


// delete user by id
router.delete('/:userId', async (req, res) => {
  
  try {
    const deleteUser = await User.remove({ _id: req.params.userId });
    res.status(200).json(deleteUser);
  } catch (error) {
    res.json({error: error.message});
  }
});

// update user by id

router.put('/:userId', async (req, res) => {
  
  try {
    const updateUser = await User.updateOne({ _id: req.params.userId },
      {
        $set:{
          profileImg: req.body.profileImg,
          skill: req.body.skill,
        }
      });
   
    res.status(200).json(updateUser);
  
  } catch (error) {
    res.json({error: error.message});
  }
});

module.exports = router;