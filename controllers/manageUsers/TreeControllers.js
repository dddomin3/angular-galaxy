                                         
gxMainApp.controller('treedata1', ['$scope', '$http',                             
    function ($scope, $http) {
	
	  $http.get('http://localhost:8000/models/tree/todo.json').success(function(data) {
      $scope.data = data.featureDTO;
      console.log(data);
         
      $("#gxtree").dtree({
    		checkbox: true,
    		selectMode: 3,
    		subFeatureList: data.featureDTO,
    		onSelect: function(select, node) {
    			
    			var selKeys = $.map(node.tree.getSelectedNodes(), function(node){
    				return node.data.key;
    			});
    			$("#echoSelection").text(selKeys.join(", "));

    			
    			var selRootNodes = node.tree.getSelectedNodes(true);
    			var selRootKeys = $.map(selRootNodes, function(node){
    				return node.data.key;
    			});
    			$("#echoSelectionRootKeys").text(selRootKeys.join(", "));
    			$("#echoSelectionRoots").text(selRootNodes.join(", "));
    		},
    		onDblClick: function(node, event) {
    			node.toggleSelect();
    		},
    		onKeydown: function(node, event) {
    			if( event.which == 32 ) {
    				node.toggleSelect();
    				return false;
    			}
    		},
    		cookieId: "dtree-Cb",
    		idPrefix: "dtree-Cb-"
    	});

        
    }).error(function(data){Console.log("ERROR GETTING DATA")});

  

}]);

gxMainApp.controller('treedata2', ['$scope', '$http',                             
                                  function ($scope, $http) {
                              	
                              	  $http.get('http://localhost:8000/models/tree/todo.json').success(function(data) {
                                    $scope.data = data.featureDTO;
                                    console.log(data);
                                       
                                    $("#gxtree").dtree({
                                  		checkbox: true,
                                  		selectMode: 3,
                                  		subFeatureList: data.featureDTO,
                                  		onSelect: function(select, node) {
                                  			
                                  			var selKeys = $.map(node.tree.getSelectedNodes(), function(node){
                                  				return node.data.key;
                                  			});
                                  			$("#echoSelection").text(selKeys.join(", "));

                                  			
                                  			var selRootNodes = node.tree.getSelectedNodes(true);
                                  			var selRootKeys = $.map(selRootNodes, function(node){
                                  				return node.data.key;
                                  			});
                                  			$("#echoSelectionRootKeys").text(selRootKeys.join(", "));
                                  			$("#echoSelectionRoots").text(selRootNodes.join(", "));
                                  		},
                                  		onDblClick: function(node, event) {
                                  			node.toggleSelect();
                                  		},
                                  		onKeydown: function(node, event) {
                                  			if( event.which == 32 ) {
                                  				node.toggleSelect();
                                  				return false;
                                  			}
                                  		},
                                  		cookieId: "dtree-Cb",
                                  		idPrefix: "dtree-Cb-"
                                  	});

                                      
                                  }).error(function(data){Console.log("ERROR GETTING DATA")});

                                

                              }]);


gxMainApp.controller('treedata3', ['$scope', '$http',                             
                                  function ($scope, $http) {
                              	
                              	  $http.get('http://localhost:8000/models/tree/todo.json').success(function(data) {
                                    $scope.data = data.featureDTO;
                                    console.log(data);
                                       
                                    $("#gxtree").dtree({
                                  		checkbox: true,
                                  		selectMode: 3,
                                  		subFeatureList: data.featureDTO,
                                  		onSelect: function(select, node) {
                                  			
                                  			var selKeys = $.map(node.tree.getSelectedNodes(), function(node){
                                  				return node.data.key;
                                  			});
                                  			$("#echoSelection").text(selKeys.join(", "));

                                  			
                                  			var selRootNodes = node.tree.getSelectedNodes(true);
                                  			var selRootKeys = $.map(selRootNodes, function(node){
                                  				return node.data.key;
                                  			});
                                  			$("#echoSelectionRootKeys").text(selRootKeys.join(", "));
                                  			$("#echoSelectionRoots").text(selRootNodes.join(", "));
                                  		},
                                  		onDblClick: function(node, event) {
                                  			node.toggleSelect();
                                  		},
                                  		onKeydown: function(node, event) {
                                  			if( event.which == 32 ) {
                                  				node.toggleSelect();
                                  				return false;
                                  			}
                                  		},
                                  		cookieId: "dtree-Cb",
                                  		idPrefix: "dtree-Cb-"
                                  	});

                                      
                                  }).error(function(data){Console.log("ERROR GETTING DATA")});

                                

                              }]);

