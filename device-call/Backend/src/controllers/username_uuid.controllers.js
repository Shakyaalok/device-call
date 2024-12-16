const db = require('../models/modelindex');

const username_uuid = db.username_uuid;




//add 
exports.addUUID = async (req, res) => {
    try {
        const data = req.body;
        await username_uuid.create(data);
        res.send({ message: 'uuid has been added', success: true, error: false })
    } catch (error) {
        res.send({ message: error.message, success: false, error: true })
    }
}

//get
exports.getUUID = async (req, res) => {
    try {
        const data = await username_uuid.findAll({});
        if (data) {
            return res.send({ message: 'list of uuids', success: true, error: false })
        }
        return res.send({ message: 'No uuids found', success: false, error: true })
    } catch (error) {
        console.log('error----------->',error)
        res.send({ message: error.message, success: false, error: true })
    }
}

//delete

exports.deleteUUID = async (req, res) => {
    try {

        const uuid = req.query.uuid
        await username_uuid.destroy({ where: { uuid } })
        res.send({ message: 'success', success: true, error: false })
    } catch (error) {
        res.send({ message: error.message, success: false, error: true })
    }
}