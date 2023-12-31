const updateUserController = require('../../controllers/usersControllers/updateUserController.js');

const updateUserHandler = async (req,res)=>{
    const {
        id,
        country,
         address_st,
          address_num,
           department,
            zip}= req.body;
    try {
        const result = await updateUserController(id,
            country,
             address_st,
              address_num,
               department,
                zip);
        res.status(200).json(result);    
    } 
    catch (error) {
        res.status({ error: error.message});
    }
};

module.exports = updateUserHandler;