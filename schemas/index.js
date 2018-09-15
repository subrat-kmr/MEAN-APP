// Dependencies
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    CONSTANT = require('../utilities').CONSTANTS;

// Model Definition
var Index = new mongoose.Schema({
    // First Page
    userName: {
        type: String,
        trim: true,
        lowercase: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        lowercase: true,
        required: true
    },
    // Second Page
    firstName: {
        type: String,
        trim: true,
        lowercase: true,
        required: true
    },
    lastName: {
        type: String,
        trim: true,
        lowercase: true,
        required: true
    },
    gender: {
        type: String,
        trim: true,
        lowercase: true
    },
    dob: {
        type: Date,
        default: Date.now
    },
    address: {
        type: String,
        trim: true,
        lowercase: true
    },
    mobile: {
        type: String,
        trim: true,
        lowercase: true
    },
    photo: {
        type: String,
        trim: true,
        lowercase: true
    },
    prefContactNumber: {
        type: String,
        trim: true,
        lowercase: true
    },
    // Third Page
    cardType: {
        type: String,
        trim: true,
        lowercase: true
    },
    cardHolderName: {
        type: String,
        trim: true,
        lowercase: true
    },
    cardNumber: {
        type: String,
        trim: true,
        lowercase: true
    },
    cvv: {
        type: String,
        trim: true,
        lowercase: true
    },
    cardExpiryDate: {
        type: Date,
        trim: true,
        lowercase: true
    },
    terms: {
        type: Boolean,
        trim: true,
        lowercase: true
    }
}, {
    strict: true
});


// Export module.
module.exports = mongoose.model(CONSTANT.MODULE_NAMES.USER, Index);