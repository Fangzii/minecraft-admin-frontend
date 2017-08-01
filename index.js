angular.module('minecraft', ['ngMaterial'])
    .controller('MinecraftController', function ($scope,$http, $timeout, $mdSidenav,$mdDialog,$log) {
        var self = this;
        $scope.toggleLeft2 = buildDelayedToggler('left');
        $scope.toggleRight2 = buildToggler('right');
        $scope.isOpenRight = function(){
            return $mdSidenav('right').isOpen();
        };
        $scope.toggleLeft = buildToggler('left');
        $scope.toggleRight = buildToggler('right');
        $scope.openDialog = function(ev) {
            $mdDialog.show(
                $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#popupContainer')))
                    .clickOutsideToClose(false)
                    .title('功能未完成')
                    .textContent('<input type="text" ng-model="">')
                    .ariaLabel('Alert Dialog Demo')
                    .ok('确定')
                    .targetEvent(ev)
            )
        }

        function buildToggler(componentId) {
            return function() {
                $mdSidenav(componentId).toggle();
            };
        }

        function debounce(func, wait, context) {
            var timer;

            return function debounced() {
                var context = $scope,
                    args = Array.prototype.slice.call(arguments);
                $timeout.cancel(timer);
                timer = $timeout(function() {
                    timer = undefined;
                    func.apply(context, args);
                }, wait || 10);
            };
        }
        function buildDelayedToggler(navID) {
            return debounce(function() {
                // Component lookup should always be available since we are not using `ng-if`
                $mdSidenav(navID)
                    .toggle()
                    .then(function () {
                        $log.debug("toggle " + navID + " is done");
                    });
            }, 200);
        }

        function buildToggler(navID) {
            return function() {
                // Component lookup should always be available since we are not using `ng-if`
                $mdSidenav(navID)
                    .toggle()
                    .then(function () {
                        $log.debug("toggle " + navID + " is done");
                    });
            };
        }




        $scope.pages = ["1", "2", "3", "4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"];
        $scope.searchText = '';
        var page;
        $scope.open=false;
        $scope.open=!$scope.poen;

        this.commands = [{
            command: '/list',
            description: '列出当前用户'
        },
            {
                command: '/user',
                description: '列出当前用户'
            }
        ]
        this.loadCommands = function (start, count) {

            $http({
                method: 'GET',
                url: 'http://nas.fangs.work:25585/commands?start=' + start + '&count=' + count
            }).then(function successCallback(response) { /**/
                // this callback will be called asynchronously
                // when the response is available
                self.Commanddata = response.data
                console.log(self.Commanddata)
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            })
        };


        this.loadUsers = function () {

            $http({
                method: 'GET',
                url: 'http://nas.fangs.work:25585/users'
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                self.users = response.data
                console.log(self.users)
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        }

        this.loadUserDetail = function (username) {
            username = username.replace('[AFK]', '')
            $http({
                method: 'GET',
                url: 'http://nas.fangs.work:25585/users/'+username
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                self.currentUserDetail = response.data
                console.log(self.username)
                this.self.currentUserDetail



            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        }


        this.HP = function (username) {
            $http({
                method: 'patch',
                url: 'http://nas.fangs.work:25585/users/'+username+'/do/heal'
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                self.currentUserDetail = response.data




            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        }

        this.Feed= function (username) {
            $http({
                method: 'patch',
                url: 'http://nas.fangs.work:25585/users/'+username+'/do/feed'
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                self.currentUserDetail = response.data




            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        }

        this.Fly= function (username) {
            $http({
                method: 'post',
                url: 'http://nas.fangs.work:25585/users/'+username+'/toggle_fly'
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                self.currentUserDetail = response.data




            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        }

        this.God= function (username) {
            $http({
                method: 'post',
                url: 'http://nas.fangs.work:25585/users/'+username+'/toggle_god'
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                self.currentUserDetail = response.data




            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        }
        this.Burn= function (username,burntime) {
            $http({
                method: 'patch',
                url: 'http://nas.fangs.work:25585/users/'+username+'/do/burn',
                data: {
                    "burn": burntime
                },
                header: {
                    'content-type': 'application/json'
                }
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                self.currentUserDetail = response.data
                console.log(self.Burn)




            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        }

        this.Exp= function (username,num) {
            $http({
                method: 'patch',
                url: 'http://nas.fangs.work:25585/users/'+username,
                data: {
                    "exp":num
                },
                header: {
                    'content-type': 'application/json'
                }
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available




            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        }

        this.Op= function (username,num) {
            $http({
                method: 'patch',
                url: 'http://nas.fangs.work:25585/users/'+username,
                data: {
                    "op":num
                },
                header: {
                    'content-type': 'application/json'
                }
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available




            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        }

        this.openDialog = function($event) {
            $mdDialog.show({
                controller: DialogCtrl,
                controllerAs: 'ctrl',
                templateUrl: 'head.html',
                parent: angular.element(document.body),
                targetEvent: $event,
                clickOutsideToClose:true
            })
        }

        this.Mod= function (username,num) {
            $http({
                method: 'patch',
                url: 'http://nas.fangs.work:25585/users/'+username,
                data: {
                    "gamemode":num
                },
                header: {
                    'content-type': 'application/json'
                }
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available




            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        }
    })

    .controller('SwitchDemoCtrl', function($scope) {
        $scope.data = {
            cb1: true,
            cb4: true,
            cb5: false
        };

        $scope.message = 'false';

        $scope.onChange = function (cbState) {
            $scope.message = cbState;
        }
    })

    .controller('DemoCtrl', function() {
        this.topDirections = ['left', 'up'];
        this.bottomDirections = ['down', 'right'];

        this.isOpen = false;

        this.availableModes = ['md-fling', 'md-scale'];
        this.selectedMode = 'md-scale';

        this.availableDirections = ['up', 'down', 'left', 'right'];
        this.selectedDirection = 'left';
    })

    .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
        $scope.close = function () {
            // Component lookup should always be available since we are not using `ng-if`
            $mdSidenav('left').close()
                .then(function () {
                    $log.debug("close LEFT is done");
                });

        };
    })
    .controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
        $scope.close = function () {
            // Component lookup should always be available since we are not using `ng-if`
            $mdSidenav('right').close()
                .then(function () {
                    $log.debug("close RIGHT is done");
                });
        };
    });