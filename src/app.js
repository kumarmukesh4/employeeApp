var app = angular.module('empApp', [
    'ui.router',
    'angular.filter'
]);

app.controller('appCtrl', ['$scope', function($scope){
    
    
    
}]);

app.config(function config($stateProvider, $urlRouterProvider){
    $stateProvider
    .state('home', {
            url: '/home',
            views: {
                "main": {
                 controller: 'homeCtrl',
                 templateUrl: 'module/home/home.htm'   
                }
            }
            
    })
    .state('home.list', {
            url: '/home.list',
            views: {
                "emp-list": {
                 controller: '',
                 templateUrl: 'module/home/home-list.htm'   
                }
            }
            
    })
    .state('home.grid', {
            url: '/home.grid',
            views: {
                "emp-list": {
                 controller: '',
                 templateUrl: 'module/home/home-grid.htm'   
                }
            }
            
    })
    .state('addemployee', {
            url: '/addemployee',
            views: {
                "main": {
                 controller: 'addemployeeCtrl',
                 templateUrl: 'module/aboutus/aboutus.htm'   
                }
            }
            
    })
    .state('aboutus', {
            url: '/aboutus',
            views: {
                "main": {
                 controller: 'aboutusCtrl',
                 templateUrl: 'module/aboutus/aboutus.htm'   
                }
            }
            
    });
    
    
    
    
    $urlRouterProvider.otherwise('/home');
    
    
     
    
});