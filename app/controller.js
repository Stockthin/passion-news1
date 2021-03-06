function mainCtrl($scope, $http) {
    // $http
    // 	.get('api/news.json')
    // 	.then(function(respone){
    // 		var news = respone.data;
    // 		$scope.news = news;
    // 		console.log($scope.news);
    // 	});

    // $scope.url = 'assets/img/'; 

}

function homeCtrl($scope, $http) {
    //Lấy top news
    var topnews = [];
    $scope.topnews = topnews;
    $http
        .get("api/news.json")
        .then(function (respone) {
            var news = respone.data;
            news.reverse();
            //Top 1 new
            $scope.top1new = news[0];

            //Duyệt mảng news + Lấy top 4 tin mới nhất
            news.forEach(function (item, key) {
                var tintuc = item;
                var key = key;
                //Lấy 4 tin mới nhất
                if (key < 5 && key > 0) {
                    topnews.push(tintuc);
                }
            });
            //Lấy Categories
            // var categories = [];
            // var top_news_with_categories = [];
            //  	$http
            // 	.get('api/Category.json')
            // 	.then(function(respone){
            // 		categories = respone.data;
            // 		$scope.categories = respone.data;
            // 		//Duyệt mảng Categories
            // 		categories.forEach(function(item,key) {
            // 			var id_category = item.IDCategory;

            // 		});
            // 	});

        });
    //Lấy tin theo categories
    var news_other_by_cat = [];
    $http
        .get('api/news_by_categories.json')
        .then(function (respone) {
            var news_by_categories = respone.data;
            $scope.news_by_categories = news_by_categories;
            news_by_categories.forEach(function (item, key) {
                var news_by_category = item;
                var id_news_by_cat = item.IDCategory;
                news_by_category.news.forEach(function (item2, key2) {
                    if (id_news_by_cat == item2.IDCategory) {
                        var new_other_by_cat = item2;
                        news_other_by_cat.push(new_other_by_cat);
                        $scope.news_other_by_cat = news_other_by_cat;

                    }
                    // console.log(news_other_by_cat);
                });
                // console.log(item);
            });
            // console.log(news_by_categories);
        });

}
//Detail News
function detailCtrl($scope, $http, $stateParams) {
    var id = $stateParams.id;
    var other_news = [];
    var hotnews = [];
    // console.log(id);
    $http
        .get('api/news.json')
        .then(function (respone) {
            var news = respone.data;
            news.reverse();
            news.forEach(function (item, key) {
                //Show tin tức được chọn
                if (id == item.IDNews) {
                    $scope.new = item;
                    $scope.id_category = item.IDCategory;

                }
                //Lấy tin tức cùng categories
                if ($scope.id_category == item.IDCategory) {

                    $scope.id2 = item.IDNews;
                    var other_new = item;
                    other_news.push(other_new);
                    $scope.other_news = other_news;
                    // console.log($scope.other_news);

                }
                //Hot news
                var hotnew = item;
                if (key < 5) {
                    hotnews.push(hotnew);
                    $scope.hotnews = hotnews;
                    // console.log(hotnews);
                }
                //Lấy tên danh mục tin của tin được chọn
                $http
                    .get('api/Category.json')
                    .then(function (respone) {
                        var categories = respone.data;
                        categories.forEach(function (item, key) {
                            if ($scope.id_category == item.IDCategory) {
                                // console.log(item.NameCategory);
                                $scope.name_category = item.NameCategory;
                            }

                        });
                    });


            });

        });

}

//Detail Categories
function categoriesCtrl($scope, $http, $stateParams) {
    var id = $stateParams.id;

    // console.log(id);
    $http
        .get('api/news_by_categories.json')
        .then(function (respone) {
            var news_by_categories = respone.data;
            news_by_categories.reverse();
            // console.log(news);
            news_by_categories.forEach(function (item, key) {
                //Show tin tức được chọn
                if (id == item.IDCategory) {
                    var news_by_category = item.news;
                    $scope.news_by_category = news_by_category;
                    console.log(news_by_category);
                    // $scope.new = item;
                    // $scope.id_category = item.IDCategory;

                }
                //Lấy tin tức cùng categories
                // if($scope.id_category == item.IDCategory) {

                // 	$scope.id2 = item.IDNews;
                // 	var other_new = item;
                // 	other_news.push(other_new);
                // 	$scope.other_news = other_news;
                // 	// console.log($scope.other_news);

                // }	
            });
        })

}

function headerCtrl($scope, $http) {

}

function footerCtrl() {

}
//Main Menu
function mainMenuCtrl($scope, $http) {
    $http
        .get('api/Category.json')
        .then(function (respone) {
            $scope.categories = respone.data;
        });

}

//User profile
function userProCtrl($scope, $cookieStore) {
    if ($cookieStore.get('session_token')) {
        $scope.first_name = $cookieStore.get('session_user').first_name;
        $scope.last_name = $cookieStore.get('session_user').last_name;
        $scope.email = $cookieStore.get('session_user').email;
        // console.log($cookieStore.get('session_token'));
        // $cookieStore.remove($cookieStore.get('session_token'));
    }
}

//About us
function aboutUsCtrl() {

}

