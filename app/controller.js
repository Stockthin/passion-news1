
function mainCtrl($scope){
	// $scope.head = 'BBBB';
}

function homeCtrl($scope, $http){
	// $http
	// 	.get('api/news.json')
	// 	.then(function(respone){
	// 		var news = respone.data;
	// 		$scope.news = news;
	// 		news.forEach(function(item,key){
	// 			$scope.id_cate1 = item.IDCategory;
	// 			$http
	// 			.get('api/Category.json')
	// 			.then(function(respone2){
	// 				var categories = respone2.data;
	// 				categories.forEach(function(item2){
	// 					var id_cate2 = item2.IDCategory;
	// 				})
	// 			});
				// var id_cate = item.IDCategory;
				// if(id_cate == 'CG_01') {
				// 	var title = "có danh mục tin";
				// 	$scope.title = title;
				// } else {
				// 	var title = "không có danh mục tin";
				// 	$scope.title = title;
				// }
				// // console.log(title);
				// // console.log(item);
		// 		console.log($scope.id_cate);
		// 	});

		// 	console.log($scope.news);
		// });
}
function detailCtrl(){
  this.title = "Welcom to detail!!!";
}
function headerCtrl($scope, $http){
	$http
		.get('api/Category.json')
		.then(function(respone){
			var categories = respone.data;
			categories.forEach(function(item, key){
				console.log(item);
				console.log(item.IDCategory);
				console.log(key);
			});
			// $scope.categories = categories;
			// console.log($scope.categories);
			console.log(categories);
		});
	// $scope.title = 'AAAA';
}
function footerCtrl(){
  
}
app.controller('mainCtrl',mainCtrl);
app.controller('homeCtrl',homeCtrl);
app.controller('detailCtrl',detailCtrl);
app.controller('headerCtrl',headerCtrl);
app.controller('footerCtrl',footerCtrl);