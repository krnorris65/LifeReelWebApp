angular.module("LifeReelApp")
	.factory("AuthFactory", function($http, $location, $timeout, $route) {
		
		let currentUserData = null

		// function isUserLoggedIn(){
		// return localStorage.getItem("token") !== null;
		// }

		// function saveThatToken(tokenResult) {
		// return localStorage.setItem("token", tokenResult.data);
		// }

		// function getSavedToken() {
		// return localStorage.getItem("token");
		// }

		function removeToken() {
		return localStorage.removeItem("token");
		}

		return {}

	})