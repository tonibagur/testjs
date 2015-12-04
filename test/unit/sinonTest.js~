'use strict';


//http://jasmine.github.io/2.0/introduction.html
describe('CpController', () => {

	//per cada test farem servir el modul app
	beforeEach(module('app'));

	//declarem les variables controlador i scope
    	var scope;
	var ctrl;
	
	//per cada test carreguem el CpController i l'scope
    	beforeEach(inject(function($controller){
      		scope = {}, ctrl = $controller('CpController', {$scope:scope});
    	}));

	//exemple per saber com funciona l'spy
	it('testing spies', function(){
		spyOn(scope, "validarCp");
		scope.validarCp('08025');
		expect(scope.validarCp).toHaveBeenCalled();
		expect(scope.validarCp).toHaveBeenCalledWith('08025');
	});

	//spy a validarMida
	it('testing spy on validarMida', function(){
		//problema! si no esta a l'scope no es pot espiar...
		var spy= spyOn(scope, "validarMida");

		scope.validarCp('');

		expect(scope.validarMida).toHaveBeenCalled();
		expect(scope.validarMida).toHaveBeenCalledWith('');
		
		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith('');
	});

	//exemple per saber com funcionen els stubs
	it('testing stubs', function(){
		var stub = sinon.stub(scope, "validarCp");
		stub.withArgs('545').returns('patata');
		stub.returns('atata');
		expect(stub('545')).toEqual('patata');
		expect(stub('565')).toEqual('atata');
		expect(scope.validarCp('545')).toEqual('patata');
		expect(scope.validarCp('897')).toEqual('atata');
		
	});

	//exemple mock
	it('testing mocks', function(){
		var mock=sinon.mock(scope.validarCp);

		scope.validarCp('');
		mock.verify();

	});


});


