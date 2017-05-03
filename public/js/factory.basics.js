angular.module('Basics')
    .factory('basicsFactory', basicsFactory);



basicsFactory.$inject = ['$http'];

function basicsFactory($http) {


    return {

        // createBasics : function(basicsData){
        //     return $http.post('/register', basicsData)
        // },

        getBasics: function (basicsID) {
            // console.log("Hit the getBasics in factory");
            basicsID = basicsID ? '/' + basicsID : ''
            return $http.get('/api/basics' + basicsID)
        },

        addBasicInfo: function (basicInfo) {
             console.log("factory.addBasicInfo: ", basicInfo);
            return $http.post('/api/basics', basicInfo)
        },    
        
//        getCertifications: function (basicsID) {
//            // console.log("Hit the getBasics in factory");
//            basicsID = basicsID ? '/' + basicsID : ''
//            return $http.get('/api/basics' + basicsID)
//        },
//
//        addPrefFunction: function (newPrefFunction) {
//            console.log("Factory newPrefFunction: ", newPrefFunction);
//            return $http.post('/api/basics', newPrefFunction);
//        },

        addCertifications: function (newCertifications) {
            console.log("Factory newCertifications: ", newCertifications);
            return $http.post('/api/basics', newCertifications);
        },

        addBasics: function (basicsItem) {
            return $http.post('/api/basics', basicsItem);
        },

        createUser: function (userData) {
            console.log("Hit the creatUser function in factory.basicss.js: " + userData);
            return $http.post('/register', userData);
        },

        //        addTask: function (taskItem) {
        //            return $http.post('/api/task', taskItem);
        //        },
        //
        //        getTask: function (basicsid) {
        //            console.log("Hit the getTask in factory", basicsid);
        //            // basicsid = basicsid ? '/' + basicsid : ''
        //            return $http.get('/api/task/' + basicsid)
        //        },
        //
        //        getAllTasks: function () {
        //            // console.log("Hit the getAllTasks in factory");
        //            // basicsid = basicsid ? '/' + basicsid : ''
        //            return $http.get('/api/task/')
        //        },

        dateBasics: function (dateItem, dateDate) {
            // dateItem = dateItem ? '/' + dateItem : ''
            var data = {
                basicsid: dateItem,
                basicsdate: dateDate
            };
            return $http.put('/api/basicsedit/', data);
        },

        compBasics: function (basicsId, basicsComp) {
            // dateItem = dateItem ? '/' + dateItem : ''
            var data = {
                basicsid: basicsId,
                basicscomp: basicsComp
            };
            return $http.put('/api/basicscomp/', data);
        },

        //        compTask: function (taskId, taskComp) {
        //            // dateItem = dateItem ? '/' + dateItem : ''
        //            var data = {
        //                taskid: taskId,
        //                taskcomp: taskComp
        //            };
        //            return $http.put('/api/taskcomp/', data);
        //        },

        groupBasics: function (basicsId, topGroup) {
            // dateItem = dateItem ? '/' + dateItem : ''
            var data = {
                basicsid: basicsId,
                topgroup: topGroup
            };
            return $http.put('/api/basicsgroup/', data);
        },

    }
}
