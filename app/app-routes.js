function config($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise("/home");
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'app/components/home/home.html',
            controller: 'homeCtrl as home',
            data: { pageTitle: 'HOME' }
        })
        .state('detail', {
            url: '/detail',
            templateUrl: 'app/components/detail/detail.html',
            controller: 'detailCtrl as detail',
            data: { pageTitle: 'DETAIL' }
        })
        // .state('login', {
        //     url: '/login',
        //     templateUrl: 'view/login.html',
        //     controller: 'LoginCtrl as login',
        //     data: { pageTitle: 'LOGIN' }
        // })
        // .state('register', {
        //     url: '/register',
        //     templateUrl: 'view/register.html',
        //     controller: 'RegisterCtrl as register',
        //     data: { pageTitle: 'REGISTER' }
        // })
        // .state('userProfile', {
        //     url: '/user-profile',
        //     templateUrl: 'view/user-profile.html',
        //     controller: 'UserProCtrl as userProfile',
        //     data: { pageTitle: 'USER-PROFILE' }
        // })
        // .state('forgot-pass', {
        //     url: "/forgot-pass",
        //     templateUrl: "view/forgot-pass.html",
        //     controller: 'ForgotPassCtrl as forgot',
        //     data: { pageTitle: 'FORGOT' }
        // });
}
app.config(config);

