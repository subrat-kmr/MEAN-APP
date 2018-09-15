 "use strict";
app.service('$user', ['$resource', 'CONSTANT', function ($resource, CONSTANT) {
    var selectedUserId = null;
    var selectedUser = null;

    function getUserId() {
        return selectedUserId;
    }

    function setUserId(id) {
        selectedUserId = id;
    }

    function getUser() {
        return selectedUser;
    }

    function setUser(user) {
        selectedUser = user;
    }

    return {
        getUserId: getUserId,
        setUserId: setUserId,
        getUser: getUser,
        setUser: setUser,
        request: $resource(CONSTANT.SERVER + CONSTANT.PORT + CONSTANT.API.BASE + CONSTANT.API.USER + '/:id')
    }
}]);