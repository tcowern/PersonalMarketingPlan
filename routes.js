var Basics = require('./controllers/basics'),
    Auth = require('./controllers/auth'),
    Reset = require('./controllers/reset'),
    express = require('express');

module.exports = (app) => {

    app.get('/', Auth.middlewares.session);

    app.get('/', (req, res) => {
        res.sendFile('index.html', {
            root: './public/html'
        })
    });

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

    app.post('/api/basics', Basics.addBasicInfo);
    app.get('/api/basics', Basics.get);
    
    app.post('/api/basics', Basics.addCompetencies);

}