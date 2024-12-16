const db = require('../models/modelindex');
const Inspection = db.Inspection
const Device = db.Device
const Op = db.Op

//get by id

exports.getSchoolOrInspectorNameById = async (req, res) => {
    try {
        const { id } = req.query
        const data = await Device.findOne({ where: { id }, attributes: ['device_id', 'inspector_name', 'school_name'] });
        if (data) {
            return res.send({ data: data, message: 'success', error: false, success: true })
        }

        res.send({ message: 'error in fetching the data', error: false, success: true })
    } catch (error) {
        console.log('error--->', error)
        res.send({ message: error.message, success: false, error: true })
    }
}


// add inspection detail
exports.addInspectionDetails = async (req, res) => {
    try {
        const data = req.body;
        console.log('data--------->',data)
        await Inspection.create({ ...data, created_by_name: data.inspector_name });
        res.send({ message: 'success', error: false, success: true })

    } catch (error) {
        console.log('error--->', error)
        res.send({ message: error.message, success: false, error: true })
    }
}


// get inspection detail
exports.getInspectionDetails = async (req, res) => {
    try {

        const inspectionDetails = await Inspection.findAll({});
        res.send({ data: inspectionDetails, success: true, error: false, message: 'success' })

    } catch (error) {
        console.log('error--->', error)
        res.send({ message: error.message, success: false, error: true })
    }
}


exports.getFilterData = async (req, res) => {
    try {
        const { inspector_name, school_name, startDate, endDate, department } = req.body

        let date = {};
        if (startDate && endDate) {
            date.createdAt = { [Op.between]: [startDate, endDate] }; 
        } else if (startDate) {
            date.createdAt = { [Op.gte]: startDate };
        } else if (endDate) {
            date.createdAt = { [Op.lte]: endDate }; 
        }

        const filter = await Inspection.findAll({
            where: {
                [Op.and]: [
                    inspector_name ? { inspector_name } : null,
                    school_name ? { school_name } : null,
                    ...Object.keys(date).length ? [date] : [],
                    department?.length ? { department_name: { [Op.in]: department } } : null,
                ].filter(Boolean),
            }
        })

          return  res.send({ data:filter, message: filter.length>0 ? 'success' : 'No Match found', success: true, error: false })
      
    } catch (error) {
        console.log('error--->', error)
        res.send({ message: error.message, success: false, error: true })
    }
}  