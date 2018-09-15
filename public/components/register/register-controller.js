'use strict';
app.controller('RegisterCtrl', [
    '$scope',
    '$state',
    '$user',
    function ($scope, $state, $user) {

        /*Landing Controller Class*/
        var RegisterController = function () {
            $scope.fname=/^[a-zA-Z]{4,20}$/;
            $scope.lname=/^[a-zA-Z]{4,20}$/;
            $scope.emailFormat=/^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
            $scope.passwordFormat=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,20}/;
            $scope.phonex=/^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/;
            $scope.chname=/^[a-zA-Z]{4,20}$/;
            $scope.cvvno=/^[0-9]{3}$/;
            $scope.cardno=/^\d{16}$/;

        };

        RegisterController.prototype.getGroup = function () {
            return {
                one: true,
                two: false,
                three: false,
                width: 5
            };
        };

        RegisterController.prototype.next = function () {
            console.log($scope.registerViewScope.user);
            if ($scope.registerViewScope.activeGroup.one) {
                $scope.registerViewScope.activeGroup.one = false;
                $scope.registerViewScope.activeGroup.two = true;
                $scope.registerViewScope.activeGroup.width = 33;
            } else if ($scope.registerViewScope.activeGroup.two) {
                $scope.registerViewScope.activeGroup.two = false;
                $scope.registerViewScope.activeGroup.three = true;
                $scope.registerViewScope.activeGroup.width = 66;
            }
        };

        RegisterController.prototype.prev = function () {
            console.log($scope.registerViewScope.user);
            if ($scope.registerViewScope.activeGroup.two) {
                $scope.registerViewScope.activeGroup.one = true;
                $scope.registerViewScope.activeGroup.two = false;
                $scope.registerViewScope.activeGroup.width = 0;
            } else if ($scope.registerViewScope.activeGroup.three) {
                $scope.registerViewScope.activeGroup.three = false;
                $scope.registerViewScope.activeGroup.two = true;
                $scope.registerViewScope.activeGroup.width = 33;
            }

        };

        RegisterController.prototype.submit = function () {
            var userProfile = {
                profile: $scope.registerViewScope.user
            };
            $user.request.save(userProfile, function (response) {
                console.log(response);
                $user.setUser(response.user);
                $user.setUserId(response.user._id);
                $scope.registerViewScope.activeGroup.width = 100;
                $state.go('user', {id: response.user._id});
            }, function (error) {
                console.log(error);
            })
        };

        /*Create a new Instance*/
        var newRegisterCtrlObj = new RegisterController();

        /*Assign Values to scope*/
        $scope.registerViewScope = {
            activeGroup: newRegisterCtrlObj.getGroup(),
            next: newRegisterCtrlObj.next,
            prev: newRegisterCtrlObj.prev,
            submit: newRegisterCtrlObj.submit,
            user: null
        };
        newRegisterCtrlObj = null;
    }
]);