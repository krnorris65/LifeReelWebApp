angular.module("LifeReelApp")
	.controller("AuthCtrl", function($scope, $location, AuthFactory, $routeParams, $http) {

		
		//object that email and password are added to
		$scope.auth = {}

		//object that user's first name and last name are added to
		$scope.user = {}

		//uses JWT to seee if the user already exists
		$scope.loginUser = function (credentials) {
			$http({
				method: "POST",
				url: `http://localhost:5000/api/token?username=${$scope.auth.email}&password=${$scope.auth.password}`
			}).then(result => {
				console.log("login", result)
				localStorage.setItem("token", result.data)
				if(result.status === 200){
					$location.url("/landing")
				}
			})
		}

		//when a user registers an account, it first creates a new user with firebase using the email and password provided and logs them in to Life Reel
		$scope.registerUser = function(registerNewUser, newUserInfo) {
			if($scope.user.first === undefined || $scope.user.last === undefined) {
				alert("Please fill in all fields")
			} else {
				$http({
					method: "POST",
					url: `http://localhost:5000/api/token?username=${$scope.auth.email}&password=${$scope.auth.password}&fname=${$scope.user.first}&lname=${$scope.user.last}`
				}).then(result => {
					localStorage.setItem("token", result.data);
					console.log("register", result)
					if(result.status === 200){
						$location.url("/landing")
					}
				})
			}


		}

		//register jwt
		// $scope.registerUser = function(registerNewUser) {
		// 	AuthFactory.registerWithEmail(registerNewUser).then(function (didRegister) {
		// 		$scope.loginUser(registerNewUser)
		// 	})
		// }


		//logs user out, not sure this function is needed here since it's on the NavCtrl
		// $scope.logoutUser = function(){
		// 	AuthFactory.removeToken()
		// 	$location.url("/auth")
		// }

		//back to auth page
		$scope.authPage = function(){
			$location.url("/auth")
		}


	})