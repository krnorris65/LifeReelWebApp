angular.module("LifeReelApp")
	.controller("AuthCtrl", function($scope, $location, AuthFactory, UserFactory) {

		
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
				console.log(result)
				localStorage.setItem("token", result.data)
			})
			clearInput()
		}

		//when a user registers an account, it first creates a new user with firebase using the email and password provided and logs them in to Life Reel
		$scope.registerUser = function(registerNewUser, newUserInfo) {
			if($scope.user.first === undefined || $scope.user.last === undefined) {
				alert("Please fill in all fields")
			} else {
				AuthFactory.registerWithEmail(registerNewUser)
				.then(function (didRegister) {
					$scope.loginUser(registerNewUser)
				}).then((loggedIn) => {
					// then a user object is created with the user's first and last names. it is linked to the authentication with the uid 
					newUserInfo.fullName = $scope.user.first + " " + $scope.user.last
					newUserInfo.uid = firebase.auth().currentUser.uid
					UserFactory.add(newUserInfo)
				})
			}


		}

		//register jwt
		$scope.registerUser = function(registerNewUser) {
			AuthFactory.registerWithEmail(registerNewUser).then(function (didRegister) {
				$scope.loginUser(registerNewUser)
			})
			clearInput()
		}


		//logs user out
		$scope.logoutUser = function(){
			AuthFactory.removeToken()
			$location.url("/auth")
		}

		//back to auth page
		$scope.authPage = function(){
			$location.url("/auth")
		}

		clearInput = function() {
			$scope.auth.email = "";
			$scope.auth.password = "";
		}

	})