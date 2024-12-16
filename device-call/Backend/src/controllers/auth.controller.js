const db = require('../models/modelindex');
const Auth = db.User
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
let refreshTokens = []
const refreshTokenSecret = process.env.REFRESH_TOKEN
const accessTokenSecret = process.env.ACCESS_TOKEN
const saltRounds = process.env.SALT_ROUNDS
const jwt_timeout = process.env.JWT_TIMEOUT


exports.authenticateJWT = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        const token = req.headers.token;
        req.accessToken = null;
        req.refreshToken = null;

        const newToken = () => {
            if (!token) {
                return res.sendStatus(401);
            }
            if (!refreshTokens.includes(token)) {
                return res.sendStatus(403);
            }
            jwt.verify(token, refreshTokenSecret, (err, user) => {
                if (err) {
                    return res.sendStatus(403);
                }
                refreshTokens = refreshTokens.filter(saved_token => saved_token !== token);
                const accessToken = jwt.sign({ username: user.name }, accessTokenSecret, { expiresIn: '20m' });
                const refreshToken = jwt.sign({ username: user.name }, refreshTokenSecret);
                refreshTokens.push(refreshToken);
                req.accessToken = accessToken;
                req.refreshToken = refreshToken;
                req.user = user;
                next();
            });
        };

        if (!authHeader) {
            return res.status(401).send({error:true, message:'token is expired'});
        }

        jwt.verify(authHeader, accessTokenSecret, (err, user) => {
            if (err) {
                if (err.message === "jwt expired") {
                    return newToken();
                }
                return res.status(403).send({error:true, message:'token is expired'});
            }
            req.user = user;
            next();
        });
    } catch (error) {
        res.status(500).send({ error: true, message: 'Internal Server Error' });
    }
}


exports.login = async(req, res) => {
    const { email, password } = req.body

   try {
    let accessToken;
    let refreshToken;
    if(!email || ! password) {
        return res.status(400).send({ error: true, message: 'Please provide all required field', error:false, success:true, accessToken: null, refreshToken: null })
    } 

    const user =  await Auth.findOne({where:{email}});
    if(!user){
        return res.status(200).send({error:true, error:false, success:true, message:'No User Account Exists'})
    }

    // const match = await bcrypt.compare(password,user.password);
    const match = password==user.password
    if(match){
        accessToken = jwt.sign({ username: user.name }, accessTokenSecret, { expiresIn: jwt_timeout })
        refreshToken = jwt.sign({ username:  user.name},refreshTokenSecret);
       refreshTokens.push(refreshToken)
       const { password, ...userWithOutPass } = user.toJSON();       
       return res.status(200).json({message:'Login Successfully !',error:false, success:true, accessToken, refreshToken, user: userWithOutPass })
    }   

      res.status(200).json({ error:true, message:'Check your credentials',error:false, success:true, accessToken: null, refreshToken: null})

   } catch (error) {
    console.log('error',error)
    return res.status(200).json({error:true, message:'something went wrong',error:true, success:false, accessToken: null, refreshToken: null })
   }

}


exports.logout = (req, res) => {
    const token = req.headers.token;
    console.log(token)
    console.log(refreshTokens.includes(token))
    refreshTokens = refreshTokens.filter(saved_token => saved_token !== token);
    console.log(refreshTokens.includes(token))
    res.send("Logout successful");
}