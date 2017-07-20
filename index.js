angular.module('minecraft', [])
    .controller('MinecraftController', function ($scope,$http) {
        var self = this;
        var page;

        this.commands = [{
                command: '/list',
                description: '列出当前用户'
            },
            {
                command: '/user',
                description: '列出当前用户'
            }
        ]

        this.page = function (page,total,count) {
            page=total/count
                document.write(page)
        }

            this.start = function (page,count) {
                alert("page*count");
       }


        this.loadCommands = function (start,count) {

            $http({
                method: 'GET',
                url: 'http://nas.fangs.work:25585/commands?start='+start+'&count='+count
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
            username = user.name.replace('[AFK]', '')
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


