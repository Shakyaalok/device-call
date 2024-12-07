const db = require('../models/modelindex')
const K12 = db.k12
const Enterprise = db.Enterprises;
const HigherEd = db.HigherEd
const Op = db.Op


exports.getContents = async (req, res) => {
    const {count=1,limit=12,category_id} = req.query;
    const offset = (Number(count)-1)*limit
    let contents;
    try {
        if(category_id==='null'){
            const k12Contents = await K12.findAll({ limit, offset });        
            const k12length = k12Contents.length
    
            const higherEdContents = await HigherEd.findAll({ limit, offset });
            const higherEdLength = higherEdContents.length;
           
             contents = [...higherEdContents, ...k12Contents];
    
            const hasMoreHigherEd = higherEdLength === limit;
            const hasMoreK12 = k12length === limit;
    
    
            if (!hasMoreK12 && hasMoreHigherEd) {
                const remainingHigherEdContents = await HigherEd.findAll({
                    limit: limit - k12length,
                    offset: offset + higherEdLength
                });
                contents = [...k12Contents, ...remainingHigherEdContents];
            }
    
              if (!hasMoreHigherEd && hasMoreK12) {
                const remainingK12Contents = await K12.findAll({
                    limit: limit - higherEdLength,
                    offset: offset + k12length
                });
    
                contents = [...k12Contents, ...remainingK12Contents];
            }
    
            res.json(contents)
        }


        if(Number(category_id)===1){
             contents = await K12.findAll({limit,offset});
            res.json(contents)
        }


        if(Number(category_id)===2){
            contents = await HigherEd.findAll({limit,offset});
            res.json(contents)
        }
      

    } catch (error) {
        return res.status(500).json({ message: 'something went wrong', error: true })
    }
}


exports.K12 = async (req, res) => {
    let gradeArray = req.query?.grades?.map((grade)=>Number(grade))
    let subjectArray = req.query?.subjects

    let whereClause = {};
    if (gradeArray?.length) {
        whereClause.grade = { [Op.in]: gradeArray };
    }
    if (subjectArray?.length) {
        whereClause.subjectName = { [Op.in]: subjectArray };
    }
    
    try {
        let contents =  await K12.findAll({where:whereClause});
        res.json(contents)
    } catch (error) {
        return res.status(500).json({ message: 'something went wrong', error: true })
    }
}


exports.HigherEd = async (req, res) => {
    
    let module_name = req?.query?.module_name
    
    let whereClause = {};
    if(module_name?.length>0){
        whereClause.module_name = {[Op.in]:module_name}
    }

    try {
        let contents = await HigherEd.findAll({where:whereClause});
        res.json(contents)
    } catch (error) {
        return res.status(500).json({ message: 'something went wrong', error: true })

    }

}




const searchContent = async (model, searchText, fields) => {
    return await model.findAll({
        where: {
            [Op.or]: fields.map(field => ({
                [field]: { [Op.like]: `%${searchText}%` }
            }))
        }
    });
};

exports.Search = async (req, res) => {
    const { searchText, category_id } = req.query;

    try {
        let content = [];
        const k12Fields = ['topic_name', 'subjectName', 'module_name', 'main_description'];
        const higherEdFields = ['module_name', 'main_description', 'description'];

        if (Number(category_id) === 1) {
            content = await searchContent(K12, searchText, k12Fields);
        } else if (Number(category_id) === 2) {
            content = await searchContent(HigherEd, searchText, higherEdFields);
        } else {
            const k12Content = await searchContent(K12, searchText, k12Fields);
            const higherEdContent = await searchContent(HigherEd, searchText, higherEdFields);
            content.push(...k12Content, ...higherEdContent);
        }

        if(!content.length){
            return res.status(404).json({message:'No Result Found',contents:content})
        }

        res.status(200).json({ message: 'filtered Results', contents: content });
    } catch (error) {
        return res.status(500).json({ message: 'something went wrong', error: error.message });
    }
};