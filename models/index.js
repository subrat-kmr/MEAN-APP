var userProfileSchema = require('../schemas'),
    promise = require('promise');

function UserRegisterModel() {

}
/**
 * @Add Profile
 */

UserRegisterModel.prototype.AddProfile = function(Profile) {
    return new promise(function(resolve, reject) {
        var NewDocument = new userProfileSchema(Profile);
        NewDocument.save(function(err, data) {
            if (err) {
                console.log('Error while adding user profile.');
                reject(err);
            } else {
                console.log('User profile added successfully.');
                resolve(data);
            }
        });
    });
};

/**
 * @Get Profile by ID
 */

UserRegisterModel.prototype.GetProfileById = function(id) {
    return new promise(function(resolve, reject) {
        userProfileSchema.findOne({
            _id: id
        }).lean().exec(function(err, profile) {
            if (err) {
                console.log('Error fetching profile by Id.');
                reject(err);
            } else {
                console.log('Get profile by Id.');
                resolve(profile);
            }
        });
    });
};

/**
 * @Delete Profile
 */

UserRegisterModel.prototype.DeleteProfileById = function(id) {
    return new promise(function(resolve, reject) {
        userProfileSchema.findByIdAndRemove(id, function(err, user) {
            if (err) {
                console.log('Error while deleting Profile.');
                reject(err);
            } else {
                console.log('Profile deleted successfully.');
                resolve(user);
            }
        });
    });
};
/**
 * @Update Profile
 */
UserRegisterModel.prototype.updateProfileById = function(id, profile) {
    return new promise(function(resolve, reject) {
        userProfileSchema.findByIdAndUpdate(id, profile, function(err, updatedProfile) {
            if (err) {
                console.log('Error while updating Profile.');
                reject(err);
            } else {
                console.log('Profile updated successfully.');
                resolve(updatedProfile);
            }
        });
    });
};

/**
 * @Profile Ends
 */

module.exports = {
    'UserModel': new UserRegisterModel()
};