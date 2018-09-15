'use strict';
app.controller('UserListCtrl', [
    '$scope',
    '$state',
    '$user',
    function ($scope, $state, $user) {

        /*Landing Controller Class*/
        var userListController = function () {
        };


        /*Create a new Instance*/
        var newuserListCtrlObj = new userListController();

        /*Assign Values to scope*/
        $scope.userListViewScope = {
            user: null
        };
        newuserListCtrlObj = null;
    }
]);