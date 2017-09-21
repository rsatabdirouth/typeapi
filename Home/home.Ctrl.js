angular.module('mainApp')
    .controller('homeCtrl', function($scope,$location, appService){
    var vm = this;
    vm.pageSize = 6;
    vm.totalItem = 0;
    vm.pagesCount = 0;
    vm.pages = [];
    vm.currentPage= 1;
    var index = 0;
    vm.pageChange = pageChange;
    vm.pagedPost = [];
    vm.posts = [];
    vm.currentPost = null;
    vm.editable= null;
    vm.edit = edit;
    
    vm.title = "post lists of statements";
   
    function activate(){    
        
        appService.getpost().then(function(res){            
            vm.posts = res.data;
            vm.totalItem = vm.posts.length;
            console.log('total no of object is',vm.totalItem);
            vm.pagesCount = Math.ceil(vm.totalItem/vm.pageSize);
                for(var i = 1; i<= vm.pagesCount; i++){
                    vm.pages.push(i);
                }
            pageChange(vm.pages[--vm.currentPage]);
            console.log(vm.pages);
            console.log('the list posts', vm.posts);
            console.log('total item', vm.totalItem);
            console.log('pagescoutn', vm.pagesCount);
           
        })
        
    }
    activate();
    function pageChange(page){
        console.log('the page pased is',page);
        vm.pagedPost = [];
        vm.currentPage = page;
        index = (page - 1) * vm.pageSize;   
        console.log('the index is',index);
        var trackIndex = 0;
            for(var i = index; i <= vm.posts.length; i++){
                vm.pagedPost.push(vm.posts[i]);
                trackIndex++;
                if(trackIndex == vm.pageSize){
                    break;
                }
        
    }
      
    }
    
    function edit(id){
        console.log('change', id);
        $location.url('/Nextpage/'+ id);
    }
    
  
   
});

