function config($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/home");
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'app/components/home/home.html',
            controller: 'homeCtrl as home',
            data: {
                pageTitle: 'HOME'
            }
        })
        .state('detail', {
            url: '/detail/:id',
            templateUrl: 'app/components/detail/detail.html',
            controller: 'detailCtrl as detail',
            data: {
                pageTitle: 'DETAIL'
            }
        })
        // .state('header', {
        //     url: '/header',
        //     controller: 'headerCtrl',
        //     views: {
        //         '' : {
        //              templateUrl: 'app/components/common/header/header.html'
        //         },
        //         'top_menu@header' :{
        //             templateUrl: 'app/components/common/header/top_menu/top_menu.html'
        //         },
        //          'main_menu@header' :{
        //             templateUrl: 'app/components/common/header/main_menu/main_menu.html'
        //         } 
        //     }
        // })
        //User profile
        .state('user_profile', {
            url: '/user_profile',
            views: {
                '': {
                    templateUrl: 'app/components/user_profile/user_profile.html'
                },
                // 'view@user_profile' : {
                //     templateUrl: 'app/components/user_profile/view_profiles/view_profiles.html'
                // },
                // 'edit@user_profile' : {
                //      templateUrl: 'app/components/user_profile/edit_account/edit_account.html'
                // },
                'avatar_custom@user_profile': {
                    templateUrl: 'app/components/user_profile/avatar_custom/avatar_custom.html'
                }
            }

        })
        .state('user_profile.view', {
            url: '/view_profiles',
            templateUrl: 'app/components/user_profile/view_profiles/view_profiles.html',
            // controller: 'abouUsCtrl as aboutUs',

        })
        .state('user_profile.edit', {
            url: '/edit',
            templateUrl: 'app/components/user_profile/edit_account/edit_account.html',
            // controller: 'abouUsCtrl as aboutUs',

        })
        .state('user_profile.change_pass', {
            url: '/change_pass',
            templateUrl: 'app/components/user_profile/change_password/change_password.html',
            // controller: 'abouUsCtrl as aboutUs',

        })
        .state('user_profile.post', {
            url: '/post_news',
            templateUrl: 'app/components/user_profile/post_news/post_news.html',
            // controller: 'abouUsCtrl as aboutUs',

        })
        .state('about_us', {
            url: '/about_us',
            templateUrl: 'app/components/about_us/about_us.html',
            controller: 'aboutUsCtrl as aboutUs',
            data: {
                pageTitle: 'About_US'
            }
        })
        .state('register', {
            url: '/register',
            templateUrl: 'app/components/register/register.html',
            controller: 'registerCtrl as register',
            data: {
                pageTitle: 'register'
            }
        })
        .state('detail_categories', {
            url: '/detail_categories/:id',
            templateUrl: 'app/components/detail_categories/detail_categories.html',
            controller: 'categoriesCtrl as categories',
            data: {
                pageTitle: 'DETAIL'
            }
        })

    //Login
    .state('login', {
        url: '/login',
        templateUrl: 'app/components/login/login.html',
        controller: 'loginCtrl as login',
        data: {
            pageTitle: 'LOGIN'
        }
    })

     .state('forgot_pass', {
       url: "/forgot_password",
     templateUrl: "app/components/forgot_password/forgot_password.html",
    controller: 'forgotPassCtrl as forgot',
    data: {
      pageTitle: 'FORGOT'
       }
       });
}
app.config(config);