//View Profiles 
function viewProCtrl() {

}
//Register 
function registerCtrl() {

}
//Login
function loginCtrl($scope, $http, $cookieStore, $window, $location) {
    $scope.area_message = false;
    $scope.message1 = '';
    $scope.message2 = '';
    $scope.message3 = '';
    $scope.login = function () {
        if ($scope.email != null && $scope.password != null) {
            var session = {
                'email': $scope.email,
                'pass': $scope.password
            };
            console.log(session);
            //  // console.log(session);
            $http
                .post(
                    'http://demo3004504.mockable.io/example',
                    JSON.stringify(session),
                    {
                        'Content-Type': 'application/json'
                    }
                    
            
                    // 'http://192.168.1.12:8000/api/v1/authentication/sign_in/',
                    // session,
                    // {'Content-Type': 'application/json'}
                )
                .then(function (respone) {
                    // console.log(respone);
                    var data = respone.data;
                    var message = '';
                    console.log(respone);
                    if (respone.data.user) {
                        $scope.profile = respone.data.user;
                        $cookieStore.put('session_user', $scope.profile);
                        $cookieStore.put('session_token', $scope.profile.access_token);
                        console.log($cookieStore.get('session_user'));
                        console.log($cookieStore.get('session_token'));
                        // console.log(access_token);
                        $location.path('/home');
                        $window.location.reload();
                    }
                    if (respone.data.error1) {
                        var error1 = respone.data.error1;
                        $scope.area_message = true;
                        $scope.message1 = error1.message;
                        // message = error1.message;
                        console.log(error1.message);
                    }
                    if (respone.data.error2) {
                        var error2 = respone.data.error2;
                        $scope.area_message = true;
                        $scope.message2 = error2.message;
                        // message = error2.message;
                        console.log(error2.message);
                    }

                    // console.log(respone.data);

                });
        } //else {
        //     $scope.message3 = "Email hoặc mật khẩu không đúng";
        // }


    }
}
//Forgot Password
function forgotPassCtrl() {

}
//Top Header 
function topHeaderCtrl($scope, $cookieStore, $location, $window) {
    $scope.show1 = true;
    $scope.show2 = false;
    $scope.session_token = {};
    // if($cookieStore.get('session_user')) {
    //   console.log('Không có tài khoản nào');
    // } else{
    //   $cookieStore.remove('session_user');
    //   // $location.path('/home');
    // }
    if($cookieStore.get('session_token')) {
        $scope.show1 = false;
        $scope.show2 = true;
        $scope.name = $cookieStore.get('session_user').first_name;
        console.log($cookieStore.get('session_token'));
        $scope.logout = function (){
            // var session_token = {};
            $cookieStore.remove('session_token');
            $location.path('/home');
            $window.location.reload();
            // console.log('logout');
        }
       
    }
   
}
//Avatar Custom
function avatarCustomCtrl($scope) {
    $scope.show_manager = false;
    $scope.clickManager = function () {
        $scope.show_manager = true;
    }
}
//
function addCatCtrl(){
    
}
app.controller('addCatCtrl', addCatCtrl);
app.controller('avatarCustomCtrl', avatarCustomCtrl);
app.controller('mainCtrl', mainCtrl);
app.controller('viewProCtrl', viewProCtrl);
app.controller('userProCtrl', userProCtrl);
app.controller('aboutUsCtrl', aboutUsCtrl);
app.controller('homeCtrl', homeCtrl);
app.controller('categoriesCtrl', categoriesCtrl);
app.controller('detailCtrl', detailCtrl);
app.controller('headerCtrl', headerCtrl);
app.controller('topHeaderCtrl', topHeaderCtrl);
app.controller('footerCtrl', footerCtrl);
app.controller('mainMenuCtrl', mainMenuCtrl);
app.controller('registerCtrl', registerCtrl);
app.controller('loginCtrl', loginCtrl);
app.controller('forgotPassCtrl', forgotPassCtrl);


//ckeditor
//var app = angular.module("myApp", ["ngCkeditor"]);
app.directive('ckEditor', function () {
    return {
        require: '?ngModel',
        link: function (scope, elm, attr, ngModel) {
            var ck = CKEDITOR.replace(elm[0]);
            if (!ngModel) return;
            ck.on('instanceReady', function () {
                ck.setData(ngModel.$viewValue);
            });

            function updateModel() {
                scope.$apply(function () {
                    ngModel.$setViewValue(ck.getData());
                });
            }
            ck.on('change', updateModel);
            ck.on('key', updateModel);
            ck.on('dataReady', updateModel);

            ngModel.$render = function (value) {
                ck.setData(ngModel.$viewValue);
            };
        }
    };
});
app.controller("Ckeditor", ["$scope", function ($scope) {
    $scope.content = "<p>Nhập văn bản...</p>";
}]);
app.controller("Ckeditor1", ["$scope", function ($scope) {
    $scope.content = "<p>Năm 2015, bảng bình chọn nghệ sĩ bị ghét nhất làng giải trí Hoa ngữ được công bố. Điều đáng nói, Angela Baby là nghệ sĩ nữ đứng đầu bảng xếp hạng này, chỉ sau Trần Hách - kẻ ngoại tình không thể yêu thương nổi. Kể từ khi ra nhập làng giải trí, Angela Baby là một trong số những nghệ sĩ sở hữu lượng anti fan hùng hậu. Vậy, tại sao, đã hơn 10 năm trôi qua, vì những lý do gì mà Angela Baby luôn bị gán mác Mỹ nhân thủ đoạn của làng giải trí đến vậy?</p>";
}]);

app.controller("mainComment", ["$scope", function ($scope) {
    $scope.content = "<p> Nhập bình luận... </p>";
}]);