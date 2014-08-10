

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', ["leaflet-directive"]);

phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http', 'leafletData',
  function($scope, $http, leafletData) {
    
	$http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
    });

    $scope.orderProp = 'name';

	//leaflet stuff
	var markers = new L.markerClusterGroup({zoomToBoundsOnClick: true});
	
	var drawnItems = new L.FeatureGroup(),
            options = { edit: { featureGroup: drawnItems } },
            drawControl = new L.Control.Draw(options);
				
	angular.extend($scope, {
        defaults: {
            scrollWheelZoom: true
        },
		controls: {
			custom: [ drawControl ]
		}
    });
	// control that shows state info on hover
	
	if($scope.mobileAssetMap === undefined){
		$scope.mobileAssetMap = {};
		console.log("made the asset map");
	}
	
	if($scope.leafletEvent === undefined){
		$scope.leafletEvent = {};
	}
	
	if($scope.leafletEventSource === undefined){
		$scope.leafletEventSource = new EventSource("http://10.234.31.214:3000/");
		console.log("subscribed to server sent event");
		
		$scope.leafletEventSource.addEventListener('message', function(event){
			$scope.leafletEvent = event;
			
			//try to parse the json object, if it is not JSON (error) just log the data.
			try{
				if($scope.mobileAssetMap[JSON.parse(event.data).eid] === undefined){
					
					var newMarker = L.marker([JSON.parse(event.data).lat, JSON.parse(event.data).lon]);
					$scope.mobileAssetMap[JSON.parse(event.data).eid] = newMarker;
					markers.addLayer(newMarker);
				}
				else{
					$scope.mobileAssetMap[JSON.parse(event.data).eid].setLatLng([JSON.parse(event.data).lat, JSON.parse(event.data).lon]);
				}
			}
			catch(err){
				console.log(event.data);
			}
			
		},false)
	}
	
	$scope.$watch('leafletEvent', function(){
		$scope.$apply;
	});
	
	
	var info = L.control();

	info.onAdd = function (map) {
		this._div = L.DomUtil.create('div', 'info');
		this.update();
		return this._div;
	};

	info.update = function (props) {
		this._div.innerHTML = '<h4>Point Info</h4>' +  (props ?
			'<b>' + props.name + '</b><br />' + props.details : 'Hover over a point');
	};

	function highlightFeature(e) {
		var layer = e.target;
		info.update(layer);
	}

	function resetHighlight(e) {
		info.update();
	}
	
	leafletData.getMap().then(function(map) {
		map.addLayer(drawnItems);
		map.addLayer(markers);

		info.addTo(map);
			map.on('draw:created', function (e) {
				var type = e.layerType,
					layer = e.layer;
					

				if (type === 'marker') {
					layer.name = "A Car, vroom vroom";
					layer.details = "1234";
					markers.addLayer(layer);
				}
				else
				{
					drawnItems.addLayer(layer);
					layer.name = "A Geo-Prison. Clink Clink.";
					layer.details = "Workzone A";
				}
				
				layer.on({
					mouseover: highlightFeature,
					mouseout: resetHighlight,
				});
			
			});
		});
	}]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
      $scope.phone = data;
	  
    });
  }]);
  

