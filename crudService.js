angular.module('mainApp')
.service('crudService',function($http){
    var crudService = this;
    
    //insert
    
  crudService.post = function (posts) {
        var request = $http({
            method: "post",
            url: 'https://jsonplaceholder.typicode.com/posts',
            data:  posts
        });
        return request;
    }
    
    //update
  crudService.put =function(id,posts){
      var result = $http({method:"put",url:'https://jsonplaceholder.typicode.com/posts/'+id,data:posts});
      return result;
  }
    //get single record
  crudService.getPostById=function(id) {
        console.log(id);
        return $http.get('https://jsonplaceholder.typicode.com/posts/' + id);
    }
    
    
});




