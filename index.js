angular.module('minecraft', [])
    .controller('MinecraftController', function ($scope,$http) {
        var self = this;

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

            var userList = Restangular.all('users').getList()
        }

        this.loadUserDetail = function (username) {
            username = username.replace('[AFK]', '')
            var userList = Restangular.all('users').getList()
            var userDetail = Restangular.one('users', username).get()
        }


        this.HP = function (username) {
            var userList = Restangular.all('users').getList()
            var userDetail = Restangular.one('users', username).get()
            var userDoheal = Restangular.one('users', username).one('do', 'heal').patch()
        }

        this.Feed = function (username) {
            var userList = Restangular.all('users').getList()
            var userDetail = Restangular.one('users', username).get()
            var userDoheal = Restangular.one('users', username).one('do', 'feed').patch()
        }

        this.Fly = function (username) {
            var userList = Restangular.all('users').getList()
            var userDetail = Restangular.one('users', username).get()
            var usertofly = Restangular.one('users', username).one('toggle_fly').post()
        }

        this.God = function (username) {
            var userList = Restangular.all('users').getList()
            var userDetail = Restangular.one('users', username).get()
            var usertogod = Restangular.one('users', username).one('toggle_god').post()
        }
        this.Burn = function (username, num) {

            firstAccount.getList("burn", {"burn": num}).then(function (users) {
                // Instead of posting nested element, a collection can post to itself
                // POST /accounts/123/users
                users.patch({"burn": num});

            })
        }

        this.Exp = function (username, num) {
            firstAccount.getList("users", {"exp": num}).then(function (users) {
                // Instead of posting nested element, a collection can post to itself
                // POST /accounts/123/users
                users.patch({"exp": num});

            })
        }

        this.Op = function (username, num) {
            firstAccount.getList("users", {"op": num}).then(function (users) {
                // Instead of posting nested element, a collection can post to itself
                // POST /accounts/123/users
                users.patch({"op": num});

            })
        }


        this.Mod = function (username, num) {
            firstAccount.getList("users", {"gamemode": num}).then(function (users) {
                // Instead of posting nested element, a collection can post to itself
                // POST /accounts/123/users
                users.patch({'gamemode': num});

            })

        }



    })

