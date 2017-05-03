angular.module('Basics')
    .factory('basicsFactory', basicsFactory);

basicsFactory.$inject = ['$http'];

function basicsFactory($http) {

    return {

        getBasics: function (basicsID) {
            // console.log("Hit the getBasics in factory");
            basicsID = basicsID ? '/' + basicsID : ''
            console.log('basicsID in the factory: ' + basicsID);
            return $http.get('/api/basics' + basicsID)
        },
        
        getCompetencies: function (basicsID) {
            // console.log("Hit the getBasics in factory");
            basicsID = basicsID ? '/' + basicsID : ''
            return $http.get('/api/competencies/' + basicsID)
        },

        addBasicInfo: function (basicInfo) {
            console.log("factory.addBasicInfo: ", basicInfo);
            return $http.post('/api/basics', basicInfo)
        },

        addCompetencies: function (Competencies) {
            console.log("factory.Competencies: ", Competencies);
            return $http.post('/api/basics/addCompetencies', Competencies)
        },

        addCertifications: function (newCertifications) {
            console.log("Factory newCertifications: ", newCertifications);
            return $http.post('/api/basics', newCertifications);
        },

        createUser: function (userData) {
            console.log("Hit the creatUser function in factory.basicss.js: " + userData);
            return $http.post('/register', userData);
        }
    }
}
