angular.module('Basics', ["xeditable"])
    .controller('homeController', homeController);


homeController.$inject = ['basicsFactory', "$http"];

function homeController(basicsFactory, $http) {
    var home = this;
    home.infoType = ''; //keep
    home.infoStr = ''; //keep
    home.newBasicInfo = {}; //keep
    home.newCompetencies = {}; //keep
    home.competenciesList = []; //keep   
    home.basicsList = [];
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
            home.getCompetencies(res.data); // get one
            //  home.BasicsItem = {};
            home.user = res.data;
            console.log("Loser: ", home.user);
            return home.user;


            console.log("Get attempt: ", user);
        })
        .catch(function (err) {
            //            console.log("getUserID error :", err);
        });

    home.addBasicInfo = function (infoType, infoStr) {

        home.newBasicInfo.infoType = infoType;
        home.newBasicInfo.infoStr = infoStr;
        home.newBasicInfo.userid = home.user;

        console.log('newBasicInfo: ', home.newBasicInfo);

        basicsFactory.addBasicInfo(home.newBasicInfo) //need to create basicsFactory
            .then(function (returnData) {
                console.log("addBasicInfo response from server: ", returnData);

            }).catch(function (err) {
                console.log("addBasicInfo error: ", err);
            });
        home.getBasics();
    }

    home.addCompetencies = function (infoType, infoStr) {

        //        home.newCompetencies.infoType = infoType;
        home.newCompetencies.competencies = infoStr;
        home.newCompetencies.userid = home.user;

        console.log('home.newCompetencies: ', home.newCompetencies);

        basicsFactory.addCompetencies(home.newCompetencies)
            .then(function (returnData) {
                console.log("addCompetencies response from server: ", returnData);

            }).catch(function (err) {
                console.log("addCompetencies error: ", err);
            });
        home.getCompetencies();
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
        console.log("Hit the GET function");
        basicsFactory.getBasics()
            .then(function (returnData) {

                if (returnData.data !== undefined) {

                    home.basicsList = returnData.data;
                    console.log("basicsList: ", home.basicsList);

                } else {

                    home.basicsList = [];
                }
            });

    }

    home.getCompetencies = function () {
        console.log("Hit the getCompetencies function");
        basicsFactory.getCompetencies()
            .then(function (returnData) {

                if (returnData.data !== undefined) {

                    home.competenciesList = returnData.data;
                    console.log("home.competenciesList: ", returnData.data);

                } else {

                    console.log('getCompetencies else', returnData.data);
                    home.competenciesList = [];
                }
            });

    }


    angular.module('Basics')
        .run(function (editableOptions) {
            editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
        });
}
