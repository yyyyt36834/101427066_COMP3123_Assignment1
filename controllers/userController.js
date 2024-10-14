const UserModel = require('../models/user');


// sign up user
exports.registerUser =  (req, res,next) => {
    const user = new UserModel(req.body);
    user.save()
    .then((user) => {
        res.send({
            message: "User created successfully",
            id: user._id
        });
    })
    .catch((err) => {
        console.log(err);
        next(err);
    });
};

// user login
exports.loginUser = (req, res,next) => {
    const email = req.body.email;
    const password = req.body.password; 

    UserModel.findOne({ email: email})
    .then((user) => {
        if(!user) {
            res.send({
                message: "User not found with email address"
            });
        }else{
            if(user.password == password) {
                res.send({
                    message:"login succesuful"
                });
            }else{
                res.send({
                    message: "password is incorrect"
                });
            }
        }
        })
    .catch((err) => {
        console.log(err);
        next(err);
    }); 
};
 
