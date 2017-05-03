var Basics = require('./controllers/basics'),
    Auth = require('./controllers/auth'),
    Reset = require('./controllers/reset'),
    //Task = require('./controllers/task'),
    express = require('express');


module.exports = (app) => {

    app.get('/', Auth.middlewares.session);

    app.get('/', (req, res) => {
        res.sendFile('index.html', {
            root: './public/html'
        })
    });

    // app.get('/', Auth.middlewares.session);

//    app.get('/certifications', (req, res) => {
//        console.log('Hit get certifications in routes');
//        res.sendFile('certifications.html', {
//            root: './public/html'
//        })
//    });

    app.get('/datebasics', (req, res) => {
        res.sendFile('datebasics.html', {
            root: './public/html'
        })
    });

    app.get('/addtasks', (req, res) => {
        res.sendFile('addtasks.html', {
            root: './public/html'
        })
    });

    app.get('/basicslist', (req, res) => {
        res.sendFile('basicslisttable.html', {
            root: './public/html'
        })
    });


    app.all('/api*', Auth.middlewares.session);

    app.get('/logout', Auth.logout);
    app.post('/login', Auth.login);
    app.post('/reset', Reset.reset);
    app.post('/newpass', Reset.newpass);

    app.post('/register', Auth.register);



    app.get('/api/userId', Basics.getUserID);


    app.put('/api/basicscomp', Basics.basicsComp);
    //    app.put('/api/taskcomp', Task.taskComp);
    app.put('/api/basicsedit', Basics.put);
    app.put('/api/basicsgroup', Basics.basicsGroup);

//    app.post('/api/basics', function (req, res) {
//        console.log('Hit routes for addPrefFunction');
//        Basics.addPrefFunction;
//    });
    app.post('/api/basics', Basics.addPrefFunction);
    app.post('/api/basics', Basics.addCertifications);
    app.get('/api/basics', Basics.get);
    app.get('/api/basics/:id', Basics.get);
    app.post('/api/basics', Basics.addBasics);

    //    app.post('/api/task', Task.addTask);
    //    app.get('/api/task', Task.getAll);
    //    app.get('/api/task', Task.get);
    //    app.get('/api/task/:id', Task.get);



    //     app.get('/', (req, res)=>{
    //     res.sendFile('index.html', {root : './public/html'})
    // });
    // app.use(express.static('public'));



}
