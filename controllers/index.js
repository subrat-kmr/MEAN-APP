// Dependencies
var userModel = require('../models').UserModel;

function UserProfileController() {
}

UserProfileController.prototype.addUser = function(req, res) {

    /* *  Add Profile Details *  */

    if ('profile' in req.body) {
        var newProfile = req.body.profile;
        userModel.AddProfile(newProfile).done(function(profile) {
            console.log("User info added successfully.");
            res.status(200).send({
                "user": profile,
                "status": "User info added successfully."
            });
        }, function(err) {
            res.status(400).send({
                "user": newProfile,
                "status": "Failed to add profile.",
                "error": err
            });
        });
    } else {
        console.log("Failed to add profile");
        res.status(400).send({
            "status": "Failed to add profile.",
            "error": "Profile not found"
        });
    }
};

        /*  Get profile Details  */

UserProfileController.prototype.getUserById = function(req, res) {
    userModel.GetProfileById(req.params.id).done(function(profile) {
        console.log("Get User profile by ID.");
        res.status(200).send({
            "user": profile
        });
    }, function(err) {
        console.log("Failed to get profile");
        res.status(400).send({
            "error": err
        });
    });
};

module.exports = {
    'UserController': new UserProfileController()
};