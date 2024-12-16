const express = require('express');
const router = express.Router();
const authController = require('./controllers/auth.controller')
const deviceController = require('./controllers/device.controllers');
const inspectionController = require('./controllers/inspection.controllers');
const department = require('./controllers/department.controllers')
const username_uuid = require('./controllers/username_uuid.controllers')

router.post('/login', authController.login)
router.post('/logout', authController.logout)

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
router.get('/school-name',inspectionController.getSchoolOrInspectorNameById)
router.get('/inspection',inspectionController.getInspectionDetails)
router.post('/inspection',inspectionController.addInspectionDetails)
router.post('/filter',inspectionController.getFilterData)

//departments
router.get('/department',department.getDepartment)
router.post('/department',department.addDepartment)

// uuid
router.post('/uuid', username_uuid.addUUID);
router.get('/uuid', username_uuid.getUUID);
router.delete('/uuid', username_uuid.deleteUUID);

module.exports = router;