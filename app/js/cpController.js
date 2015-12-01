'use strict';

var app=angular.module('app', [])
.controller('CpController', function CpController($scope) {

	var cpProva=['08024','08025','08026','08027','08028'];
  	
	$scope.validarCp = function(cp){

		$scope.validarMida(cp);
    		var size = cp.length;
   	 	if (size!=5) {
      			$scope.error_cp = 'CP son 5 digits';
			return false;
		} else if(!parseInt(cp)){
			$scope.error_cp = 'Han de ser numeros';
			return false;
    		} else if (cpProva.indexOf(cp) == -1) {
      			$scope.error_cp = 'No existeix';
			return false;
    		} else{
			$scope.error_cp = '';
			$scope.ciutat='Barcelona';
			$scope.provincia='Barcelona';
			return true;
		}
  	};	
})

