angular.module("LifeReelApp").controller("NavCtrl",
	function ($scope, AuthFactory) {
		


		/*
    Just a pass-through method to the AuthFactory method of the
    same name.
    */
		// $scope.isAuthenticated = () => AuthFactory.isUserLoggedIn()
		// $scope.notAuthenticated = () => AuthFactory.notAuthenticated()
		


		/*
    Unauthenticate the client.
    */
	 $scope.logoutUser = function(){
			AuthFactory.removeToken()
			$location.url("/auth")
	}


		

	}
)