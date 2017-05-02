angular.module('Basics', ["xeditable"])
    .controller('homeController', homeController);


homeController.$inject = ['basicsFactory', "$http"];

function homeController(basicsFactory, $http) {
    var home = this;
    home.newPrefFunction = {};
    home.newCertifications = {};
    home.newbasics = {};
    home.basics = {};
    home.basicsList = [];
    home.certificationsList = [];
    home.addbasics = {};
    home.BasicsItem = {};
    home.greeting = 'Welcome to the basics list!';
    home.user = {
        complete: false
    };
    home.user = "";
    home.basicInfo = {}; //latest addition




    $http.get('/api/userID')
        .then(function (res) {
            console.log("getUserID api :", res);
            home.getBasics(res.data); // get one
            //  home.BasicsItem = {};
            home.user = res.data;
            console.log("Loser: ", home.user);
            return home.user;


            console.log("Get attempt: ", user);
        })
        .catch(function (err) {
            //            console.log("getUserID error :", err);
        });



    home.addPrefFunction = function () {
        console.log("addPrefFunction", home.newPrefFunction);
        console.log("addPrefFunction user", home.user);
        home.newPrefFunction.userid = home.user;
        
        console.log("addPrefFunction basicInfo", home.newPrefFunction);
        
        basicsFactory.addPrefFunction(home.newPrefFunction)
            .then(function (returnData) {
                home.newPrefFunction = {
                    userid: home.user
                }
                console.log("addPrefFunction response from server: ", returnData);
                home.getBasics(); // get many

            }).catch(function (err) {
                console.log("addPrefFunction error: ", err);
            });

    }

    home.addCertifications = function () {
        console.log("addCertifications", home.newCertifications);
        console.log("addCertifications user", home.user);
        home.newCertifications.userid = home.user;
//        return;
        console.log("addCertifications basicInfo", home.newCertifications);
        
        basicsFactory.addCertifications(home.newCertifications)
            .then(function (returnData) {
                home.newCertifications = {
                    userid: home.user
                }
                console.log("addCertifications response from server: ", returnData);
                home.getBasics(); // get many

            }).catch(function (err) {
                console.log("addCertifications error: ", err);
            });

    }
    
    
    home.createBasics = function () {
        basicsFactory.createBasics(home.newBasics)
            .then(function (returnData) {
                console.log('Response from server : ', returnData)
                home.newBasics = {}; // reset the form
                home.getBasics();

                window.location.href = "/";
            }).catch(function (err) {
                console.log("create basics error", err);
            });
    }

    home.createUser = function () {
        basicsFactory.createUser(home.newUser)
            .then(function (returnData) {
                console.log('Response from server createUser in controller.home: ', returnData)
                home.newUser = {}; // reset the form
                // home.getBasics();

                window.location.href = "/";
            }).catch(function (err) {
                console.log("create user error", err);
            });
    }

    home.getBasics = function () {
        // console.log("Hit the GET function");
        basicsFactory.getBasics()
            .then(function (returnData) {
                //                 console.log("basics ",returnData.data);
                if (returnData.data !== undefined) {
                    // if array (has length), store in basicsList

                    home.basicsList = returnData.data;
                    //                    console.log("basicsList: ", returnData.data);
                    //                    console.log("Is this an array? ", Array.isArray(returnData.data))
                    //                    console.log(home.basicsList[0].preferred);
                    //                    home.dateCalc();

                    // return home.basicsList;
                } else {
                    // if not, store in basics
                    home.basicsList = [];
                }
            });

    }

    home.getCertifications = function () {
        console.log("Hit the GET Certifications function");
        basicsFactory.getCertifications()
            .then(function (returnData) {
                console.log("certifications ", returnData.data);
                if (returnData.data !== undefined) {
                    // if array (has length), store in basicsList

                    home.certificationsList = returnData.data;

                    //                    home.dateCalc();

                    // return home.basicsList;
                } else {
                    // if not, store in basics
                    home.certificationsList = [];
                }
            });

    }


    home.addBasics = function () {
        console.log("Hit addBasics", home.BasicsItem);
        basicsFactory.addBasics(home.BasicsItem)
            .then(function (returnData) {
                home.BasicsItem = {
                    userid: home.user
                }
                console.log("addBasics response from server: ", returnData);
                home.getBasics(); // get many

            }).catch(function (err) {
                console.log("addBasics error: ", err);
            });
    }

   
    angular.module('Basics')
        .run(function (editableOptions) {
            editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
        });
}
