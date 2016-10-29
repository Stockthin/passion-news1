//JsonFactory
function JsonFactory ($rootScope){
	var service ={};
	service.tieude =  "This is JsonFactory";
	service.tieude2 =  "This is JsonFactory 2";
	// $rootScope.tieude =  "This is JsonFactory";
	return service;
	// console.log(service);
}

//Categories Json
// function getJsonFactory ($rootScope, $http){
// 	var service = {};
// 	service.Categories = function(){
// 		$http
// 		.get('api/Category.json')
// 		.then(function(respone){
// 			// var categories = respone.data;
// 			return respone;
// 		});
		
// 	}
// 	service.User = function(){
// 		$http
// 		.get('api/User.json')
// 		.then(function(respone){
// 			$rootScope.user = respone.data;
// 		});
// 	}
// 	return service;

// // 	$http
// // 		.get('api/Category.json')
// // 		.then(function(respone){
// // 			var categories = respone.data;
			
// // 		});
// // 	}
// // return categories;

// 	// $http
// 	// 	.get('api/Category.json')
// 	// 	.then(function(respone){
// 	// 		$rootScope.categories = respone.data;
// 	// 	});
// 	// return $scope.categories;
// 	// return {
//  //            getCategories: function () {
//  //                return $http.get("api/Category.json");
//  //            },
//  //            getAdmins: function () {
//  //                return $http.get("api/User.json");
//  //            }
//  //    };
	
// }


//Test thử hàm service
function firstService(){
	this.name = "Hoa";
	this.serviceFunction = function(){
		return this.name.length;
	}
}

//JSon Services
function jsonServices($resource){
	this.GetCategories = function(id, name) {
           
        var categoriesAPI = $resource("api/Category.json", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});

        var categoriesResult = categoriesAPI.get({ q: id, cnt: name, lang: 'vi', units: 'metric', APPID: '279b4be6d54c8bf6ea9b12275a567156' });
     
        return categoriesResult;
        
    }
	
}

// angular.module('Json')

app.factory('JsonFactory', JsonFactory);
// app.factory('getJsonFactory', getJsonFactory);
app.service('firstService', firstService);
app.service('jsonServices', jsonServices);
// app.factory('JsonFactory', JsonFactory);


