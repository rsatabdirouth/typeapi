angular.module('mainApp')
.config(function($routeProvider){
    $routeProvider
    
 
    .when("/", {
        templateUrl: './Home/_home.html',
        controller: 'homeCtrl as home'
    })
    .when('/nextpage', {
        templateUrl: './Nextpage/_nextpage.html',
        controller: 'nextpageCtrl as nextpage'
    })
    
});


