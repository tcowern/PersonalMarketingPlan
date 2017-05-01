var User = require('../models/userModel'),
    bcrypt = require('bcryptjs'),
    SALT_INDEX = 10;    // the larger this value is, the stronger the encryption,
                        // but the longer it will take to compare hashes

module.exports = {

    reset: ( req, res ) => { // POST login
        console.info('RESET::POST::PAYLOAD::', req.body);

        User.findOne({
            email: req.body.email
        }, (err, user) => {
            if( err ) { // this will trigger the error .then callback on the frontend
                console.error('MongoDB error:', err);
                res.status(500).json(err);
            }
            if( !user ) {
                console.warn('No user found!');
                res.status(403).json({ message: 'Invalid username or password' });
            } else {
                console.info('User matched');

                bcrypt.compare(req.body.passwordreset, user.passwordreset, (compareErr, matched) => {
                    if( compareErr ) { // this will trigger the error .then callback on the frontend
                        console.error('compareErr error:', compareErr);
                        res.status(500).json({ message: 'Invalid username or secret key' });
                    } else if( !matched ) {
                        console.warn('Password Reset mismatch!');
                        res.status(403).json({ message: 'Invalid username or secret key' });
                    } else {
                        req.session.userId = user._id;
                        console.log("Email and secret key matched");
                        // res.redirect('html/newpassword.html');
                        res.send({ message: 'Email and secret key success!', userId : req.session.userId });
                        
                    }
                })
            }

        })
    },

    newpass (req, res) {
        console.log("newpass req.body",req.body);

        //generate a salt value to encrypt our password
        bcrypt.genSalt(SALT_INDEX, (saltErr, salt) =>{
        if( saltErr ) {
            console.error(saltErr);
            return next(saltErr);
        }
        console.info('SALT GENERATED', salt);
        

        // hashing the password
            bcrypt.hash(req.body.password, salt, (hashErr, hashedPassword) => {
                if( hashErr ) {
                    console.error(hashErr);
                    return next(hashErr);
                }
                // override the plain text password with the hashed one.
                
                
                newpassword = req.body.password;
        //         console.log("New passwrd hash in userModel: " + user.password);
        //         next();
            });

            User.findOneAndUpdate({email : req.body.email}, {password: newpassword}, {new: false}, (err, document)=>{
                // res.send(err || documents)
                if(err){
                    res.send(err);
                } else {
                    console.log("Newpassword update: ",document);
                    res.send(document);
                }
            });

        });
    }
}


