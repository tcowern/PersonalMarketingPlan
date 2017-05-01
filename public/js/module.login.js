angular.module('module.login',[])
    .controller('controller.login',['$http', function($http) {
        var login = this;
        
        
        document.getElementsByClassName('loginError')[0].innerHTML = "";
        // login.newBucket = {};
        login.basicsFactory

        login.submit = function() {
            console.log('Module.login.js: ', login);

            $http({
                method: 'POST',
                url: '/login',
                data: {
                    email: login.email,
                    password: login.password
                }
            }).then(function(res) {
                console.info("login response: "+ res.data + ' and now should be heading to index.html');
               
                location.href = './';
            }, function(err) {
                // DO NOT FORGET!!!! an error callback
                // when things go bad, you need this!!!!!!!!
                
                if (err.status === 403) {
//                    console.log('Hit the error');
                    document.getElementsByClassName('loginError')[0].innerHTML = "You have entered an incorrect email or password.  Please try again";
                }
                
                console.error('Message from server side; ',err);
            });
        }
    }]);
