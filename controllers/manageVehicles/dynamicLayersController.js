angular.module("gxMainApp").controller("DynamicLayersController", function($scope) {
            angular.extend($scope, {
                mapDynamicLayers: {
                    london: {
                        lat: 51.505,
                        lng: -0.09,
                        zoom: 8
                    },
                    markers: {
                        m1: {
                            lat: 51.505,
                            lng: -0.09
                        }
                    },
                    layers: {
                        baselayers: {
                            osm: {
                                name: 'OpenStreetMap',
                                type: 'xyz',
                                url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                                layerOptions: {
                                    subdomains: ['a', 'b', 'c'],
                                    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                                    continuousWorld: true
                                }
                            },
                            cycle: {
                                name: 'OpenCycleMap',
                                type: 'xyz',
                                url: 'http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png',
                                layerOptions: {
                                    subdomains: ['a', 'b', 'c'],
                                    attribution: '&copy; <a href="http://www.opencyclemap.org/copyright">OpenCycleMap</a> contributors - &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                                    continuousWorld: true
                                }
                            }
                        }
                    }
                },
                removeOsmLayer: function() {
                    delete this.mapDynamicLayers.layers.baselayers.osm;
                },
                addOsmLayer: function() {
                    this.mapDynamicLayers.layers.baselayers.osm = {
                        name: 'OpenStreetMap',
                        type: 'xyz',
                        url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                        layerOptions: {
                            subdomains: ['a', 'b', 'c'],
                            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                            continuousWorld: true
                        }
                    };
                },
                existsOsmLayer: function() {
                    return ('osm' in this.mapDynamicLayers.layers.baselayers);
                }
            });
        });