const{Nutrition} = require('../model/nutrition.model');

 const Nutrition_logger = async(res,req) => {
  try{
    const nutrition = new Nutrition(req.body);
    await nutrition.save();
    res.status(201).json({message: "Nutrition logged successfully"});
    } catch (err) {
      res.status(500).json({message: "Failed to log nutrition", error: err});
  }
  
 }
 module.exports = Nutrition_logger;


 //controller for meal summary



 