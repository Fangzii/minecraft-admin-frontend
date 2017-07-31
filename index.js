angular.module('minecraft', ['ngMaterial'])
    .controller('MinecraftController', function ($scope,$http, $timeout, $mdSidenav) {
        var self = this;
        $scope.toggleLeft = buildToggler('left');
        $scope.toggleRight = buildToggler('right');

        function buildToggler(componentId) {
            return function() {
                $mdSidenav(componentId).toggle();
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

