'use strict';
app.config(['$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {

        $stateProvider.state('register', {
            url: '/register',
            templateUrl: 'components/register/register-template.html',
            controller: 'RegisterCtrl'
        }).state('userList', {
            url: '/userList',
            templateUrl: 'components/userList/userList-template.html',
            controller: 'UserListCtrl'
        }).state('user', {
            url: '/user/:id',
            templateUrl: 'components/user/user-template.html',
            controller: 'UserCtrl'
        });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/register');
        // use the HTML5 History API
        $locationProvider.html5Mode(true);
    }
]);