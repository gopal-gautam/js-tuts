npm install karma-cli phantomjs -g
npm install karma jasmine --save-dev

cd app
bower install angular-mocks --save

mkdir tests\test\unit
cd tests\test\unit

karma init
<Browser: PhantomJS>

vim karma.conf.js
--Add the following line--
files: [
	'path/to/angular.js',
	'path/to/angular-mocks.js',
	'path/to/app.js',
	'unit/*.js',
],

karma start karma.conf.js

vim unit\mytest.js

describe('Testing AnjularJS Test Suite', function() {

	beforeEach(module('nameofangularmodule'));
	describe('Testing AngulasJS Controller', function() {
		
		var scope, ctrl;
	
		beforeEach(inject(function($controller) {
			scope = $rootScope.$new();
			ctrl = $controller('nameofcontroller', {$scope:scope});
		}));
		
		it('Should initialize the title in the scope', function() {
		
			expect(scope.title).toBeDefined();
			expect(scope.title).toBe("Testing Angularjs");
		});
	});
})