const db = require('../models/modelindex');
const Device = db.Device
const admin = require('firebase-admin');
const file = require('../../applaunch-eternal-firebase-adminsdk-wogtm-9bc697506e.json')



//lauch device
admin.initializeApp({
    credential: admin.credential.cert(file)
});


exports.lauchDevice = async(req,res)=>{
    try {

        const id = req.query.id;

        const isFireBaseToken = await Device.findOne({where:{id}});

        const firebase_token = isFireBaseToken.dataValues.firebase_token

        if(isFireBaseToken.dataValues){

            console.log('-------------->',firebase_token)

            let temp_token =  'eRi6W4X4TjWTxaxxIzgKm_:APA91bG9XJ1l6BGxwpR0gxxdgOUf_TkecwoxMm2nlyeExbQdppg7pzYG7PsV-zn3iTojwBWcUbibqW3wOBIF34TMCuedOcdXjiMghoLEmWKTMF65fHfo1Jo'
            const registrationToken = firebase_token || temp_token;  // Replace with the actual token
     
            const message = {
                data: {
                    openApp: 'true',  // Custom data to trigger background actions in the app
                },
                token: registrationToken,  // Target a specific device using its registration token
            };
             
            // Send the message to the device
            admin.messaging().send(message)
                .then((response) => {
                    console.log('Successfully sent message:', response);
                })
                .catch((error) => {
                    console.error('Error sending message:', error);
                });
           return  res.send({data:'this is working', success:true, error:false, message:'launching has been started'})
        }
        
        res.send({message:'Unable to lauch device', success:false, error:true})
    } catch (error) {
        console.log('error---------->',error)
        res.send({message:error.message, success:false, error:true})
    }
}



//get 
exports.getDevice = async(req,res)=>{
    try{
    
    const devices = await Device.findAll({ attributes: { 
        exclude: ['firebase_token'] 
      }}) 
        
     res.send({data:devices,message:'cannot update the data', success:true, error:false})

    } catch (error) {
        console.log('error--->',error)
        res.send({message:error.message, success:false, error:true})
    }
}



//add-post
exports.addDevice = async(req,res)=>{
try {
    const {inspector_name,school_name,status,device_launch,firebase_token,device_id} = req.body;
   

    console.log('------------->', req.body)
    
    const deviceid = await Device.findOne({where:{device_id}});

    if(deviceid){
        return res.send({success:true, error:false, message: 'device already register' });
    }
    
    if (!inspector_name || typeof inspector_name !== 'string' || inspector_name.trim() === '') {
        return res.send({success:false, error:true, message: 'Inspector name is required.' });
      }
    
      // Check if school_name is provided and non-empty string
      if (!school_name || typeof school_name !== 'string' || school_name.trim() === '') {
        return res.send({success:false, error:true, message: 'School name is required.' });
      }      

    await Device.create({inspector_name,school_name,status,device_launch,firebase_token,device_id});
    res.send({message:'success',error:false, success:true})
} catch (error) {
    console.log('error--->',error)
    res.send({message:error.message, success:false, error:true})
}
}



//edit-put-/ -/force-update and then allow re-enter the details
exports.editDevice = async(req,res)=>{
    try {
        const {id, force_update} = req.query
        if(force_update){
            const [updatedRow] = await Device.update({...req.body,force_update},{where:{id}})

            if(updatedRow){
                return  res.send({message:'success',error:false, success:true})
              }
      
        }
       
        res.send({message:'cannot update the data', success:true, error:false})

    } catch (error) {
        console.log('error--->',error)
        res.send({message:error.message, success:false, error:true})
    }
}



//delete-destroy
exports.deleteDevice = async(req,res)=>{
 
    try {
        const id = req.query.id;

        await Device.destroy({where:{id}})      

        res.send({message:'success', success:true, error:false})

    } catch (error) {
        console.log('error--->',error)
        res.send({message:error.message, success:false, error:true})
    }
}


//validate the device
exports.deviceValidate = async(req,res)=>{
    try {

        const device_id = req.query.device_id;

        const deviceExists = await Device.findOne({where:{device_id}});
       

        if(!deviceExists?.device_id){
            return res.send({message:'No Device Found', error:true, success:false})
        }

        if(deviceExists.device_id==device_id){
            return res.send({message:'success',error:false, success:true, data:deviceExists})
        }

        res.send({message:'Unable to lauch device', success:false, error:true})
    } catch (error) {
        console.log('error---------->',error)
        res.send({message:error.message, success:false, error:true})
    }
}


