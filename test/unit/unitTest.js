'use strict'; 

//declarem funcio
describe('testing CpController', function(){

	//per cada test farem servir el modul app
	beforeEach(module('app'));

	//declarem les variables controlador i scope
    	var scope;
	var ctrl;

	//per cada test carreguem el CpController i l'scope
    	beforeEach(inject(function($controller){
      		scope = {}, ctrl = $controller('CpController', {$scope:scope});
    	})); 
	
	//test que comprova els valors de les variables quan el nombre de xifres no es correcte
	it('should have more numbers', function() {	
    		expect(scope.validarCp('8024')).toEqual(false);
		expect(scope.error_cp).toBe('CP son 5 digits');
		expect(scope.ciutat).not.toBeDefined();
		expect(scope.provincia).not.toBeDefined();
  	});

	//test que comprova els valors de les variables quan alguna dels 5 caracters no es un numero
	it('should be only numbers', function() {	
    		expect(scope.validarCp('2.y45')).toBeFalsy();
		expect(scope.error_cp).toBe('Han de ser numeros');
		expect(scope.ciutat).not.toBeDefined();
		expect(scope.provincia).not.toBeDefined();
  	});
 
	//test que comprova els valors de les variables quan el cp no existeix
	it('should have a wrong cp', function() {
    		expect(scope.validarCp('08525')).toBeFalsy();
		expect(scope.error_cp).toBe('No existeix');
		expect(scope.ciutat).not.toBeDefined();
		expect(scope.provincia).not.toBeDefined();
  	}); 

	//test que comprova els valors de les variables quan el cp existeix
	it('should have right cp', function() {
		expect(scope.validarCp('08024')).toBeTruthy();
		expect(scope.error_cp).toBe('');
		expect(scope.ciutat).toBeDefined();
		expect(scope.provincia).toBeDefined();
  	});

});

describe('testing sinon', function(){
	
	it('prova', function(){
	var opts = { call: function (msg) { console.log(msg); } },
	    mock = sinon.mock(opts);

	// You state your success criteria upfront
	mock.expects("call").once().withExactArgs("Hello World");
	/* ... twice, atMost, never, exactly, on, etc ... */
	
	opts.call("Hello World"); 
	
	mock.verify();
	
	mock.restore();
});

});

