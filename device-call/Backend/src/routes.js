const express = require('express');
const router = express.Router();
const authController = require('./controllers/auth.controller')
const contentController = require('./controllers/content.controller')
const deviceController = require('./controllers/device.controllers');

router.post('/login', authController.login)
router.post('/logout', authController.logout)


// router.get('/contents',  authController.authenticateJWT,  contentController.getContents)
// router.get('/k12',       authController.authenticateJWT,  contentController.K12);
// router.get('/higher-ed', authController.authenticateJWT,  contentController.HigherEd);
// router.get('/search',authController.authenticateJWT, contentController.Search)

//devices

router.get('/devices/launch',deviceController.lauchDevice)
router.get('/devices/validate',deviceController.deviceValidate)
router.get('/devices', deviceController.getDevice);
router.post('/devices', deviceController.addDevice);
router.put('/devices', deviceController.editDevice);
router.delete('/devices', deviceController.deleteDevice);
// router.get('/devices',authController.authenticateJWT, deviceController.getDevice);
// router.post('/devices',authController.authenticateJWT, deviceController.addDevice);
// router.put('/devices',authController.authenticateJWT, deviceController.editDevice);
// router.delete('/devices',authController.authenticateJWT, deviceController.deleteDevice);

module.exports = router;