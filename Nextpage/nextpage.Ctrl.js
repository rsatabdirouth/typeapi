angular.module('mainApp')
.controller('nextpageCtrl',function($scope,$routeParams, crudService, appService ,$location){
    var vm=this;
    vm.title = "This is the nextpage";
    vm.id = null; 
    vm.post = {};
    vm.posts={};
    vm.postupdated={};
 
    activate();
    function activate(){
        vm.id = $routeParams.id;
        console.log('now the id is:',vm.id);
        if(vm.id){
             vm.post  =  crudService.getPostById(vm.id).then(function(res){
                 vm.post = res.data;
                 console.log(vm.post);
             });
            
        }
    }
   
    
    $scope.saved=function(){
        var posts={
         //  title:$scope.nextpage.post.title,body:$scope.nextpage.post.body,id:$scope.nextpage.post.id
            title:vm.nextpage.post.title,
            body:vm.nextpage.post.body,
            id:vm.nextpage.post.id
        };
        console.log('the item to be edited',posts);
        
        if(posts.id<=0)//then insert service is called from crud service
            {
               var promisepost=crudService.post(posts);
                promisepost.then(
                function(res){
                   $scope.nextpage.post.title=res.data.title;
                   $scope.nextpage.post.body=res.data.body;
                    $scope.nextpage.post.id=res.data.id;
                    $location.url('/home/')
                    
                },
                function(err){console.log('error in insert',err)});
            }else
            {
                var promiseput=crudService.put(posts,posts.id);
                console.log('id to be updated is',posts.id);
                promiseput.then(
                function(){console.log('updated');
                $location.url('/home/');},
                function(err){console.log('error in update',err)});
                
            }
        
    };
    
        vm.reset = function (){
        vm.nextpage.post.title='';
        vm.nextpage.post.body='';
        vm.id=$routeParams.id=0;
        console.log(reset);
    }
    
    
    
    
});