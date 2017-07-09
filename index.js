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
                url: 'http://192.168.1.100:25585/commands'
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
                url: 'http://192.168.1.100:25585/users'
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                self.users = response.data
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        }
        
        this.loadUserDetail = function (username) {
            username = username.replace('[AFK]', '')
            $http({
                method: 'GET',
                url: 'http://192.168.1.100:25585/users/' + username
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                self.currentUserDetail = response.data
                console.log(self.username)
            

            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        }


    })