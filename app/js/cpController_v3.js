'use strict';

var app=angular.module('app', [])
.controller('CpController', function CpController($scope) {

	var cpProva=['08024','08025','08026','08027','08028'];

	var evaluar=function(condicio, error){
		if(condicio){
			$scope.error_cp = error;
			return false;	
		}
		return true;
	}

	var validarMida= function(cp){
		return evaluar((cp.length!=5),'CP son 5 digits');
	};
	
	var validarDigits= function(cp){
		return evaluar((parseInt(cp)!=cp),'Han de ser numeros');
	};

	var existeix= function(cp){
		return evaluar((cpProva.indexOf(cp)==-1),'No existeix');
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
