const MealModel = require('./MealModel');

//GET
module.exports.getMeal = async (req, res) => {
    const myMeal = await MealModel.find();
    res.send(myMeal)
}
//POST
module.exports.saveMeals = async (req, res) => {
    const { title } = req.body;
    MealModel.create({ title })
    .then((data) => { console.log("Meal added") 
    res.send(data)
})
}