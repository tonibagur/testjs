'use strict';

var app=angular.module('app', [])
.controller('CpController', function CpController($scope) {

	var cpProva=['08024','08025','08026','08027','08028'];

	var validarMida= function(cp){
		if(cp.length!=5){
			$scope.error_cp = 'CP son 5 digits';
			return false;	
		}
		return true;
	};
	
	var validarDigits= function(cp){
		if(parseInt(cp)!=cp){
			$scope.error_cp = 'Han de ser numeros';
			return false;
		}
		return true;
	};

	var existeix= function(cp){
		if(cpProva.indexOf(cp)==-1){
			$scope.error_cp = 'No existeix';
			return false;
		}
		return true;
	};

	$scope.validarCp= function(cp){
		if(validarMida(cp)&&validarDigits(cp)&&existeix(cp)){
			$scope.error_cp = '';
			$scope.ciutat='Barcelona';
			$scope.provincia='Barcelona';
			return true;	
		}
		return false;
	};

})
