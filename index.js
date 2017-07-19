angular.module('minecraft', [])
    .controller('MinecraftController', function ($http) {
        var self = this;

        this.commands = [{
                command: '/list',
                description: '列出当前用户'
            },
            {
                command: '/user',
                description: '列出当前用户'
            }
        ]


        this.loadCommands = function () {
            $http({
                method: 'GET',
                url: 'http://nas.fangs.work:25585/commands'
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
        this.loadCommands2 = function ( ) {
            $http({
                method: 'GET',
                url: 'http://nas.fangs.work:25585/commands?start=20&count=20'
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
        this.loadCommands3 = function ( ) {
            $http({
                method: 'GET',
                url: 'http://nas.fangs.work:25585/commands?start=40&count=20'
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
        this.loadCommands4 = function ( ) {
            $http({
                method: 'GET',
                url: 'http://nas.fangs.work:25585/commands?start=60&count=20'
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
        this.loadCommands5 = function ( ) {
            $http({
                method: 'GET',
                url: 'http://nas.fangs.work:25585/commands?start=80&count=20'
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
        this.loadCommands6 = function ( ) {
            $http({
                method: 'GET',
                url: 'http://nas.fangs.work:25585/commands?start=100&count=20'
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
        this.loadCommands7 = function ( ) {
            $http({
                method: 'GET',
                url: 'http://nas.fangs.work:25585/commands?start=120&count=20'
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
        this.loadCommands8 = function ( ) {
            $http({
                method: 'GET',
                url: 'http://nas.fangs.work:25585/commands?start=140&count=20'
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
        this.loadCommands9 = function ( ) {
            $http({
                method: 'GET',
                url: 'http://nas.fangs.work:25585/commands?start=160&count=20'
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
        this.loadCommands10 = function ( ) {
            $http({
                method: 'GET',
                url: 'http://nas.fangs.work:25585/commands?start=180&count=20'
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
        this.loadCommands15 = function () {
            $http({
                method: 'GET',
                url: 'http://nas.fangs.work:25585/commands?start=0&count=15'
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
        this.loadCommands215 = function ( ) {
            $http({
                method: 'GET',
                url: 'http://nas.fangs.work:25585/commands?start=15&count=15'
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
        this.loadCommands315 = function ( ) {
            $http({
                method: 'GET',
                url: 'http://nas.fangs.work:25585/commands?start=30&count=15'
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
        this.loadCommands415 = function ( ) {
            $http({
                method: 'GET',
                url: 'http://nas.fangs.work:25585/commands?start=45&count=15'
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
        this.loadCommands515 = function ( ) {
            $http({
                method: 'GET',
                url: 'http://nas.fangs.work:25585/commands?start=60&count=15'
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
        this.loadCommands615 = function ( ) {
            $http({
                method: 'GET',
                url: 'http://nas.fangs.work:25585/commands?start=75&count=15'
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
        this.loadCommands715 = function ( ) {
            $http({
                method: 'GET',
                url: 'http://nas.fangs.work:25585/commands?start=90&count=15'
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
        this.loadCommands815 = function ( ) {
            $http({
                method: 'GET',
                url: 'http://nas.fangs.work:25585/commands?start=105&count=15'
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
        this.loadCommands915 = function ( ) {
            $http({
                method: 'GET',
                url: 'http://nas.fangs.work:25585/commands?start=120&count=15'
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
        this.loadCommands1015 = function ( ) {
            $http({
                method: 'GET',
                url: 'http://nas.fangs.work:25585/commands?start=135&count=15'
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
        this.loadCommands1115 = function ( ) {
            $http({
                method: 'GET',
                url: 'http://nas.fangs.work:25585/commands?start=150&count=15'
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
        this.loadCommands1215 = function ( ) {
            $http({
                method: 'GET',
                url: 'http://nas.fangs.work:25585/commands?start=175&count=15'
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
        this.loadCommands1315 = function ( ) {
            $http({
                method: 'GET',
                url: 'http://nas.fangs.work:25585/commands?start=190&count=15'
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
        this.loadCommands110 = function ( ) {
            $http({
                method: 'GET',
                url: 'http://nas.fangs.work:25585/commands?start=0&count=10'
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
        this.loadCommands210 = function ( ) {
            $http({
                method: 'GET',
                url: 'http://nas.fangs.work:25585/commands?start=10&count=10'
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
        this.loadCommands310 = function ( ) {
            $http({
                method: 'GET',
                url: 'http://nas.fangs.work:25585/commands?start=30&count=10'
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
        this.loadCommands410 = function ( ) {
            $http({
                method: 'GET',
                url: 'http://nas.fangs.work:25585/commands?start=40&count=10'
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
        this.loadCommands510 = function ( ) {
            $http({
                method: 'GET',
                url: 'http://nas.fangs.work:25585/commands?start=50&count=10'
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
        this.loadCommands610 = function ( ) {
            $http({
                method: 'GET',
                url: 'http://nas.fangs.work:25585/commands?start=60&count=10'
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
        this.loadCommands710 = function ( ) {
            $http({
                method: 'GET',
                url: 'http://nas.fangs.work:25585/commands?start=70&count=10'
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
        this.loadCommands810 = function ( ) {
            $http({
                method: 'GET',
                url: 'http://nas.fangs.work:25585/commands?start=80&count=10'
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
        this.loadCommands910 = function ( ) {
            $http({
                method: 'GET',
                url: 'http://nas.fangs.work:25585/commands?start=90&count=10'
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
        this.loadCommands1010 = function ( ) {
            $http({
                method: 'GET',
                url: 'http://nas.fangs.work:25585/commands?start=100&count=10'
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
        this.loadCommands1110 = function ( ) {
            $http({
                method: 'GET',
                url: 'http://nas.fangs.work:25585/commands?start=110&count=10'
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
        this.loadCommands1210 = function ( ) {
            $http({
                method: 'GET',
                url: 'http://nas.fangs.work:25585/commands?start=120&count=10'
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
        this.loadCommands1310 = function ( ) {
            $http({
                method: 'GET',
                url: 'http://nas.fangs.work:25585/commands?start=130&count=10'
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
        this.loadCommands1410 = function ( ) {
            $http({
                method: 'GET',
                url: 'http://nas.fangs.work:25585/commands?start=140&count=10'
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
        this.loadCommands1510 = function ( ) {
            $http({
                method: 'GET',
                url: 'http://nas.fangs.work:25585/commands?start=150&count=10'
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
        this.loadCommands1610 = function ( ) {
            $http({
                method: 'GET',
                url: 'http://nas.fangs.work:25585/commands?start=160&count=10'
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
        this.loadCommands1710 = function ( ) {
            $http({
                method: 'GET',
                url: 'http://nas.fangs.work:25585/commands?start=170&count=10'
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
        this.loadCommands1810 = function ( ) {
            $http({
                method: 'GET',
                url: 'http://nas.fangs.work:25585/commands?start=180&count=10'
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
        this.loadCommands1910 = function ( ) {
            $http({
                method: 'GET',
                url: 'http://nas.fangs.work:25585/commands?start=190&count=10'
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
                url: 'http://nas.fangs.work:25585/users/' + username
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


    })


