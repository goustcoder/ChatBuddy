const User = require('../models/user_model');

const userRegister = async(req,res)=>{
    const {email,name}= req.body;
    if (!email || !name ) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    try {
        const existingUser = await User.findOne({email});
        if (!existingUser) {
            const newUser = new User({ email, name });
            await newUser.save();
            return res.status(201).json({ message: 'Account created successfully' });
        }
        return res.status(200).json({ message: 'You logged in successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to store user', error });
    }
}

module.exports = userRegister ;