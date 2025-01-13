const mongoose = require('mongoose');

const NutritionScema = mongoose.Schema({
    mealname : {
        type:String
        },
  calories : {
    type : String
  },
  protein : {
    type : String
  },
  fats : {
    type : String
  },
  cabs : {
    type:String
  },
  timestamp:{type: Date, default:Date.now}

    }
)
module.exports = mongoose.model('Nutrition' , NutritionScema);