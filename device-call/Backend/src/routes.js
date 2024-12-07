const express = require('express');
const router = express.Router();
const authController = require('./controllers/auth.controller')
const contentController = require('./controllers/content.controller')
const s3Content = require('./controllers/s3.controllers')

router.post('/login', authController.login)
router.post('/logout', authController.logout)


router.get('/contents',  authController.authenticateJWT,  contentController.getContents)
router.get('/k12',       authController.authenticateJWT,  contentController.K12);
router.get('/higher-ed', authController.authenticateJWT,  contentController.HigherEd);
// router.get('/s3',s3Content.getS3Obj)
router.get('/search',authController.authenticateJWT, contentController.Search)


module.exports = router;