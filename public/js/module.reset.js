angular.module('module.reset',[])
    .controller('controller.reset',['$http', function($http) {
        var reset = this;


        reset.submit = function() {
            console.log("Reset" + reset);

            $http({
                method: 'POST',
                url: '/reset',
                data: {
                    email: reset.email,
                    passwordreset: reset.passwordreset
                }
            }).then(function(res) {
                console.info("Resetresponse: ",res.data);

                userEmail = res.data.userId;

                location.href = '/html/newpassword.html';
            }, function(err) {
                // DO NOT FORGET!!!! an error callback
                
                // when things go bad, you need this!!!!!!!!
                if (err.data == null) {
                    console.log("err: ", err);
                    document.getElementById("resetMessage").innerHTML = "Communications Error, Please Try Again Later";
                    
                } else {
                
                    console.error(err);
                    console.log("Reason: " + err.data.message);
                    document.getElementById("resetMessage").innerHTML = err.data.message;
                
            }
            });
        }

        reset.newpassword = function() {
            console.log("Newpassword: " + reset.email + ", " + reset.newpass);
                
                $http({
                method: 'POST',
                url: '/newpass',
                data: {
                    email: reset.email,
                    password: reset.newpass
                }
            
        }).then(function(res) {
                console.info("new password response: ",res.data);

                userEmail = res.data._id;

                console.log("UserID: " + userEmail);

                location.href = '/html/login.html';
            }, function(err) {
                // DO NOT FORGET!!!! an error callback
                
                // when things go bad, you need this!!!!!!!!
                if (err.data == null) {
                    console.log("err: ", err);
                    document.getElementById("resetMessage").innerHTML = "Communications Error, Please Try Again Later";
                    
                } else {
                
                    console.error(err);
                    console.log("Reason: " + err.data.message);
                    document.getElementById("resetMessage").innerHTML = err.data.message;
                
            }
            });
    



}
    }]);
