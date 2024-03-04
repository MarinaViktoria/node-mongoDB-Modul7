const { Router } = require('express');
const router = Router();
const { getMeal, saveMeals } = require('./MealController')

router.get('/', getMeal)
router.post('/saveMeals', saveMeals)

module.exports = router;