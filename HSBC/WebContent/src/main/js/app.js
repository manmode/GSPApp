var gspApp=angular.module('GSPMoveMoney',['ngRoute']);
/*asd*/
gspApp.config(['$routeProvider',
	
	function($routeProvider)
	{
		$routeProvider.
		
		when('/dashboard',{
			templateUrl:"js/html/dashboard.html",
			controller:''
			}).
		
		when('/login',{
			templateUrl:'js/html/loginPage.html',
			controller:''
		}).	
			
		when('/payeemanagement',{
			templateUrl:'js/html/payeemanagement.html',
			controller:''
		}).
		
		otherwise({
			redirectTo :'/dashboard'
		});
	}]);


gspApp.controller("loginPageController", function($scope)
{
	$scope.userName="roshan";
	$scope.pwd="manmode"
});

gspApp.controller("dashboardController",function($scope)
{
	$scope.msg="This is dashboard page......message from controller";
});

gspApp.controller("mbController",function($scope)
{
	$scope.msg="This is MB page......message from controller";
});