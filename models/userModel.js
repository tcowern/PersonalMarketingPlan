var mongoose = require('mongoose'),
    bcrypt = require('bcryptjs'),
    SALT_INDEX = 10,    // the larger this value is, the stronger the encryption,
                        // but the longer it will take to compare hashes
    userSchema = new mongoose.Schema({
        username: {
            type: String,
            unique: true,
        },
        email: {
            type: String,
            unique: true
        },
        firstname: String,
        lastname: String,
        linkedin: String,
        phone: String,
        password: String,
        created: {
            type: Number,
            default: () => Date.now()
        },
        passwordreset: String
    });



userSchema.pre('save', function(next) {
    var user = this; // new User(req.body);

    // user.email = user.email.toLowerCase();

    // only hash the password if modified or a new user
    if( !user.isModified('password') ) {
        return next();
    }

    // generate a salt value to encrypt our password
    bcrypt.genSalt(SALT_INDEX, (saltErr, salt) =>{
        if( saltErr ) {
            console.error(saltErr);
            return next(saltErr);
        }
        console.info('SALT PASSWORD GENERATED', salt);

        // hashing the password
        bcrypt.hash(user.password, salt, (hashErr, hashedPassword) => {
            if( hashErr ) {
                console.error(hashErr);
                return next(hashErr);
            }
            // override the plain text password with the hashed one.
            
            console.log("User password pre hashing: " + user.password);
            user.password = hashedPassword;
            console.log("User password post hashing: " + user.password);
            next();
        });
        
    });

        // generate a salt value to encrypt our password reset
    bcrypt.genSalt(SALT_INDEX, (saltErr, salt) =>{
        if( saltErr ) {
            console.error(saltErr);
            return next(saltErr);
        }
        console.info('SALT RESET GENERATED', salt);

        bcrypt.hash(user.passwordreset, salt, (hashErr, hashedPasswordReset) => {
            if( hashErr ) {
                console.error(hashErr);
                return next(hashErr);
            }
            // override the plain text password with the hashed one.
            console.log("User PasswordReset pre hashing: " + user.passwordreset);
            
            user.passwordreset = hashedPasswordReset;

            console.log("User PasswordReset Post Hashing: " + hashedPasswordReset);
            next();
        });

        
    });

    
});

module.exports = mongoose.model('User', userSchema);
