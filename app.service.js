angular.module('mainApp')
.service('appService',function($http){
    var service = this;
    service.getpost= getpost;
    service.getPostById = getPostById;
    
    function getPostById(id){
        console.log(id);
        return $http.get('https://jsonplaceholder.typicode.com/posts/' + id);
    }
    function getpost()
    {
        return $http.get('https://jsonplaceholder.typicode.com/posts');
    }
});



    
