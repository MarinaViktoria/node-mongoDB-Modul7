const { Router } = require('express');
const router = Router();
const { getMeal, saveMeals, deleteMeal, editMeal } = require('./MealController')

router.get('/', getMeal);
router.post('/saveMeals', saveMeals);
router.delete('/deleteMeal', deleteMeal); //post möglich
router.put('/editMeal', editMeal)         //post möglich

module.exports = router;