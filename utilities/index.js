var CONSTANTS = {
    'MODULE_NAMES': {
        'USER': 'user'
    },
    'IP': '127.0.0.1',
    'PORT': 9005,
    'LOCAL_DB': 'mongodb://localhost/user_register',
};

function Utility() {

}

Utility.prototype.responseHandler = function (res, status, data) {
    if (res) {
        res.status(status).json(data);
    } else {
        throw new Error('Response obj not found.');
    }
};


module.exports = {
    Utility: new Utility(),
    CONSTANTS: CONSTANTS
};