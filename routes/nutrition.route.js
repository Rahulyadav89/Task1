const{Nutrition_logger} = require('../controllers/nuntrition.controlle');
const{fetch_Api} = require('../controllers/nuntrition.controlle');
module.exports = (app) => {
    app.post('/nutrition/logger' , Nutrition_logger);
    app.get('/mealSummary' , dailyMealSummary);
app.get('/api/fetchmealsuggestion' , fetchApi)
}