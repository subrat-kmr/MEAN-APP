'use strict';
app.controller('UserCtrl', [
    '$scope',
    '$state',
    '$user',
    '$stateParams',
    function ($scope, $state, $user, $stateParams) {

        /*Landing Controller Class*/
        var UserController = function () {
            $user.request.get({id: $stateParams.id}, function (response) {
                $scope.user = response.user;
                $user.setUser(response.user);
                $user.setUserId(response.user._id);
            }, function (error) {
                console.log(error);
            });
        };


        /*Create a new Instance*/
        var newUserCtrlObj = new UserController();

        /*Assign Values to scope*/
        $scope.userViewScope = {};
        newUserCtrlObj = null;
    }
]);