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
                    console.log(hotnews);
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
function userProCtrl() {

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
function loginCtrl() {

}
//Forgot Password
function forgotPassCtrl() {

}
app.controller('mainCtrl', mainCtrl);
app.controller('viewProCtrl', viewProCtrl);
app.controller('userProCtrl', userProCtrl);
app.controller('aboutUsCtrl', aboutUsCtrl);
app.controller('homeCtrl', homeCtrl);
app.controller('categoriesCtrl', categoriesCtrl);
app.controller('detailCtrl', detailCtrl);
app.controller('headerCtrl', headerCtrl);
app.controller('footerCtrl', footerCtrl);
app.controller('mainMenuCtrl', mainMenuCtrl);
app.controller('registerCtrl', registerCtrl);
app.controller('loginCtrl', loginCtrl);
app.controller('forgotPassCtrl', forgotPassCtrl);