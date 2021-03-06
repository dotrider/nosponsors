const bcrypt = require('bcrypt');

module.exports = {
    login: async (req, res, next) => {
        const db = req.app.get('db');
        //expecting and email and password from axios
        const {email, password} = req.body

        const foundUser = await db.select_user(email).catch(err => {
            console.log(err);
        });
            if(!foundUser.length){
                res.status(401).send(`Looks like that user doesn't exist!`)
            }else {
                const matchPassword = await bcrypt.compare(password, foundUser[0].password)
                .catch(err => console.log(err));
                
               if(matchPassword){
                   req.session.user = {
                       username: foundUser[0].username,
                       user_id: foundUser[0].user_id
                   };
                   res.status(200).send(req.session.user);
               }else {
                   res.status(401).send(`Incorrect email or password`)
               } 
        }
    },

    register: async (req, res, next) => {
        const db = req.app.get('db');
        const {username, password, email, profile_pic} = req.body

        const foundUser = await db.select_user(email).catch(err => {
            console.log(err);
        });
            if(foundUser.length){
                res.status(409).send(`User already exist, Please use another email`)
            }else{
                const saltRounds = 12;
                bcrypt.genSalt(saltRounds).then( salt => {
                    bcrypt.hash(password, salt).then(hashedPassword => {
                        db.create_user([username, hashedPassword, email, profile_pic]).then(([user]) => {
                            req.session.user = user;
                            res.status(200).send(req.session.user)
                        })
                    })
                })
            }
    },

    logout: (req, res, next) => {
        req.session.destroy();
        res.sendStatus(200);
    },

    userSession: (req, res, next) => {
        console.log('session', req.session.user)
        if(req.session.user){
            res.status(200).send(req.session.user)
        }else{
            res.sendStatus(404)
        }
    }
}


// const salt = bcrypt.genSaltSync(12)
// const hash = bcrypt.hash(password, salt)

// const newUser = await db.create_user([username, hash, email])
// req.session.user = newUser[0]

// res.status(201).send(req.session.user)